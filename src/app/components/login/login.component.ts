import { Component } from '@angular/core';
import {trigger, state, animation, animate, style, transition} from '@angular/animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-300%)',
      })),
      transition(':enter', [
        animate(400, style({
          transform: 'translateX(0)',
        }))
      ])
    ]),
    trigger('enterStateTwo', [
      state('void', style({
        opacity: 0,
      })),
      transition(':enter', [
        animate(1000, style({
          opacity: 1,
        }))
      ])
    ])
  ]
})
export class LoginComponent {



}
