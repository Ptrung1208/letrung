import { OnDestroy } from '@angular/core';
import { BlogService } from './../../services/BlogService';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/header-layout/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/header-layout/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../shared/header-layout/types/productitem';
import { ProductItemComponent } from '../shared/header-layout/product-item/productitem.component';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterOutlet,ProductItemComponent,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy  {

 nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage ='';

  isVisible= true;

  getBlogApi: Subscription;

  products: ProductItems[] =[
    { id: 1,  name: "Giay Nike red", price: 1600000, image:'assets/images/giaynikered.jpg'},
    { id: 2, name: "Giay Addidas", price: 1400000, image:'assets/images/giayaddidas.jpg'},
    { id: 3, name: "Giay Puma", price: 1100000, image:'assets/images/giaypuma.jpg'},
    { id: 4, name: "Giay Wika", price: 600000, image:'assets/images/giaywika.jpg'},
    { id: 5,  name: "Giay Nike", price: 1500000, image:'assets/images/giaynike.jpg'},
    { id: 6,  name: "Giay Addidas Red", price: 1700000, image:'assets/images/giayaddidasred.jpg'},
    
  ];

  constructor(private  blogService: BlogService){
    console.log('Initalize Component');
    this.getBlogApi = new Subscription();
  }
  ngOnInit(): void {
    this.getBlogApi = this.blogService.getBlogs().pipe(
      map(({data })=>
        data.map((item:any) => {
        return{
          ...item,
          name: item.title,
          price: Number (item.body),
          image:'assets/images/giaynike.jpg',
        };
      })
      ),
    ).subscribe((res)=>{
      this.products = res;

    });
    
  }

ngOnDestroy(): void {
    if (this.getBlogApi){
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubscribed')
    }
}

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  handleDelete = (id:number) =>{
    const productIndex = this.products.findIndex(item =>item.id == id);
    if (productIndex !== -1){
      this.products.splice(productIndex,1);
    }
    this.products = this.products.filter((item) =>item.id !== id)
  };

  handleChangeVisible = () =>{
    this.isVisible = false;
  }

  updateField():void{
    console.log('Hello world');
  }
}

