import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/--pages/home-page/home-page.component';
import { GrNavigationComponent } from './components/groups/gr-navigation/gr-navigation.component';
import { PrCtaButtonComponent } from './components/primitives/pr-cta-button/pr-cta-button.component';
import { GrHeaderComponent } from './components/groups/gr-header/gr-header.component';
import { PrGhostButtonComponent } from './components/primitives/pr-ghost-button/pr-ghost-button.component';
import { StorePageComponent } from './components/--pages/store-page/store-page.component';
import { GrProductCardComponent } from './components/groups/gr-product-card/gr-product-card.component';
import { GrProductsGridComponent } from './components/groups/gr-products-grid/gr-products-grid.component';
import { PrAddToCardButtonComponent } from './components/primitives/pr-add-to-card-button/pr-add-to-card-button.component';
import { GrGenresMenuComponent } from './components/groups/gr-genres-menu/gr-genres-menu.component';
import { GrFilterRowComponent } from './components/groups/gr-filter-row/gr-filter-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GrNavigationComponent,
    PrCtaButtonComponent,
    GrHeaderComponent,
    PrGhostButtonComponent,
    StorePageComponent,
    GrProductCardComponent,
    GrProductsGridComponent,
    PrAddToCardButtonComponent,
    GrGenresMenuComponent,
    GrFilterRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
