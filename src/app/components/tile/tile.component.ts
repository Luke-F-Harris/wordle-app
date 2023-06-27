import { Component, Input } from '@angular/core';

export enum Status {
  Exact,
  Contains,
  NotIn
}

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  public statusEnum = Status;
  private _status: Status = Status.NotIn;
  private _letter: string = "";
  
  @Input()
  public get status() {
    return this._status;
  }

  public set status(value: Status) {
    this._status = value;  
  }

  @Input()
  public get letter() {
    return this._letter;
  }

  public set letter(value: string) {
    console.log(value);
    this._letter = value;
  }

}
