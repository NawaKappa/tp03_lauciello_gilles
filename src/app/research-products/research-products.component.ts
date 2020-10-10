import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Models/product';
import { ProductApiService } from '../product-api.service';

//source : https://bootsnipp.com/snippets/xvEkQ


@Component({
  selector: 'app-research-products',
  templateUrl: './research-products.component.html',
  styleUrls: ['./research-products.component.css']
})
export class ResearchProductsComponent implements OnInit {

  productsFiltered$: Observable<Product[]>;
  products: Observable<Product[]>;
  filterInputs: any = {};

  constructor(private service:ProductApiService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  applyFilters(){
    this.productsFiltered$ = this.products;

    if(this.filterInputs.productName){
      this.applyProductNameFilter();
    }
    if(this.filterInputs.minPrice){
      this.applyMinPriceFilter();
    }
    if(this.filterInputs.maxPrice){
      this.applyMaxPriceFilter();
    }
  }

  

  applyProductNameFilter(){
    this.productsFiltered$ = this.productsFiltered$.pipe(
      map(data => data.filter(w => w.productName == this.filterInputs.productName))
    );
  }

  applyMinPriceFilter(){
    let minPrice: number = +this.filterInputs.minPrice; 
    this.productsFiltered$ = this.productsFiltered$.pipe(
      map(data => data.filter(w => w.price >= minPrice))
    );
  }

  applyMaxPriceFilter(){
    let maxPrice: number = +this.filterInputs.maxPrice; 
    this.productsFiltered$ = this.productsFiltered$.pipe(
      map(data => data.filter(w => w.price <= maxPrice))
    );
  }

}
