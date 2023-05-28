import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: IProduct = {
    name: "",
    price: 0,
    completed: true
  }
  constructor(private products: ProductService) {

  }
  onSubmit() {
    this.products.addProduct(this.product).subscribe(data => console.log(data)
    )
  }
}
