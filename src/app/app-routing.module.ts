import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSacmComponent } from './project-sacm/project-sacm.component';
import { HomePageComponent } from './home-page/home-page.component'

import { componentModuleUrl } from '@angular/compiler';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'sacm', component: ProjectSacmComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
