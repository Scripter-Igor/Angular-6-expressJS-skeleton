export class User{
    username: string;
    exp: number;
    timeran: number;
    moneymade: number;
    script: string;

    constructor(username, exp, timeran, moneymade, script){
        this.username = username;
        this.exp = exp;
        this.timeran = timeran;
        this.moneymade = moneymade;
        this. script = script;
    }
}