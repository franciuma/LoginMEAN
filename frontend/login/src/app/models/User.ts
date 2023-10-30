export class User {
  username: string;
  password: string;
  rol?: string;

  constructor(username: string, password: string, rol?: string) {
    this.username = username;
    this.password = password;
    if (rol) this.rol = rol;
  }
}
