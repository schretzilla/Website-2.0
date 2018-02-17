import { Component, OnInit, Input } from '@angular/core';
import { UrlObject } from './tool-info';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() imageSrc: string; // project links
  @Input() projectUrl: string;
  @Input() projectTitle: string;
  @Input() date: string;
  @Input() description: string;
  @Input() tools: string;
  @Input() buttonDescription: string;
  @Input() routerLink: string;
  @Input() toolsList: UrlObject[];

  constructor() { }

  ngOnInit() {
  }

}
