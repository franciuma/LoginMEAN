export class User {
  _id?: string;
  username: string;
  password: string;
  role?: string;

  constructor(username: string, password: string, _id?: string, role?: string) {
    this._id = _id;
    this.username = username;
    this.password = password;
    if (role) this.role = role;
  }
}
