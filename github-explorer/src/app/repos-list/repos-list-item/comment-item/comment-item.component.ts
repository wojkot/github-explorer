import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { IComment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input() commentsData: IComment[];

  constructor() { }

  ngOnInit() {
  }

  formatDate(date: string): string {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

}
