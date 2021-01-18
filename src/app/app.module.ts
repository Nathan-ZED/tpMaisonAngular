import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { TableLineComponent } from './components/table-line/table-line.component';
import { AdsViewComponent } from './views/ads-view/ads-view.component';
import { SingleAdViewComponent } from './views/single-ad-view/single-ad-view.component';
import { CreateAdViewComponent } from './views/create-ad-view/create-ad-view.component';
import {FormGroup} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    TableLineComponent,
    AdsViewComponent,
    SingleAdViewComponent,
    CreateAdViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormGroup],
  bootstrap: [AppComponent]
})
export class AppModule { }
