import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Form, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:Array<any>=this.cartService.getItems();
  constructor(private cartService:CartService,private formBuilde:FormBuilder) { }

  ngOnInit(): void {
  }

}
