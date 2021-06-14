import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destinatario } from '../models/Destinatario';
import { Transferencia } from '../models/Transferencia';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getListDestinatarios() {
    return this.http.get(`${this.API_URI}/clientes`);
  }
  getListTransferencias() {
    return this.http.get(`${this.API_URI}/clientes`);
  }
  createDestinatario(destinatario: Destinatario) {
    return this.http.post(`${this.API_URI}/clientes`, destinatario);
  }
  createTransferencia(transferencia: Transferencia) {
    return this.http.post(`${this.API_URI}/clientes`, transferencia);
  }
}