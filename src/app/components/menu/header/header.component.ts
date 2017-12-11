import {Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'lbt-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
