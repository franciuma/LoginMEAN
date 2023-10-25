import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  login(profile: Profile) {

    return this.http.post(this.URL + '/usuarios', profile)
  }
}
