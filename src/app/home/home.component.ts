import { Component, OnInit } from '@angular/core';
import { LunchAndLearn } from '../models/lunch-and-learn';
import { NewsItem } from '../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsItems: NewsItem[] = [
    {
      date: new Date('7/25/2018'),
      title: 'Lube-Tech IT Website Goes Online',
      article: 'NBC reports that the Lube-Tech IT group has developed an internal site to better aid its people. Nobody read this report except for me.'
    }
  ]

  lunchAndLearns: LunchAndLearn[] = [
    {
      date: new Date('8/10/2017'),
      title: 'Latest eCommerce V2',
      description: 'Review structure and status',
      presenter: 'Matt'
    },
    {
      date: new Date('9/7/2018'),
      title: 'One Neck Data Center Tour',
      description: 'Visit One Neck Data Center',
      presenter: 'Jim'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
