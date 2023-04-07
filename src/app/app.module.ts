import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/--pages/home-page/home-page.component';
import { GrNavigationComponent } from './components/groups/gr-navigation/gr-navigation.component';
import { PrCtaButtonComponent } from './components/primitives/pr-cta-button/pr-cta-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GrNavigationComponent,
    PrCtaButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
