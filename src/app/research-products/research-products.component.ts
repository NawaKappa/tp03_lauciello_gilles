import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Models/product';

@Component({
  selector: 'app-research-products',
  templateUrl: './research-products.component.html',
  styleUrls: ['./research-products.component.css']
})
export class ResearchProductsComponent implements OnInit {

  search: string;
  res: Product[];
  products: Observable<Product[]>;

  constructor() { }

  ngOnInit() {
  }

  affiche(){
    this.products.pipe(
      map(data => data.filter(w => w.author == this.search))
    ).subscribe((data: any) => this.res = data);
  }

}
