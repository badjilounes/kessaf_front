import {Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'lbt-sidenav',
  templateUrl: './sidenav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() reduce: boolean;
  @Input() sideMode: 'over'|'side';
  @Output() toggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reduceEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleSidebar(): void {
    this.toggleEmitter.emit(true);
  }

  expandOrReduce(): void {
    this.reduceEmitter.emit(!this.reduce);
  }
}
