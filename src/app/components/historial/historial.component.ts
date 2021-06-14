import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  transferencias!: any;
  constructor(
    private firebaseServiceService: FirebaseServiceService
  ) { }

  ngOnInit(): void {
    this.firebaseServiceService.getTransferencias().subscribe(resp => {
      this.transferencias = resp.map((e: any) => {
        return {
          nombre: e.payload.doc.data().nombre,
          rut: e.payload.doc.data().rut,
          banco: e.payload.doc.data().banco,
          tipoCuenta: e.payload.doc.data().tipoCuenta,
          monto: e.payload.doc.data().monto,
          idFirebase: e.payload.doc.id
        }
      })
    },
      error => {
        console.error(error);
      }
    );
  }
}
