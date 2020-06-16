import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  content: Array<any> = [{
    title: 'Deep Relaxation',
    duration: '15 min 30 sec',
    likes: '2.2',
    author: 'Dynamo',
    thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Creativity/Creativity_Artistic-Clarity.jpg'
  },
    {
      title: 'Meditation',
      duration: '13 min',
      likes: '3.5',
      author: 'Mark',
      thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Inner+Peace/Inner-Peace_Deep-Relaxation.jpg'
    },
    {
      title: 'Anxiety Release',
      duration: '21 min 10 sec',
      likes: '4.1',
      author: 'Lucy',
      thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Focus/Focus_Acquiring-Knowledge.jpg'
    },
    {
      title: 'Lucid Dreaming',
      duration: '4 min 40 sec',
      likes: '3.7',
      author: 'Samantha',
      thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Meditation/Meditation_Deep-Meditation.jpg'
    },
    {
      title: 'Clarity',
      duration: '30 min 10 sec',
      likes: '3.9',
      author: 'Roxy',
      thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Sleep/Sleep_Deep-Sleep.jpg'
    },
    {
      title: 'Eclipse',
      duration: '52 min 20 sec',
      likes: '2.8',
      author: 'Joanne',
      thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Inner+Peace/Inner-Peace_Positive-Thinking.jpg'
    },
    {
      title: 'Positive Thinking',
      duration: '26 min 50 sec',
      likes: '1.5',
      author: 'John',
      thumb: 'https://d1rdw86ji6lelz.cloudfront.net/image/in/Mind/Inner+Peace/Inner-Peace_Ethereal-Peace.jpg'
    }];
  sections = [
    {type: 'workouts', name: 'Workout'},
    {type: 'beauty', name: 'Beauty'}
  ];
  featured;
  contentAvailable: any;

  constructor(private router: Router) {}

ngOnInit(){
  this.getContent();
}

  getContent(){
  }

  contentClick(): void{
  }


}


