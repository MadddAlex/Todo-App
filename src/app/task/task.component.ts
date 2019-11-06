import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Task } from '../models/task';
import { TaskService } from '../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  @Input() task: Task;
  @Output() archivedTask = new EventEmitter<Task>();
  clicked: boolean = false;
  editing: boolean = false;
  editValue: string = "";
  
  ngOnInit() {
  }

  onArchiveTask()
  {
    this.taskService.archiveTask(this.task.id).subscribe(
      // () => console.log(this.task.description),
      () => {
        alert('Task archived'),
        this.archivedTask.emit(this.task)
      }
    );
  }
  
  showDescription()
  {
    if(this.clicked == false)
    {
      this.clicked = true;
    }
    else
    {
      this.clicked = false;;
    }
  }

  onEditTask()
  {
    this.editValue = this.task.description;
    this.editing = true;
  }

  updateDescription()
  {
    this.taskService.updateTask(this.task.id, this.editValue).subscribe(
      (updatedTask: Task) => this.task.description = updatedTask.description,
      () => alert('Task description updated'),
    );
    this.Cancel();
  }

  Cancel()
  {
    this.editValue = "";
    this.editing = false;
  }
  

}
