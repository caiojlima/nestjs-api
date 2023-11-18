import { Injectable } from '@nestjs/common';
import { UserModel } from '../repositories/models/user.model';
import { UserRequestDTO } from '../controllers/DTOs/requests/user.request.dto';
import { getAllUsers, createUser } from '../repositories/user.repository';
import { UserResponseDTO } from 'src/controllers/DTOs/responses/user.response.dto';

@Injectable()
export class AppService {
  getAll(): UserResponseDTO[] {
    const modelArray: UserModel[] = getAllUsers();
    return new UserResponseDTO().fromModelArray(modelArray);
  }
  
  create(userRequest: UserRequestDTO): UserResponseDTO {
    const currentDate = new Date();
    const userModel = new UserModel(userRequest.name, userRequest.email, currentDate, currentDate);
    createUser(userModel);
    return new UserResponseDTO().fromModel(userModel);
  }
}
