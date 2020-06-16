import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})

export class StoryComponent implements OnInit {
  story: any = {
    title: 'Deep Relaxation',
    likes: '2.2',
    thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Creativity/Creativity_Artistic-Clarity.jpg'
  };

  player: Plyr;

  videoSources: Plyr.Source[] = [
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getContent(params.id))
  }

  private getContent(id: string) {
  }

}//end of class
