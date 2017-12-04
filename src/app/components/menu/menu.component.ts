import {Component, OnInit, HostListener} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {isUndefined} from "util";
import {Ng2DeviceService} from "ng2-device-detector";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @LocalStorage() reduce: boolean;
  @LocalStorage() userPlatform: any;
  sideMode: 'side'|'over';

  window: Window;
  windowWidth: number;

  constructor(private platform: Ng2DeviceService) {
    this.constructDefaultAttributes();
  }

  constructDefaultAttributes(): void {
    this.window = window;
    this.userPlatform = this.platform.getDeviceInfo();
    if (isUndefined(this.reduce)) {
      this.reduce = false;
    }
  }

  ngOnInit() {
    this.configSidebar();
  }

  @HostListener('window:resize', ['$event'])
  configSidebar(): void {
    this.windowWidth = this.window.innerWidth;
    this.sideMode = (this.platform.device == 'unknown') ? 'side' : 'over';
    this.reduce = (this.windowWidth < 992 && this.sideMode == 'side');
  }

}
