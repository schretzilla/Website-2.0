import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() link: string; // project links
  @Input() teamName: string;
  @Input() keyPoint1: string;
  @Input() keyPoint2: string;
  @Input() keyPoint3: string;
  

  constructor() { }

  ngOnInit() {
  }

}
