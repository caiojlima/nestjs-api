import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './user.dto';
import { UserRequestDTO } from './user.request';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): UserDTO[] {
    return this.appService.getAll();
  }

  @Post()
  create(@Body() requestBody: UserRequestDTO): UserDTO {
    return this.appService.create(requestBody);
  }
}
