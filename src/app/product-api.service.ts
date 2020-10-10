import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environnements/environnement';
import { Product } from './Models/product';

@Injectable()
export class ProductApiService {

  constructor(private client:HttpClient) {
  }

  public getProducts() : Observable<Product[]> {
    return this.client.get<Product[]>(environment.backendProducts);
  }

}