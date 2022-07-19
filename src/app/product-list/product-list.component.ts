import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [],
})
export class ProductListComponent implements OnInit {
  products = products;
  share() {
    window.alert('The product has been shared!');
  }
  onNotify(newItem: string) {
    window.alert('You will be notified' + newItem);
    console.log(newItem);
  }
  constructor() {}

  ngOnInit(): void {}
}
