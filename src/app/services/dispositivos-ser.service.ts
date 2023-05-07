import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispositivosSerService {

  private usuariosUrl = 'http://localhost:3000/dispositivos';

  private dispositivoSeleccionado: any;

  constructor(private http: HttpClient) { }

  getDispositivos() {
    return this.http.get<any[]>(this.usuariosUrl);
  }

  setDispositivoSeleccionado(dispositivo: any) {
    this.dispositivoSeleccionado = dispositivo;
  }

  getDispositivoSeleccionado() {
    return this.dispositivoSeleccionado;
  }

}
