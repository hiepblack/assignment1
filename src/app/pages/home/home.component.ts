import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: IProduct[] = [];

  constructor(private product: ProductService) {
    this.product.getAllProducts().subscribe(res => this.products = res)
  }
  handleRemove(id: any) {
    this.product.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id)
    }
    )
  }
}
