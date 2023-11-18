import { Injectable } from '@nestjs/common';
import { UserModel } from '../repositories/models/user.model';
import { UserRequestDTO } from '../controllers/DTOs/requests/user.request.dto';
import { UserResponseDTO } from 'src/controllers/DTOs/responses/user.response.dto';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAll(): UserResponseDTO[] {
    const modelArray: UserModel[] = this.userRepository.getAllUsers();
    return new UserResponseDTO().fromModelArray(modelArray);
  }

  getById(id: number): UserResponseDTO {
    const userModel = this.userRepository.getUserById(id);
    return new UserResponseDTO().fromModel(userModel);
  }

  create(userRequest: UserRequestDTO): UserResponseDTO {
    const currentDate = new Date();
    const userModel = new UserModel(userRequest.name, userRequest.email, currentDate, currentDate);
    this.userRepository.createUser(userModel);
    return new UserResponseDTO().fromModel(userModel);
  }
}
