import {NgModule} from "@angular/core";
import {
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,
  MatIconModule, MatStepperModule, MatTooltipModule, MatMenuModule, MatSnackBarModule
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
    MatMenuModule,
    MatSnackBarModule
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
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
