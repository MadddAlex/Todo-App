import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Task } from '../models/task';
import { TaskService } from '../services/task-service.service';

@Component({
  selector: 'app-archive-task',
  templateUrl: './archive-task.component.html',
  styleUrls: ['./archive-task.component.css']
})
export class ArchiveTaskComponent implements OnInit {

  @Input() archivedTask: Task;
  @Output() deletedArchive = new EventEmitter<Task>();
  // temp_archive_deleted: Task;
  clicked: Boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
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

  onDelete()
  {
    this.taskService.deleteArchive(this.archivedTask.id).subscribe(
      (response: any) => {
        console.log(response),
        this.deletedArchive.emit(this.archivedTask)
      }
      // () => {}, // dont know why this works and not without
      // (response) => alert(response['message']),
      // () => console.log(this.archivedTask.description),
    );
  }

}
