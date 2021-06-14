import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinatarioComponent } from './components/destinatario/destinatario.component'
import { TransferenciaComponent } from './components/transferencia/transferencia.component'
import { HistorialComponent } from './components/historial/historial.component'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'destinatario',
    component: DestinatarioComponent
  },
  {
    path: 'transferencia',
    component: TransferenciaComponent
  },
  {
    path: 'historial',
    component: HistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
