import User from "../user";

export default class Team {
    ratMaster: User;
    rats: Array<User>;

    constructor(ratMaster: User, rats: Array<User>) {
        this.ratMaster = ratMaster;
        this.rats = rats;
    }
}