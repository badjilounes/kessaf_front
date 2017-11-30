import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "ngx-webstorage";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @LocalStorage() reduce: boolean;
  sideMode: 'side'|'push'|'over' = 'side';
  opened = false;

  constructor() { }

  ngOnInit() {
  }

}
