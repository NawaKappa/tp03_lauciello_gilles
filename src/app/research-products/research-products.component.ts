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
    console.log(this.filterInputs);
    this.products.subscribe(val => console.log(val));

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
   /*= this.products.pipe(
      map(data => data.filter(w => w.productName == this.filterInputs.productName))
    ).subscribe((data: any) => this.productsFiltered$ = data);*/
    this.productsFiltered$ = this.productsFiltered$.pipe(
      map(data => data.filter(w => w.productName == this.filterInputs.productName))
    );
    console.log("name filter");
  }

  applyMinPriceFilter(){
    this.productsFiltered$ = this.productsFiltered$.pipe(
      map(data => data.filter(w => w.price >= this.filterInputs.minPrice))
    );
    console.log("min price filter");
  }

  applyMaxPriceFilter(){
    this.productsFiltered$ = this.productsFiltered$.pipe(
      map(data => data.filter(w => w.price <= this.filterInputs.maxPrice))
    );
    console.log("max price filter");
  }

}
