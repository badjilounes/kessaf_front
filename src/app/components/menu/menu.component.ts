import {Component, OnInit, HostListener} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {Ng2DeviceService} from "ng2-device-detector";
import * as fromRoot from "../../common/index";
import {Store} from "@ngrx/store";
import {AppState} from "../../common/index";
import {SidebarState} from "../../model/redux/sidebar/sidebarState.model";
import {ReduceSidebarAction, ExpandSidebarAction, SetUIModeSidebarAction} from "../../common/sidebar/sidebar.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @LocalStorage() userPlatform: any;

  window: Window;
  windowWidth: number;

  reduced$: Observable<boolean>;
  sideMode$: Observable<'over'|'side'>;

  constructor(private platform: Ng2DeviceService, private store: Store<AppState>) {
    this.constructDefaultAttributes();
    this.reduced$ = store.select(fromRoot.getSidebarReduce);
    this.sideMode$ = store.select(fromRoot.getSidebarMode);
  }

  constructDefaultAttributes(): void {
    this.window = window;
    this.userPlatform = this.platform.getDeviceInfo();
  }

  ngOnInit() {
    this.configSidebar();
  }

  @HostListener('window:resize', ['$event'])
  configSidebar(): void {
    this.windowWidth = this.window.innerWidth;

    if (this.platform.device == 'unknown') {

      this.store.dispatch(new SetUIModeSidebarAction('side'));

      this.store.dispatch((this.windowWidth < 992) ? new ReduceSidebarAction() : new ExpandSidebarAction());

    } else {
      this.store.dispatch(new SetUIModeSidebarAction('over'));
    }
  }

  toggleSidebarWidth(wantToReduce: boolean): void {
    if (wantToReduce) {
      this.store.dispatch(new ReduceSidebarAction())
    } else {
      this.store.dispatch(new ExpandSidebarAction());
    }
  }

}
