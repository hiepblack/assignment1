import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'update/:id', component: EditProductComponent },
  { path: 'add', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
