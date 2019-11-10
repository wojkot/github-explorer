import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/services/github-api.service';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {

  userName = '';

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit() {
  }

  searchRepos() {
    if(this.userName) {
      this.githubApiService.setOwnerName(this.userName);
    }
  }
}
