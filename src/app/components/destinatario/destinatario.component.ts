import { Component, OnInit } from '@angular/core';
import { BancosService } from '../../services/bancos.service';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.scss']
})

export class DestinatarioComponent implements OnInit {
  bancos: Array<any> = [];
  destinatarioForm!: FormGroup;
  successfulForm: boolean = false;
  errorForm: boolean = false;

  constructor(
    private bancoService: BancosService,
    public fb: FormBuilder,
    private firebaseServiceService: FirebaseServiceService
  ) { }

  ngOnInit(): void {
    this.bancoService.getBancos('https://bast.dev/api/banks.php').subscribe((res: any) => {
      this.bancos = res.banks;
    })
    this.destinatarioForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      telefono: [''],
      banco: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
      numCuenta: ['', Validators.required],
    });
  }
  saveDestinatario(): void {
    if (!this.destinatarioForm.invalid) {
      this.firebaseServiceService.createDestinatario(this.destinatarioForm.value).then(resp => {
        this.destinatarioForm.reset();
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
}
