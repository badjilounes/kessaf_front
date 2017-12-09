import {NgModule} from "@angular/core";
import {
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,
  MatIconModule, MatStepperModule, MatTooltipModule, MatMenuModule
} from "@angular/material";

@NgModule({
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
    MatTooltipModule,
    MatMenuModule
  ],
  exports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
    MatTooltipModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
