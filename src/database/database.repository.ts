import { BadRequestException } from '@nestjs/common';
import { writeFile, readFileSync } from 'fs';
import { UserModel } from 'src/user.model';

export const readDatabaseFile = (): UserModel[] => {
   return JSON.parse(readFileSync('./src/database/database.json').toString());
}

export const writeOnDatabaseFile = (data: UserModel): void => {
    const db = readDatabaseFile();
    data.id = (idGenerate(db));
    db.push(data);

    writeFile('./src/database/database.json', JSON.stringify(db), (err) => {
        if (err) {
            throw new BadRequestException();
        }
      });
}

const idGenerate = (db: UserModel[]): number => {
    return db.length ? db[db.length - 1].id + 1 : 1;
}