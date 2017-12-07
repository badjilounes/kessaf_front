import {Action} from '@ngrx/store';

export const SidebarActionTypes = {
  SET_UI_MODE: '[Sidebar] Set UI mode',
  REDUCE: '[Sidebar] Reduced',
  EXPAND: '[Sidebar] Expanded'
};


export class SetUIModeSidebarAction implements Action {
  readonly type = SidebarActionTypes.SET_UI_MODE;
  mode: 'over'|'side';
  constructor(mode: 'over'|'side') {
    this.mode = mode;
  }
}

export class ReduceSidebarAction implements Action {
  readonly type = SidebarActionTypes.REDUCE;
  constructor() {}
}

export class ExpandSidebarAction implements Action {
  readonly type = SidebarActionTypes.EXPAND;
  constructor() {}
}

export type SidebarActions = SetUIModeSidebarAction | ReduceSidebarAction | ExpandSidebarAction;

