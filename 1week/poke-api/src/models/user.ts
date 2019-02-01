export class User {
  id: number;
  username: string;

  constructor(id = 0, username = '', password = '', name = '') {
    this.id = id;
    this.username = username;
  }
}