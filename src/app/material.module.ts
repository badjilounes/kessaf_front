import {NgModule} from "@angular/core";
import {
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,
  MatIconModule, MatStepperModule, MatTooltipModule
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
    MatTooltipModule
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
    MatTooltipModule
  ]
})
export class MaterialModule { }
