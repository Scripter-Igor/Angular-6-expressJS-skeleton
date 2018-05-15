import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../../Task';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})      

export class TasksComponent implements OnInit {
    tasks: Task[];

    constructor(private taskService:TaskService) { 
        this.taskService.getTasks()
                        .subscribe(tasks =>{
                            this.tasks = tasks; 
                        });

        this.taskService.updateUser()
        .subscribe(tasks => {
            console.log(tasks); 
        });
    } 

    ngOnInit() {
    }
}
