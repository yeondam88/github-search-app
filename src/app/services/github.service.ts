import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
  private username: string = "yeondam88";
  private client_id: string = "cdc3c1cd26aa32f8c1fe";
  private client_secret: string = "1d18bd0a52bb0faf3a4080dccea5d7d29434e0af";

  constructor(private _http: Http) { 
    console.log('Github Service init...');
  }
  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username)
        .map(res => res.json());
  }
  getRepo() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos')
          .map(res => res.json());
  }
  updateUsername(username: string) {
    this.username = username;
  }
}