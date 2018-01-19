import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {
  @Input() teamName: string;
  @Input() positionTimeRange: string;
  @Input() keyPoint1: string;
  @Input() keyPoint2: string;
  @Input() keyPoint3: string;

  constructor() { }

  ngOnInit() {
  }

}
