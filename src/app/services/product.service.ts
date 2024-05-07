import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlAPI: string = "https://productosnmam.free.beeceptor.com/todos";

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get(this.urlAPI).pipe(take(1));
  }
  
}
