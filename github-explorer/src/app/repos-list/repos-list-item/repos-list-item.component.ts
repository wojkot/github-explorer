import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from 'src/services/http.service';
import { GithubApiService } from 'src/services/github-api.service';

@Component({
  selector: 'app-repos-list-item',
  templateUrl: './repos-list-item.component.html',
  styleUrls: ['./repos-list-item.component.scss']
})
export class ReposListItemComponent implements OnInit {

  @Input() repoData;
  @Input() userName;

  repoLastUpdate: string;
  starsCount = 0;
  commitsInfo: any = [];
  branchesData: any = [];
  commentsData: any = [];

  constructor(
    private httpService: HttpService,
    private githubApiService: GithubApiService) { }

  ngOnInit() {
    this.repoLastUpdate = moment(this.repoData.updated_at).format('MMMM Do YYYY, h:mm:ss a');
    this.countStars(this.repoData.stargazers_url);
    this.getBranchesData();
    this.getCommentsData()
  }

  async countStars(url: string) {
    const starsData: any = await this.httpService.getRequest(url).toPromise();
    this.starsCount = starsData.length;
  }

  async getBranchesData() {
    this.branchesData = await this.githubApiService.requestReposBranchesData(this.userName, this.repoData.name ).toPromise();
  }

  async getCommentsData() {
    this.commentsData = await this.githubApiService.requestReposCommentsData(this.userName, this.repoData.name ).toPromise();
  }

}
