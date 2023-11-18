import { Injectable } from '@nestjs/common';
import { UserModel } from '../user.model';
import { UserRequestDTO } from '../user.request';
import { readDatabaseFile, writeOnDatabaseFile } from '../database/database.repository';

@Injectable()
export class AppService {
  getAll(): UserModel[] {
    return readDatabaseFile()
  }
  create(userRequest: UserRequestDTO): UserModel{
    const currentDate = new Date();
    const user = new UserModel(userRequest.name, userRequest.email, currentDate, currentDate);
    writeOnDatabaseFile(user);
    return user;
  }
}
