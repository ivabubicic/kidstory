import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlyrComponent} from 'ngx-plyr';
import * as Plyr from 'plyr';
import {StoryService} from '../../services/story.service';
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})

export class StoryComponent implements OnInit {

  story: any;

  /*story: any = {
    title: 'Morning Yoga',
    likes: '3.1',
    url: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Focus/Focus_Acquiring-Knowledge.jpg'
  };*/

  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, {static: true})

  plyr: PlyrComponent;
  // or get it from plyrInit event
  player: Plyr;

  audioSources: any;

  /*audioSources: Array<any> = [
    {
      src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      type: 'audio/mp3',
    },
    {
      src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      type: 'audio/mp3',
    }
  ];*/

  public id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: StoryService) {

  }

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.getContent(params.id));
    // this.id = this.activatedRoute.params.pipe(pluck('id')).toString();
  }

  private getContent(id) {
    this.service.getById(id).subscribe(data => this.story = data);
  }

}
