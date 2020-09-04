import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[{path:'posts',component:PostsComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
