import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(this.URL + '/usuarios');
  }

  delete(user: User) {
    const id = user._id;
    return this.http.get(this.URL + `/eliminar/${id}`);
  }
}
