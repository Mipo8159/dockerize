// Import necessary decorators and modules from Nest.js.
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body('todo') todo: { title: string; description: string }) {
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body('todo')
    todo: { title: string; description: string; isCompleted: boolean },
  ) {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
