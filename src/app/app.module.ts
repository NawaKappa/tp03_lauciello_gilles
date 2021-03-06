import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductApiService } from './product-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { ResearchProductsComponent } from './research-products/research-products.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, CatalogComponent, ResearchProductsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductApiService]
})
export class AppModule { }
