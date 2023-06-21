import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { HowtoplayComponent } from '../howtoplay/howtoplay.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
  constructor(private sharedService: SharedService, public dialog: MatDialog) { }

    ngOnInit(): void {
      this.sharedService.showNavbar.next(false);
    }

    openHowToPlayDialog(): void {
      const dialogRef = this.dialog.open(HowtoplayComponent, {
        width: '400px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed.');
      })
    }
}
