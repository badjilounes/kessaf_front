import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";

@Component({
  selector: 'lbt-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @LocalStorage() reduce: boolean;
  @Output() toggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleSidebar(): void {
    this.toggleEmitter.emit(true);
  }

  expandOrReduce(): void {
    this.reduce = !this.reduce;
  }
}
