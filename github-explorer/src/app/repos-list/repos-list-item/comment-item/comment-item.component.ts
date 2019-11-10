import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.sass']
})
export class CommentItemComponent implements OnInit {

  @Input() commentsData;
  commentDate: string;

  constructor() { }

  ngOnInit() {
  }

  formatDate(date: string) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

}
