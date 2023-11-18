import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { UserRequestDTO } from './DTOs/requests/user.request.dto';
import { UserResponseDTO } from './DTOs/responses/user.response.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): UserResponseDTO[] {
    return this.appService.getAll();
  }

  @Post()
  create(@Body() requestBody: UserRequestDTO): UserResponseDTO {
    return this.appService.create(requestBody);
  }
}
