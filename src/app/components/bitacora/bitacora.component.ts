import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(420, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('enterStateTwo', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class BitacoraComponent {

}
