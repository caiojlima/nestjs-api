import { UserModel } from "src/repositories/models/user.model";

export class UserResponseDTO {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;

    public fromModel(userModel: UserModel): UserResponseDTO {
        this.id = userModel.id;
        this.name = userModel.name;
        this.email = userModel.email;
        this.createdAt = userModel.createdAt;
        this.updatedAt = userModel.updatedAt;

        return this;
    }

    public fromModelArray(userModels: UserModel[]): UserResponseDTO[] {
        return userModels.map((model: UserModel) => new UserResponseDTO().fromModel(model));
    }
}