import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter<string>();

  addAlert(value: string) {
    this.notify.emit(value);
  }
  constructor() {}

  ngOnInit(): void {}
}
