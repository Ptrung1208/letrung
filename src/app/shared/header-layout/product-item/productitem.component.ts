import { Component, Input, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { UpperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { NgFor, NgIf } from "@angular/common";
import { ProductItems } from "../types/productitem";
import { EventEmitter } from  "@angular/core";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CurrencyPipe, UpperCasePipe, NgFor, NgIf, RouterLink,],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.css',
})
export class ProductItemComponent implements OnChanges, OnDestroy {
  @Input() products: ProductItems [] = [];

  @Output() dataEvent = new EventEmitter<number>();

  get totalPrice(): string{
    const sum = this.products.reduce((total,item) => {
      return total +item.price;
    },0);
    return `Total Price  ${sum}`;
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['products'].currentValue);
      console.log(changes['products'].previousValue);
  }
  ngOnDestroy(): void {
      console.log('Component is removed');
  }

  handleDelete = (id: number) => {
    // console.log(id);
    this.dataEvent.emit(id);
  }

 
  
  }
