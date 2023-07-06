export default class User {
    username: String;
    uuid: string;

    constructor(username: String, uuid: string) {
        this.username = username;
        this.uuid = uuid;
    }
}