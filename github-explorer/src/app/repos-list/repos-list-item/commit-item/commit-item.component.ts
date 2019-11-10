import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ICommit } from 'src/app/models/commit.model';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.scss']
})
export class CommitItemComponent implements OnInit {

  @Input() commitsData: ICommit[];

  constructor() { }

  ngOnInit() {
  }

  formatDate(date: string): string {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

}
