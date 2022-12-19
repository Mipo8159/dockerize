import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './inputs/reate-user.input';

@Injectable()
export class UserService {
  private users = [
    { id: 1, email: 'marius@gmail.com', password: 'not-secure' },
    { id: 2, email: 'maria@gmail.com', password: 'not-secure' },
    { id: 3, email: 'maria@gmail.com1', password: 'not-secure' },
  ];

  create(input: CreateUserInput) {
    const user = {
      ...input,
      id: this.users.length + 1,
    };
    this.users.push(user);

    return { id: user.id, email: user };
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    return user;
  }
}
