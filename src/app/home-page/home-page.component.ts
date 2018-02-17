import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill-column/skill';
import { ToolInfo } from '../project/tool-info';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css',
    '../app.component.css',
    '../../style/home.css']
})
export class HomePageComponent implements OnInit {
  skillObject1 = Skill.skill1;
  skillObject2 = Skill.skill2;
  skillObject3 = Skill.skill3;

  sacmSkillList = [ToolInfo.d3Tool, ToolInfo.githubPages, ToolInfo.twitterBootstrap];
  constructor() { }

  ngOnInit() {
    
  }

}
