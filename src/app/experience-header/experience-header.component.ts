import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-header',
  templateUrl: './experience-header.component.html',
  styleUrls: ['./experience-header.component.css']
})
export class ExperienceHeaderComponent implements OnInit {
  @Input() company: string;
  @Input() timeRange: string;
  @Input() jobTitle: string;
  @Input() jobDescription: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
