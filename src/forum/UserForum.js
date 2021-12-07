import {makeAutoObservable} from "mobx"

export default class UserForum {
    constructor() {
        this._isAuth = true
        this._user = {
            id: 0,
            username: 'Maxim',
            password: 'asdasfas',
            firstName: 'Maxim',
            lastName: 'Nosko',
            email: 'multiplicationmax@gmail.com',
            phone: '+375696969',
            userStatus: 'Online',
            userRole: true
        }
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth;
    }

    set isAuth(value) {
        this._isAuth = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }
}