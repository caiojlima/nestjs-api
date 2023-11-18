import { BadRequestException } from '@nestjs/common';
import { writeFile, readFileSync } from 'fs';
import { UserModel } from './models/user.model';

const DB_PATH = './src/database/database.json';

export const getAllUsers = (): UserModel[] => JSON.parse(readFileSync(DB_PATH).toString());

export const getUserById = (id: number): UserModel => {
    const db = getAllUsers();
    return db.find((model: UserModel) => model.id === id);
}


export const createUser = (data: UserModel): void => {
    const db = getAllUsers();
    
    data.id = autoIncrementHandler(db);

    db.push({
        id: data.id,
        name: data.name,
        email: data.email,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
    } as UserModel);

    writeFile(DB_PATH, JSON.stringify(db), (err) => {
        if (err) {
            throw new BadRequestException();
        }
      });
}

const autoIncrementHandler = (db: UserModel[]): number => db.length ? db[db.length - 1].id + 1 : 1;
