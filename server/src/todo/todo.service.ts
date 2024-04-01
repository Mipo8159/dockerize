import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoReposity: Repository<Todo>,
  ) {}

  findAll() {
    return this.todoReposity.find();
  }

  async findOne(id: number) {
    const todo = await this.todoReposity.findOneBy({ id });
    if (!todo) throw new NotFoundException('todo not found');
    return todo;
  }

  create(input: { title: string; description: string }) {
    const todo = new Todo();
    Object.assign(todo, input);
    return this.todoReposity.save(todo);
  }

  async update(
    id: number,
    input: { title: string; description: string; isCompleted: boolean },
  ) {
    const todo = await this.findOne(id);
    todo.isCompleted = input.isCompleted;
    todo.title = input.title;
    todo.description = input.description;
    return this.todoReposity.save(todo);
  }

  async delete(id: number) {
    const todo = await this.findOne(id);
    return this.todoReposity.remove(todo);
  }
}
