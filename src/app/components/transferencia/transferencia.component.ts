import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  transferenciaForm!: FormGroup;
  destinatarios!: any;
  destinatario!: any;
  successfulForm: boolean = false;
  errorForm: boolean = false;

  constructor(
    public fb: FormBuilder,
    private firebaseServiceService: FirebaseServiceService
  ) { }

  ngOnInit(): void {
    this.firebaseServiceService.getDestinatarios().subscribe(resp => {
      this.destinatarios = resp.map((e: any) => {
        return {
          nombre: e.payload.doc.data().nombre,
          correo: e.payload.doc.data().email,
          banco: e.payload.doc.data().banco,
          tipoCuenta: e.payload.doc.data().tipoCuenta,
          rut: e.payload.doc.data().rut,
          idFirebase: e.payload.doc.id
        }
      })
    },
      error => {
        console.error(error);
      }
    );
    this.transferenciaForm = this.fb.group({
      destinatarioId: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(1)]],
    });
  }
  saveTransferencia(): void {
    if (!this.transferenciaForm.invalid) {
      this.transferenciaForm.value.nombre = this.destinatario.nombre;
      this.transferenciaForm.value.rut = this.destinatario.rut;
      this.transferenciaForm.value.banco = this.destinatario.banco;
      this.transferenciaForm.value.tipoCuenta = this.destinatario.tipoCuenta;
      this.firebaseServiceService.createTransferencia(this.transferenciaForm.value).then(resp => {
        this.transferenciaForm.reset();
        this.successfulForm = true;
        this.errorForm = false;
      }).catch(error => {
        console.error(error);
        this.errorForm = true;
      })
    } else {
      this.errorForm = true;
    }
  }
  changeDestinatario() {
    this.destinatario = this.destinatarios.find((x: any) => x.idFirebase === this.transferenciaForm.value.destinatarioId);
  }
}
