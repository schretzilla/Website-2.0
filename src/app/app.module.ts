import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { ExperienceHeaderComponent } from './experience-header/experience-header.component';
import { ProjectComponent } from './project/project.component';
import { SkillColumnComponent } from './skill-column/skill-column.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CivicEndevaorsComponent } from './civic-endevaors/civic-endevaors.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ExperienceDetailsComponent,
    ExperienceHeaderComponent,
    ProjectComponent,
    SkillColumnComponent,
    EducationComponent,
    HobbiesComponent,
    CivicEndevaorsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
}
