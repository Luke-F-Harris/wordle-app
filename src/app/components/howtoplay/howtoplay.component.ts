import { Component } from '@angular/core';
import { Status } from '../tile/tile.component';

@Component({
  selector: 'app-howtoplay',
  templateUrl: './howtoplay.component.html',
  styleUrls: ['./howtoplay.component.scss']
})
export class HowtoplayComponent {
  public name : string = "name";

  public status = Status;
}
