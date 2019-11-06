import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';

import { Task } from '../models/task';
import { TaskService } from '../services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  emptyFields: boolean = false;
  @Output() addedTask = new EventEmitter<Task>();

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    if(form.value.task == '' || form.value.description == '')
    {
      this.emptyFields = true;
    }
    else
    {
      this.taskService.addTask(form.value).subscribe(
        // () => alert('task created'),
        (addedTask: Task) => {
          this.onCloseModal(form),
          this.addedTask.emit(addedTask)
        }
      );
    }
  }

  onCloseModal(form: NgForm)
  {
    $('#addTaskModal').hide();
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    form.resetForm('');
  }

}
