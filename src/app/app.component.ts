import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css', 
    '../style/bootstrap-3.3.6/css/bootstrap.min.css', 
    '../style/home.css'],
})
export class AppComponent {
  title = 'app works!';
}
