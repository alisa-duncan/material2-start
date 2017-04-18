import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {DialogComponent} from './dialog/dialog.component';

import 'hammerjs';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule,
  MdInputModule, MdSelectModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdTabsModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdInputModule,
    MdSelectModule
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
