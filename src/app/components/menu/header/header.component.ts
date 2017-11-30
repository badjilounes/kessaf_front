import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'lbt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleSidebar(): void {
    this.toggleEmitter.emit(true);
  }
}
