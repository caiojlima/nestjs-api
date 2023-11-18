import { ModelInterface } from "../interfaces/model.interface";
import { UserModel } from "./user.model";

export class Message implements ModelInterface {
    #id?: number;
    #sender: UserModel;
    #content: string;
    #receiver: UserModel;
    #createdAt: Date;

    constructor(id: string, sender: UserModel, content: string, receiver: UserModel) {
        this.#sender = sender;
        this.#content = content;
        this.#receiver = receiver;
        this.#sender = sender;
        this.#createdAt = new Date();
    }

    get id() {
        return this.#id;
    }

    set id(value: number) {
        this.#id = value;
    }

    get sender() {
        return this.#sender;
    }

    set sender(value: UserModel) {
        this.#sender = value;
    }

    get content() {
        return this.#content;
    }

    set content(value: string) {
        this.#content = value;
    }

    get receiver() {
        return this.#receiver;
    }

    set receiver(value: UserModel) {
        this.#receiver = value;
    }

    get createdAt() {
        return this.#createdAt;
    }

    set createdAt(value: Date) {
        this.#createdAt = value;
    }
}