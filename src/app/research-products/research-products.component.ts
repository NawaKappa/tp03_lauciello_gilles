import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Models/product';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-research-products',
  templateUrl: './research-products.component.html',
  styleUrls: ['./research-products.component.css']
})
export class ResearchProductsComponent implements OnInit {

  search: string;
  productsFiltered: Product[];
  products: Observable<Product[]>;

  constructor(private service:ProductApiService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  affiche(){
    this.products.pipe(
      map(data => data.filter(w => w.author == this.search))
    ).subscribe((data: any) => this.productsFiltered = data);
  }

}
