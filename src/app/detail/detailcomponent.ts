import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone:true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  id = '';
  constructor(private routes: ActivatedRoute){
    this.id = String ( routes.snapshot.paramMap.get('id'))

  }
 
}

