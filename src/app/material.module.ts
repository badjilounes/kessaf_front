import {NgModule} from "@angular/core";
import {
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MaterialModule { }
