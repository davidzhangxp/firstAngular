import { Component, OnInit } from '@angular/core';
import {
  state,
  style,
  animate,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      transition('open=>closed', [
        animate('1s', style({ transform: 'translateX(100%)' })),
      ]),
      transition('closed=>open', animate('0.5s')),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit {
  constructor() {}
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {}
}
