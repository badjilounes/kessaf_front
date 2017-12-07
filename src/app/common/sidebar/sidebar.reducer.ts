import {SetUIModeSidebarAction, SidebarActions, SidebarActionTypes} from "./sidebar.actions";
import {SidebarState} from "../../model/redux/sidebar/sidebarState.model";

const initialState: SidebarState = {
  reduced: false,
  sideMode: 'side'
};

export function sidebar(state = initialState, action: SidebarActions): SidebarState{
    switch (action.type) {

      case SidebarActionTypes.SET_UI_MODE: {
        return Object.assign({}, state, {
          sideMode: (action as SetUIModeSidebarAction).mode
        });
      }

      case SidebarActionTypes.REDUCE: {
        return Object.assign({}, state, {
          reduced: true
        });
      }

      case SidebarActionTypes.EXPAND: {
        return Object.assign({}, state, {
          reduced: false
        });
      }
      default:
        return state;
    }
};

export const isReduced = (state: SidebarState) => state.reduced;

export const getSidebarMode = (state: SidebarState) => state.sideMode;
