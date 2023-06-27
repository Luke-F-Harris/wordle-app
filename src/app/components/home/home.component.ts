import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { HowtoplayComponent } from '../howtoplay/howtoplay.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
  constructor(private sharedService: SharedService, private dialog: MatDialog, private router: Router) { }

    ngOnInit(): void {
      this.sharedService.showNavbar.next(false);
    }

    openHowToPlayDialog(): void {
      this.dialog.open(HowtoplayComponent, {
        width: '400px',
      });
    }

    routeToGame() {
      this.router.navigate(['/game']);
    }
}
