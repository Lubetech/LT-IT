import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { July2018Component } from './challenges/july2018/july2018.component';
import { NewsComponent } from './news/news.component';
import { LunchAndLearnComponent } from './lunch-and-learn/lunch-and-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ChallengesComponent,
    July2018Component,
    NewsComponent,
    LunchAndLearnComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModulesPro.forRoot()],
  providers: [MDBSpinningPreloader],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
