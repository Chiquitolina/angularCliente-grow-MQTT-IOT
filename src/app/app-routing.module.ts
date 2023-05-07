import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { DispositivounitarioComponent } from './components/dispositivounitario/dispositivounitario.component';
import { LoginComponent } from './components/login/login.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'dispositivo', component: DispositivounitarioComponent },
  { path: 'bitacora', component: BitacoraComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
