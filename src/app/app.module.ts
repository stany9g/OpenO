import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataGridComponent } from './components/user-data-grid/user-data-grid.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http'
import { DxTagBoxModule, DxTemplateModule } from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    UserDataGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    HttpClientModule,
    DxTemplateModule,
    DxTagBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);