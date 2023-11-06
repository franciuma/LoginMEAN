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
    const userId = user._id;
    return this.http.get(this.URL + `/eliminar/${userId}`);
  }

  get(userId: string) {
    return this.http.get(this.URL + `/usuarios/${userId}`);
  }

  update(user: User) {
    const userId = user._id;
    return this.http.put(this.URL + `/actualizar/${userId}`, user);
  }
}
