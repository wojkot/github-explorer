import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from 'src/services/http.service';
import { GithubApiService } from 'src/services/github-api.service';
import { ICommit } from 'src/app/models/commit.model';
import { IComment } from 'src/app/models/comment.model';
import { IBranch } from 'src/app/models/branch.model';
import { IRepository } from 'src/app/models/repository.model';

@Component({
  selector: 'app-repos-list-item',
  templateUrl: './repos-list-item.component.html',
  styleUrls: ['./repos-list-item.component.scss']
})
export class ReposListItemComponent implements OnInit {

  @Input() repoData: IRepository;
  @Input() userName: string;

  repoLastUpdate: string;
  starsCount = 0;
  commitsData: ICommit[] = [];
  branchesData: IBranch[] = [];
  commentsData: IComment[] = [];

  constructor(
    private httpService: HttpService,
    private githubApiService: GithubApiService) { }

  ngOnInit() {
    this.repoLastUpdate = moment(this.repoData.updated_at).format('MMMM Do YYYY, h:mm:ss a');
    this.countStars(this.repoData.stargazers_url);
    this.getBranchesData();
    this.getCommentsData();
    this.getCommitsData();
  }

  async countStars(url: string): Promise<void> {
    const starsData: any = await this.httpService.getRequest(url);
    this.starsCount = starsData.length;
  }

  async getBranchesData(): Promise<void> {
    this.branchesData = await this.githubApiService.requestReposBranchesData(this.userName, this.repoData.name ) as IBranch[];
  }

  async getCommentsData(): Promise<void> {
    this.commentsData = await this.githubApiService.requestReposCommentsData(this.userName, this.repoData.name ) as IComment[];
  }

  async getCommitsData(): Promise<void> {
    this.commitsData = await this.githubApiService.requestReposCommitsData(this.userName, this.repoData.name) as ICommit[];
  }

}
