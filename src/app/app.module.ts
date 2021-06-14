import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DestinatarioComponent } from './components/destinatario/destinatario.component';
import { HeaderComponent } from './components/header/header.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    DestinatarioComponent,
    HeaderComponent,
    TransferenciaComponent,
    HistorialComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule, 
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
