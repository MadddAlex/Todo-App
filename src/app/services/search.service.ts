import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../models/task';
import { TaskService } from './task-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private taskService: TaskService) { }

  Search(taskValue: string)
  {
    return this.taskService.searchTask(taskValue);
  }
}
