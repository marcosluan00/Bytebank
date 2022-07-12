import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencias.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private serviceTransferencia: TransferenciaService) { }

  ngOnInit(): void {
    this.serviceTransferencia.todas().subscribe((res: Transferencia[]) => {
      this.transferencias = res;
    })
  }
}
