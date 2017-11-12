import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import { OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
let configs = null;
configs = new MatSnackBarConfig();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent  {
  constructor(private snack: MatSnackBar,  public viewContainerRef: ViewContainerRef) {

  }
  title = 'app';
   test() {
//    this.snack.open('hello', 'click', {
 //     duration: 3000,
 // });
configs.ViewContainerRef = this.viewContainerRef;
//this.snack.open('Second snackbar ', 'Got it', configs);

let test1 = null;
 test1 = this.snack.open('Snackbar text', 'Ok', configs);
 test1.onAction().subscribe(() => {
  console.log('The snack-bar action was triggered!');
});
}
}
