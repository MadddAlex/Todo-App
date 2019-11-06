import { Component, OnInit } from '@angular/core';

import{ TaskService } from '../services/task-service.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  archives: Task[];

  ngOnInit() {
    this.getArchives();
  }

  getArchives()
  {
    this.taskService.getArchivedTasks().subscribe(
      (archives: Task[]) => this.archives = archives
    )
  }

  onDeletedArchive(deletedArchive: Task)
  {
    this.archives = this.archives.filter( archive => archive !== deletedArchive);
    alert('Task Deleted');
  }

}
