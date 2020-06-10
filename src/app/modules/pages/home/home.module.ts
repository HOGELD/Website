import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { StartComponent } from './components/start/start.component';
import { AboutComponent } from './components/about/about.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { LordskitchenComponent } from './components/lordskitchen/lordskitchen.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SeniorpastorComponent } from './components/seniorpastor/seniorpastor.component';



@NgModule({
  declarations: [ HomeComponent, StartComponent, AboutComponent, MinistriesComponent, DepartmentsComponent, ProgrammesComponent, LordskitchenComponent, BlogComponent, ContactusComponent, SeniorpastorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
