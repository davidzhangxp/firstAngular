import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable, tap } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit, AfterViewInit {
  constructor(private cartService: CartService) {}
  shippingCosts = this.cartService.getShippingPrice();
  @ViewChild('inputbox') inputbox!: ElementRef;
  @ViewChild('btn') button!: ElementRef;
  click$?: Observable<any>;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.inputbox.nativeElement.value);
    console.log(this.button.nativeElement);
    this.click$ = fromEvent(this.button.nativeElement, 'click');
    this.click$.subscribe(() => {
      console.log('click me');
    });
  }
  test() {
    console.log('inline click');
  }
}
