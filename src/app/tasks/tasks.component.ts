import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task-service.service';
import { Task } from '../models/task';
import { empty } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: Task[];
  showMessage: boolean = false;

  ngOnInit() {
    this.getTasks();
  }

  getTasks()
  {
    this.taskService.getActiveTasks().subscribe(
      (tasks: Task[]) => this.tasks = tasks
      // (tasks: Task[]) => console.log(tasks),
    );
  }

  onAddTask(addedTask: Task)
  {
    this.tasks.push(addedTask);
    alert('Task Added');
  }

  onArchiveTask(archivedTask: Task)
  {
    this.tasks = this.tasks.filter(task => task !== archivedTask);
  }

  displaySearchedTasks(returnedTasks: Task[])
  {
    if(returnedTasks == null)
    {
      this.getTasks();
      this.showMessage = false; 
    }
    else if(returnedTasks.length == 0)
    {
      this.showMessage = true;
    }
    else
    {
      // this.getTasks();
      console.log(returnedTasks);
      this.tasks = returnedTasks;
      // console.log(returnedTasks.forEach(rt => console.log(rt.task)));
      // this.tasks = returnedTasks.forEach(rT => this.tasks.filter( task => rT))
      // returnedTasks.forEach(
      //   rT => {
      //     this.tasks = this.tasks.filter(task => task.task == rT.task)
      //   }
      // )
        // returnedTasks.forEach(rTask => task.task == rTask.task)
    }
  }
}
