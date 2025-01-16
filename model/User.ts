export default class User {
    id: string;
    name: string;
    email: string;
    password: string;
    preferences: string[];
    createdAt: string;

    constructor(id: string, name: string, email: string, password: string, preferences: string[], createdAt: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.preferences = preferences;
        this.createdAt = createdAt
    }
}
