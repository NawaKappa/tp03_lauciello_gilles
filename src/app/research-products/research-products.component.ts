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

  productsFiltered: Product[];
  products: Observable<Product[]>;
  filterInputs: any = {};

  constructor(private service:ProductApiService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  applyFilters(){
    if(this.filterInputs.productName){
      this.applyProductNameFilter();
    }
    else{
      console.log("rien");
    }

  }

  applyProductNameFilter(){
    this.products.pipe(
      map(data => data.filter(w => w.productName == this.filterInputs.productName))
    ).subscribe((data: any) => this.productsFiltered = data);

  }

}
