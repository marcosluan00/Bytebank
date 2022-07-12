import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencias.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number = 0;
  destino: string = '';

  @Output() aoTransferir = new EventEmitter<any>(

  );

  constructor(private serviceTransferencia: TransferenciaService, private route: Router) { }

  ngOnInit(): void {
  }
  transferir() {
    const valorEmitir: Transferencia =  { valor: this.valor, destino: this.destino}

    this.serviceTransferencia.adicionarTransferencia(valorEmitir).subscribe(res => {
      console.log(res)
      this.limparCampos()

      this.route.navigateByUrl('extrato')

    },
    (error) => console.error(error));


  }
  limparCampos(){
    this.valor = 0;
    this.destino = '';
  }

}
