import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencias.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

 private lista_transferencia: any[];
 private url = 'http://localhost:3000/transferencias'


  constructor(private http : HttpClient) {
    this.lista_transferencia = []
  }

  todas(): Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>(this.url);
  }

  get transferencias(){
    return this.lista_transferencia;
  }

  adicionarTransferencia(transferencia: Transferencia):Observable<Transferencia>{
    this.adicionais(transferencia);

    return this.http.post<Transferencia>(this.url, transferencia)
  }
  private adicionais(transferencia: any){
    transferencia.data = new Date();
  }
}
