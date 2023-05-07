import { Component, OnInit } from '@angular/core';
import { DispositivosSerService } from 'src/app/services/dispositivos-ser.service';
import * as io from 'socket.io-client';
import {trigger, state, animation, animate, style, transition} from '@angular/animations'

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css'],
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
export class DispositivosComponent implements OnInit {

  private socket: any;

  dispositivos: any = []

  dispositivosFiltrados: any = []

  buscador: string = ''

  constructor(private dispoService: DispositivosSerService) {
   }

  seleccionarDispositivo(dispositivo: any) {

    this.dispoService.setDispositivoSeleccionado(dispositivo);
    console.log(dispositivo)
  }

  ngOnInit(): void {
    this.dispoService.getDispositivos().subscribe(data => {
      data.forEach(dato => {
        dato.entradas = JSON.parse(dato.entradas)
        dato.salidas = JSON.parse(dato.salidas)
        //dato.entradas.forEach(function (element: any) {
        //console.log(element);
        // });
        if (dato.titulo === null) {
          dato.titulo = "-"
        }
      })
      this.dispositivos = data;
      this.dispositivosFiltrados = this.dispositivos;
      console.log(this.dispositivos.sort((a: any, b: any) => b.estado - a.estado))

      
    });
  }

}

