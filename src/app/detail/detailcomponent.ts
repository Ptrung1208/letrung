import { BlogService } from './../../services/BlogService';
import { routes } from './../app.routes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductItems } from '../shared/header-layout/types/productitem';

@Component({
  selector: 'app-detail',
  standalone:true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  id = '';
  productItem: ProductItems ={
    id: 0,
    image:'',
    name:'',
    price:0,


  }

  constructor(private routes: ActivatedRoute, private blogService:BlogService){
    this.id = String ( routes.snapshot.paramMap.get('id'))
    

  }
  ngOnInit(): void {
     this.blogService.detailBlog(+this.id).subscribe(({data}: any) =>{
       this.productItem.id = data.id;
       this.productItem.image ="assets/images/giaynike.jpg",
       this.productItem.name = data.title;
       this.productItem.price = data.body;
     });
    
  }
 
}

