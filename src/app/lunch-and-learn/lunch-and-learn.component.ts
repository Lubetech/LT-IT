import { Component, OnInit, Input } from '@angular/core';
import { LunchAndLearn } from '../models/lunch-and-learn';

@Component({
  selector: 'app-lunch-and-learn',
  templateUrl: './lunch-and-learn.component.html',
  styleUrls: ['./lunch-and-learn.component.scss']
})
export class LunchAndLearnComponent implements OnInit {

  @Input()
  lunchAndLearn: LunchAndLearn
  constructor() { }

  ngOnInit() {
  }

}
