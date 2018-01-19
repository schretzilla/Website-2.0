import { Component, Directive } from '@angular/core';
import { Skill } from './skill-column/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css', 
    '../style/home.css'],
})
export class AppComponent {
  skillObject1 = Skill.skill1;
  skillObject2 = Skill.skill2;
  skillObject3 = Skill.skill3;
}
