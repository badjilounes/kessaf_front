/* Import createSelector from reselect to make selection of different parts of the state fast efficient */

/* Import the store logger to log all the actions to the console */
import {storeLogger} from "ngrx-store-logger";

/* Import the sidebar state */
import * as fromSidebar from "./sidebar/sidebar.reducer" ;

import {combineReducers, ActionReducer, ActionReducerMap, createSelector} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {SidebarState} from "../model/redux/sidebar/sidebarState.model";
import {compose} from "@ngrx/core";
import {sidebar} from "./sidebar/sidebar.reducer";

sidebar(null, { type: '@ngrx/store/init' });

export interface AppState {
  sidebar: SidebarState
}

export const reducers = {
  sidebar: sidebar
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/** Sidebar selectors **/

export const getSidebarState = (state: AppState) => state.sidebar;

export const getSidebarReduce = createSelector(getSidebarState , fromSidebar.isReduced);

export const getSidebarMode = createSelector(getSidebarState , fromSidebar.getSidebarMode);

/** End sidebar selectors **/
