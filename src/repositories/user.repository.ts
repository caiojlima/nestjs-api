import { BadRequestException } from '@nestjs/common';
import { writeFile, readFileSync } from 'fs';
import { UserModel } from './models/user.model';

export const getAllUsers = (): UserModel[] => {
   return JSON.parse(readFileSync('./src/repositories/database.json').toString());
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

    writeFile('./src/repositories/database.json', JSON.stringify(db), (err) => {
        if (err) {
            throw new BadRequestException();
        }
      });
}

const autoIncrementHandler = (db: UserModel[]): number => {
    return db.length ? db[db.length - 1].id + 1 : 1;
}