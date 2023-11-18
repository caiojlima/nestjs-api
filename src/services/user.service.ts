import { Injectable } from '@nestjs/common';
import { UserModel } from '../repositories/models/user.model';
import { UserRequestDTO } from '../controllers/DTOs/requests/user.request.dto';
import { UserResponseDTO } from 'src/controllers/DTOs/responses/user.response.dto';
import { UserRepository } from 'src/repositories/user.repository';
import { UserUpdateRequestDto } from 'src/controllers/DTOs/requests/user.update.request.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAll(): UserResponseDTO[] {
    const modelArray: UserModel[] = this.userRepository.findAll();
    return new UserResponseDTO().fromModelArray(modelArray);
  }

  getById(id: number): UserResponseDTO {
    const userModel = this.userRepository.findById(id);
    return new UserResponseDTO().fromModel(userModel);
  }

  create(userRequest: UserRequestDTO): UserResponseDTO {
    const currentDate = new Date();
    const userModel = new UserModel(userRequest.name, userRequest.email, currentDate, currentDate);
    this.userRepository.save(userModel);
    return new UserResponseDTO().fromModel(userModel);
  }

  update(id: number, userRequest: UserUpdateRequestDto): UserResponseDTO {
    const currentUser: UserModel = this.userRepository.findById(id);
    
    currentUser.name = userRequest.name ? userRequest.name : currentUser.name;
    currentUser.email = userRequest.email ? userRequest.email: currentUser.email;
    currentUser.updatedAt = new Date();
    
    this.userRepository.save(currentUser);

    return new UserResponseDTO().fromModel(currentUser);
  }
}
