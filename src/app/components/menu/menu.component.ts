import {Component, OnInit, HostListener} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {isUndefined} from "util";
import {Ng2DeviceService} from "ng2-device-detector";
import * as fromRoot from "../../common/index";
import {Store} from "@ngrx/store";
import {AppState} from "../../common/index";
import {SidebarState} from "../../model/redux/sidebar/sidebarState.model";
import {ReduceSidebarAction} from "../../common/sidebar/sidebar.actions";
import {Observable} from "rxjs";
import {getSidebarState} from "../../common/index";
import {getSidebarReduce} from "../../common/index";

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

  sidebar$: Observable<SidebarState>;
  reduced$: Observable<boolean>;
  sideMode$: Observable<'over'|'side'>;

  constructor(private platform: Ng2DeviceService, private store: Store<AppState>) {
    this.constructDefaultAttributes();
    this.sidebar$ = store.select(fromRoot.getSidebarState);
    this.reduced$ = store.select(fromRoot.getSidebarReduce);
    this.sideMode$ = store.select(fromRoot.getSidebarMode);
    this.sidebar$.subscribe(data => console.log(data));
    this.reduced$.subscribe(data => console.log(data));
    this.sideMode$.subscribe(data => console.log(data));
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
    this.store.dispatch(new ReduceSidebarAction());
  }

}
