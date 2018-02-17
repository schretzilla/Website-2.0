import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill-column/skill';
import { UrlObject } from '../project/tool-info';

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

  SmartEggTools = [UrlObject.Esp32, UrlObject.Plotly, UrlObject.Bluma];
  AlgorithmAnimationTools = [UrlObject.D3V4, UrlObject.TwitterBootstrapV3, UrlObject.GithubPages];
  AdventureAmericaTools = [UrlObject.D3V4, UrlObject.TwitterBootstrapV3, UrlObject.GithubPages];
  DynoQuizTools = [UrlObject.Django1, UrlObject.Python2, UrlObject.Angular1, 
    UrlObject.TwitterBootstrapV2, UrlObject.DjangoRest, UrlObject.PostgreSql9, UrlObject.Heroku ];
  ServiceBaseTools = [UrlObject.CSharp, UrlObject.DotNetWeb, UrlObject.MicrosoftSqlDb,
    UrlObject.Jquery, UrlObject.TwitterBootstrapV2, UrlObject.DotNetEntity];
  SplunkTools = [UrlObject.MicrosoftSqlDb, UrlObject.SSMS, UrlObject.SSIS, UrlObject.Splunk];

  constructor() { }

  ngOnInit() {
    
  }

}
