import { Component, OnInit } from '@angular/core';
import { DispositivosSerService } from 'src/app/services/dispositivos-ser.service';
import { trigger, state, animation, animate, style, transition } from '@angular/animations'
import { io } from 'socket.io-client';

@Component({
  selector: 'app-dispositivounitario',
  templateUrl: './dispositivounitario.component.html',
  styleUrls: ['./dispositivounitario.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        opacity: 0,
      })),
      transition(':enter', [
        animate(500, style({
          opacity: 1,
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
export class DispositivounitarioComponent implements OnInit {

  private socket: any;  //CLIENTE WEB SOCKET

  //FUNCION PARA REACOMODAR LA ESTRUCTURA DE LOS DATOS DEL JSON DE ENTRADAS.

  reorganizarEstructura(objetodeObj: any, dispositivo: any) {
    let newObj: any = {}

    let indice = 0
    let indicedos = 1;
    let indicetres = 0

    dispositivo.entradas.forEach((entrada: any) => {
      let obj: any = {}
      entrada.indicators.forEach(() => {
        obj[indice] = { indice: objetodeObj[indicedos].Valor }
        if (indice != entrada.indicators.length - 1) {
          indice++
        } else {
          indice = 0;
        }
        indicedos++
      })
      newObj[indicetres] = obj
      indicetres++
    })
    return newObj
  }

  public dispositivo: any; //DISPOSITIVO DONDE SE VA A GUARDAR EL PEDIDO AL SERVICIO


  //ENTRADAS INICIALES DE MUESTREO
  entradassss: any = {
    IdSerie: 12131313131,
    1: { IdEntrada: 450157, Valor: '-' },
    2: { IdEntrada: 450148, Valor: '-' },
    3: { IdEntrada: 450157, Valor: '-' },
    4: { IdEntrada: 450157, Valor: '-' },
    5: { IdEntrada: 450157, Valor: '-' },
    6: { IdEntrada: 450157, Valor: '-' },
    7: { IdEntrada: 450157, Valor: '-' },
    8: { IdEntrada: 450157, Valor: '-' },
    9: { IdEntrada: 450157, Valor: '-' },
    10: { IdEntrada: 450157, Valor: '-' },
    11: { IdEntrada: 450157, Valor: '-' },
    12: { IdEntrada: 450157, Valor: '-' },
    13: { IdEntrada: 450157, Valor: '-' },
    14: { IdEntrada: 450157, Valor: '-' },
    15: { IdEntrada: 450157, Valor: '-' },
    16: { IdEntrada: 450157, Valor: '-' }
  }


  constructor(private dispoService: DispositivosSerService) {

  }

  ngOnInit(): void {
    console.log("BIRGENNNNNNNNNN: ", this.entradassss)
    this.dispositivo = this.dispoService.getDispositivoSeleccionado();
    console.log(this.dispositivo.entradas)

    this.entradassss = this.reorganizarEstructura(this.entradassss, this.dispositivo)

    ///////////////////////////////////////////////////////
    ///////////////////// WEB SOCKET //////////////////////

    this.socket = io('http://localhost:3000');

    // Escuchar el evento "mensaje" enviado desde el servidor
    this.socket.on('mensaje', (data: any) => {
      console.log(`Mensaje recibido: ${data}`);
      data = JSON.parse(data)
      for (const key in data) {
        if (typeof data[key] === "string") {
          data[key] = JSON.parse(data[key]);
        }
      }
      console.log(data)
      this.entradassss = this.reorganizarEstructura(data, this.dispositivo)
    });

  }

}