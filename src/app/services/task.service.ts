import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from "rxjs/operators";
import {User} from '../../User';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http:Http) {
        console.log('Task service initialized...'); 
    }

    getTasks(){
        return this.http.get('http://localhost:8000/api/users')
                        .pipe(map(res => res.json()));
    }

    createUser(user: User){
        var user = new User("Test2",222,2322,111,"AIOHUnter");
        return this.http.post("http://localhost:8000/api/users", user)
        .pipe(map(res=>res.json()));
    }

    updateUser(){
        var user = new User("Test2",222,21112,111,"AIOHUnter");
        return this.http.patch("http://localhost:8000/api/users/Test2", user)
        .pipe(map(res=>res.json()));
    }
}
