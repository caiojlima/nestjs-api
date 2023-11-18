import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserRequestDTO } from './user.request';

global.inMemoryDatabase = [];

@Injectable()
export class AppService {
  getAll(): UserDTO[] {
    return global.inMemoryDatabase;
  }
  create(userRequest: UserRequestDTO): UserDTO{
    const currentDate = new Date();
    const newUser = new UserDTO(userRequest.name, userRequest.email, currentDate, currentDate);
    console.log(newUser.getName(), newUser.getEmail());
    return global.inMemoryDatabase.push();

  }
}
