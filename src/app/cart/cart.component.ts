import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: UntypedFormBuilder
  ) {}
  items = this.cartService.getItem();
  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: '',
  });
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn(
      'Your order has been submitted' + this.checkoutForm.value.name
    );
    this.checkoutForm.reset();
  }
  ngOnInit(): void {}
}
