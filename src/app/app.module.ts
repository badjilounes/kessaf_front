import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {OverlayContainer} from "@angular/cdk/overlay";
import { LoginComponent } from './components/login/login.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavComponent } from './components/menu/sidenav/sidenav.component';
import { HeaderComponent } from './components/menu/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ApiService } from './services/api/api.service';
import {HttpModule} from "@angular/http";
import {Ng2Webstorage} from "ngx-webstorage";
import {StoreModule} from "@ngrx/store";
import {Ng2DeviceDetectorModule} from "ng2-device-detector";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {sidebar} from "./common/sidebar/sidebar.reducer";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    Ng2Webstorage,
    Ng2DeviceDetectorModule.forRoot(),
    StoreModule.forRoot({
      sidebar: sidebar
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class UnicornCandyAppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  }
}
