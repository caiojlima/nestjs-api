import { BadRequestException } from '@nestjs/common';
import { writeFile, readFileSync } from 'fs';
import { UserModel } from './models/user.model';
import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository {
    public findAll = (): UserModel[] => this.DB().Users;

    public findById = (id: number): UserModel => {
        const db = this.findAll();
        return db.find((model: UserModel) => model.id === id);
    }


    public save = (data: UserModel): void => {
        let db = this.findAll();
        
        if (data.id) {
            db = db.map((model: UserModel) => model.id === data.id ? data : model);
        } else {
            data.id = this.autoIncrementHandler(db);

            db.push({
                id: data.id,
                name: data.name,
                email: data.email,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            } as UserModel);
        }

        const DB_INSTANCE = this.DB()
        DB_INSTANCE.Users = db;

        writeFile(this.DB_PATH, JSON.stringify(DB_INSTANCE), (err) => {
            if (err) {
                throw new BadRequestException();
            }
        });
        
    }

}
