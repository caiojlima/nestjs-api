import { BaseRepositoryInterface } from "./interfaces/base.repository.interface";
import { ModelInterface } from "./interfaces/model.interface";
import { readFileSync } from 'fs';


export class BaseRepository implements BaseRepositoryInterface {
    private DB_PATH: string = './src/database/database.json';
    readonly DB = () => JSON.parse(readFileSync(this.DB_PATH).toString());

    readonly autoIncrementHandler = (db: ModelInterface[] ): number => db.length ? db[db.length - 1].id + 1 : 1;
}