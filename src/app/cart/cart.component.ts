import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products = [...products];
  items = this.cartService.getItems();

  clearCart(): void {
    this.cartService.clearCart();
  }
  calculateTotal(): number {
    let total = this.items.reduce((acc, item) => acc + item.price, 0);
    return total;
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    emailAddress: '',
    phoneNumber: 0, //to add regexp to check number and email
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert(
      "you done fucked up, delivery isn't implemented yet (but you submitted an order: " +
        this.checkoutForm.value.name
    );
    this.checkoutForm.reset;
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
}
