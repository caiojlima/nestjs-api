import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserRequestDTO } from './DTOs/requests/user.request.dto';
import { UserResponseDTO } from './DTOs/responses/user.response.dto';
import { UserUpdateRequestDto } from './DTOs/requests/user.update.request.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): UserResponseDTO[] {
    return this.userService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): UserResponseDTO {
    return this.userService.getById(Number(id));
  }

  @Post()
  create(@Body() requestBody: UserRequestDTO): UserResponseDTO {
    return this.userService.create(requestBody);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() requestBody: UserUpdateRequestDto): UserResponseDTO {
    return this.userService.update(Number(id), requestBody);
  }
}
