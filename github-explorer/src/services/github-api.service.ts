import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {

  private gitReposObservable = new Observable();
   nameSubject = new Subject<string>();

  constructor(private http: HttpClient) { }

  setOwnerName(name: string) {
    this.nameSubject.next(name)
  }

  getOwnerName() {
    return this.nameSubject;
  }

  requestUsersRepoData(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}/repos`);
  }
}