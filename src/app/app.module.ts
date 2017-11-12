 import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  MatSnackBarModule} from '@angular/material';
import {AppComponent} from './app.component';
// import {HttpModule} from '@angular/http';
// import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  exports: [
    MatSnackBarModule,

  ]
})
export class PlunkerMaterialModule {}

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlunkerMaterialModule
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);
