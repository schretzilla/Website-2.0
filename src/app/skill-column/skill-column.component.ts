import { Component, OnInit, Input } from '@angular/core';

import { Skill }from './skill';
@Component({
  selector: 'app-skill-column',
  templateUrl: './skill-column.component.html',
  styleUrls: ['./skill-column.component.css']
})
export class SkillColumnComponent implements OnInit {
  @Input() skill: Skill;
  extraList: string[];
  skillObject = Skill.skill1; 

  constructor() 
  { 
  }

  ngOnInit() {
    this.extraList = this.skill.extraList;

  }

}
