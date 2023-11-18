export class UserModel {
    private _id?: number;
    private _name: string;
    private _email: string;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(name: string,  email: string, createdAt: Date, updatedAt: Date){
        this._name = name;
        this._email = email;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id() {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

}