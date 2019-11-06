import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { ArchivesComponent } from './archives/archives.component';

const routes: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: '', redirectTo:'/tasks', pathMatch: 'full'},
  {path:'archives', component:ArchivesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
