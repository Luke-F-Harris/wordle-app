import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public showNavbar = true;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.showNavbar.subscribe(value => {
      this.showNavbar = value;
    });
  }
}
