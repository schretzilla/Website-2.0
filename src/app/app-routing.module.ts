import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSacmComponent } from './project-sacm/project-sacm.component';
import { HomePageComponent } from './home-page/home-page.component'

import { componentModuleUrl } from '@angular/compiler';
import { ProjectServicebaseComponent } from './project-servicebase/project-servicebase.component';

//TODO: add to own folder

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'sacm', component: ProjectSacmComponent },
  { path: 'serviceBase', component: ProjectServicebaseComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
