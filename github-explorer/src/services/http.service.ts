import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(protected http: HttpClient) { }

  getRequest(url: string) {
    return this.http.get(url).toPromise();
  }
}
