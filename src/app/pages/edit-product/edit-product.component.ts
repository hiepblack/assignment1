import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product: IProduct = {
    name: '',
    price: 0,
  }
  constructor(private products: ProductService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.products.getOneProduct(id).subscribe(data => this.product = data)
    })
  }
  onSubmit() {
    this.products.updateProduct(this.product).subscribe(product => console.log(product)
    )
  }
}
