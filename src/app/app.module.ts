import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: '', component: ProductListComponent },
  {
    path: 'shipping',
    component: ShippingComponent,
    children: [{ path: 'child-a', component: ChildComponentComponent }],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductAlertComponent,
    CartComponent,
    ShippingComponent,
    OpenCloseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
