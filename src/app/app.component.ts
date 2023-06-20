import { Component } from '@angular/core';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wordle-app';

  public showNavbar = true;

  constructor(public sharedService: SharedService) { }
}
