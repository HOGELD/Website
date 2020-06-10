import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StartComponent} from "./components/start/start.component";
import {AboutComponent} from "./components/about/about.component";
import {MinistriesComponent} from "./components/ministries/ministries.component";
import {DepartmentsComponent} from "./components/departments/departments.component";
import {LordskitchenComponent} from "./components/lordskitchen/lordskitchen.component";
import {ProgrammesComponent} from "./components/programmes/programmes.component";
import {ContactusComponent} from "./components/contactus/contactus.component";
import {SeniorpastorComponent} from "./components/seniorpastor/seniorpastor.component";

const routes: Routes = [
  {
    path: '', component: StartComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'ministries',
    component: MinistriesComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'lords-kitchen',
    component: LordskitchenComponent
  },
  {
    path: 'programmes',
    component: ProgrammesComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'contact-us',
    component: ContactusComponent
  },
  {
    path: 'senior-pastor',
    component: SeniorpastorComponent
  },
  {
    path: '**',
    component: StartComponent
  }
  ];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
