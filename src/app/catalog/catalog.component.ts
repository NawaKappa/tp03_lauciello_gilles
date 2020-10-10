import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

products: Observable<Product[]>;

  constructor(private service:ProductApiService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

}