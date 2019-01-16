import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymeanService } from './services/mymean.services';

import { MymeanComponent } from './mymean/mymean.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MymeanComponent,
    HomeComponent,
    CreateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MymeanService],
  bootstrap: [AppComponent]
})
export class AppModule { }