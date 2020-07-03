import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StoryService} from '../../services/story.service';
import {id_ID} from 'ng-zorro-antd';
import {element} from "protractor";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  content: Array<any>;

  // content: Array<any> = [{
  //   title: 'Deep Relaxation',
  //   elementId: '1',
  //   duration: '15 min 30 sec',
  //   likes: '2.2',
  //   author: 'Dynamo',
  //   thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Creativity/Creativity_Artistic-Clarity.jpg'
  // },
  //   {
  //     title: 'Meditation',
  //     elementId: '2',
  //     duration: '13 min',
  //     likes: '3.5',
  //     author: 'Mark',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Inner+Peace/Inner-Peace_Deep-Relaxation.jpg'
  //   },
  //   {
  //     title: 'Anxiety Release',
  //     elementId: '3',
  //     duration: '21 min 10 sec',
  //     likes: '4.1',
  //     author: 'Lucy',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Focus/Focus_Acquiring-Knowledge.jpg'
  //   },
  //   {
  //     title: 'Lucid Dreaming',
  //     elementId: '4',
  //     duration: '4 min 40 sec',
  //     likes: '3.7',
  //     author: 'Samantha',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Meditation/Meditation_Deep-Meditation.jpg'
  //   },
  //   {
  //     title: 'Clarity',
  //     elementId: '5',
  //     duration: '30 min 10 sec',
  //     likes: '3.9',
  //     author: 'Roxy',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Sleep/Sleep_Deep-Sleep.jpg'
  //   },
  //   {
  //     title: 'Eclipse',
  //     elementId: '6',
  //     duration: '52 min 20 sec',
  //     likes: '2.8',
  //     author: 'Joanne',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Inner+Peace/Inner-Peace_Positive-Thinking.jpg'
  //   },
  //   {
  //     title: 'Positive Thinking',
  //     elementId: '7',
  //     duration: '26 min 50 sec',
  //     likes: '1.5',
  //     author: 'John',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Inner+Peace/Inner-Peace_Ethereal-Peace.jpg'
  //   },
  //   {
  //     title: 'Deep Relaxation',
  //     elementId: '8',
  //     duration: '15 min 30 sec',
  //     likes: '2.2',
  //     author: 'Dynamo',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Creativity/Creativity_Artistic-Clarity.jpg'
  //   },
  //   {
  //     title: 'Lucid Dreaming',
  //     elementId: '9',
  //     duration: '4 min 40 sec',
  //     likes: '3.7',
  //     author: 'Samantha',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Meditation/Meditation_Deep-Meditation.jpg'
  //   },
  //   {
  //     title: 'Clarity',
  //     elementId: '10',
  //     duration: '30 min 10 sec',
  //     likes: '3.9',
  //     author: 'Roxy',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Sleep/Sleep_Deep-Sleep.jpg'
  //   },
  //   {
  //     title: 'Eclipse',
  //     elementId: '11',
  //     duration: '52 min 20 sec',
  //     likes: '2.8',
  //     author: 'Joanne',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Inner+Peace/Inner-Peace_Positive-Thinking.jpg'
  //   },
  //   {
  //     title: 'Anxiety Release',
  //     elementId: '12',
  //     duration: '21 min 10 sec',
  //     likes: '4.1',
  //     author: 'Lucy',
  //     thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Focus/Focus_Acquiring-Knowledge.jpg'
  //   }];

  /*sections = [
    {type: 'workouts', name: 'Workout'},
    {type: 'beauty', name: 'Beauty'}
  ];*/

  featured;
  contentAvailable: any;

  constructor(private router: Router, private service: StoryService) {

  }

  ngOnInit() {
    this.getContent();
    this.service.getAll().subscribe(data => this.content = data);
  }

  getContent() {
  }

  contentClick(elementId: string): void {
    // this.router.navigate(['story-component']);
    this.router.navigate([`story-component/${elementId}`]);
  }


}


