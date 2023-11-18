export class UserModel {
    #id?: number;
    #name: string;
    #email: string;
    #createdAt: Date;
    #updatedAt: Date;

    constructor(name: string,  email: string, createdAt: Date, updatedAt: Date) {
        this.#name = name;
        this.#email = email;
        this.#createdAt = createdAt;
        this.#updatedAt = updatedAt;
    }

    get id() {
        return this.#id;
    }

    set id(value: number) {
        this.#id = value;
    }

    get name() {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get email() {
        return this.#email;
    }

    set email(value: string) {
        this.#email = value;
    }

    get createdAt() {
        return this.#createdAt;
    }

    set createdAt(value: Date) {
        this.#createdAt = value;
    }

    get updatedAt() {
        return this.#updatedAt;
    }

    set updatedAt(value: Date) {
        this.#updatedAt = value;
    }

}