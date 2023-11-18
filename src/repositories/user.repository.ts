import { BadRequestException } from '@nestjs/common';
import { writeFile, readFileSync } from 'fs';
import { UserModel } from './models/user.model';

export class UserRepository {
    
    private DB_PATH: string = './src/database/database.json';

    public getAllUsers = (): UserModel[] => JSON.parse(readFileSync(this.DB_PATH).toString());

    public getUserById = (id: number): UserModel => {
        const db = this.getAllUsers();
        return db.find((model: UserModel) => model.id === id);
    }


    public createUser = (data: UserModel): void => {
        const db = this.getAllUsers();
        
        data.id = this.autoIncrementHandler(db);

        db.push({
            id: data.id,
            name: data.name,
            email: data.email,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        } as UserModel);

        writeFile(this.DB_PATH, JSON.stringify(db), (err) => {
            if (err) {
                throw new BadRequestException();
            }
        });
    }

    private autoIncrementHandler = (db: UserModel[]): number => db.length ? db[db.length - 1].id + 1 : 1;
}
