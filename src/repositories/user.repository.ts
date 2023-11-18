import { BadRequestException } from '@nestjs/common';
import { writeFile, readFileSync } from 'fs';
import { UserModel } from './models/user.model';

export class UserRepository {
    
    private DB_PATH: string = './src/database/database.json';

    public findAll = (): UserModel[] => JSON.parse(readFileSync(this.DB_PATH).toString());

    public findById = (id: number): UserModel => {
        const db = this.findAll();
        return db.find((model: UserModel) => model.id === id);
    }


    public save = (data: UserModel): void => {
        let db = this.findAll();
        console.log({data});
        
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

        writeFile(this.DB_PATH, JSON.stringify(db), (err) => {
            if (err) {
                throw new BadRequestException();
            }
        });
        
    }

    public updateUser = (id: number, userModel: UserModel) => {
        const db = this.findAll();

        db.map((model: UserModel) => model.id === id ? userModel : model)

        writeFile(this.DB_PATH, JSON.stringify(db), (err) => {
            if (err) {
                throw new BadRequestException();
            }
        });
    }

    private autoIncrementHandler = (db: UserModel[]): number => db.length ? db[db.length - 1].id + 1 : 1;
}
