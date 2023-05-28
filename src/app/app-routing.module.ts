import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/--pages/home-page/home-page.component';
import { StorePageComponent } from './components/--pages/store-page/store-page.component';
import { ProductPageComponent } from './components/--pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'store-page', component: StorePageComponent },
  { path: 'products/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
