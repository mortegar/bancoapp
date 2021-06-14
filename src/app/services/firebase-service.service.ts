import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getTransferencias(){
    return this.firestore.collection("transferencias").snapshotChanges();
  }
  getDestinatarios(){
    return this.firestore.collection("destinatarios").snapshotChanges();
  }
  createDestinatario(destinatario:any){
    return this.firestore.collection("destinatarios").add(destinatario);
  }
  createTransferencia(transferencia:any){
    return this.firestore.collection("transferencias").add(transferencia);
  }
}
