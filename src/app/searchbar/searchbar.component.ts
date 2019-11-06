import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Task } from '../models/task';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  tasks: Task[];
  @Output() returnedSearch = new EventEmitter();
  // @Output() searchedTasks = new EventEmitter

  ngOnInit() {
  }

  onSearch(taskValue: string)
  {
    this.searchService.Search(taskValue).subscribe(
      (returnedTasks: Task[]) => {
    //     () => alert('sadasds');
        this.tasks = returnedTasks,
        this.returnedSearch.emit(this.tasks)
      }
    );
  }

  onRefresh(searchInput: HTMLInputElement)
  {
    searchInput.value = '';
    this.returnedSearch.emit(null);
  }
}
