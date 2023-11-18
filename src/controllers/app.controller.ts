import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { UserModel } from '../user.model';
import { UserRequestDTO } from '../user.request';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): UserModel[] {
    return this.appService.getAll();
  }

  @Post()
  create(@Body() requestBody: UserRequestDTO): UserModel {
    return this.appService.create(requestBody);
  }
}
