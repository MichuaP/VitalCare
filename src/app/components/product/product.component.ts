import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  array: Product [] = [];

  constructor(public productService: ProductService) {
    
  }

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
    this.recuperarDatos();
  }

  recuperarDatos(): void {
    console.log("Entre");

    this.productService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data: any): void {
    console.log("data", data);
    this.array = data.products;
    console.log("array", this.array);
  }
}
