import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
  constructor(private sharedService: SharedService) { }

    ngOnInit(): void {
      this.sharedService.showNavbar.next(false);
    }
}
