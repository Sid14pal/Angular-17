import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, withFetch, provideHttpClient } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeShippingPanelComponent } from './home-shipping-panel/home-shipping-panel.component';
import { HomeMiniBannerComponent } from './home-mini-banner/home-mini-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { IndexProductListComponent } from './index-product-list/index-product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    CarouselComponent,
    HomeShippingPanelComponent,
    HomeMiniBannerComponent,
    SellerAddProductComponent,
    FooterComponent,
    SellerUpdateProductComponent,
    IndexProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    provideClientHydration(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

