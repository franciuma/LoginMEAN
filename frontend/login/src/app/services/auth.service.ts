import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.URL + '/login', user)
  }
}
