import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  httpOptions = 
  {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  };

  private url = `http://todo-app.test/api`;
  // private urlArchives = `api/tasks/archives`;

  getActiveTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.url+'/tasks');
  }

  getArchivedTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.url + "/archives")
  }

  addTask(values: Object): Observable<Task>
  {
    return this.http.post<Task>(this.url+`/task`, values, this.httpOptions);
  }

  updateTask(id: number, newDescription: string): Observable<Task>
  {
    const data = JSON.stringify({newDescription : newDescription});
    // console.log(data);
    return this.http.put<Task>(this.url+`/task/${id}`, data, this.httpOptions);
  }

  archiveTask(id: number): Observable<any>
  {
    console.log(this.url+`/task/archive/${id}`);
    return this.http.put(this.url+`/task/archive/${id}`, this.httpOptions);
  }

  deleteArchive(id: number): Observable<any>
  {
    // console.log(this.url+`/${id}`)
    return this.http.delete(this.url + `/task/${id}`, this.httpOptions);
  }

  searchTask(taskValue: string): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.url+`/tasks/${taskValue}`);
  }
}
