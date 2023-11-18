import { Getter } from "./getter.decorator";

@Getter
export class UserDTO {
    [x: string]: any;
    private name: string;
    private email: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(name: string,  email: string, createdAt: Date, updatedAt: Date){
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}