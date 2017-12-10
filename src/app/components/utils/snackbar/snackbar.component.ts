import {Component, OnInit, Inject} from '@angular/core';
import {SnackInfoInput} from "../../../model/app/auth/input/snackInfo/snackInfo.input";
import {MAT_SNACK_BAR_DATA} from "@angular/material";
import {SnackType} from "../../../enum/snackbar/snackType.enum";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  snackInfo: SnackInfoInput;
  snackTypeEnum = SnackType;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackInfoInput) {
    this.snackInfo = data;
  }

  ngOnInit() {
  }

}
