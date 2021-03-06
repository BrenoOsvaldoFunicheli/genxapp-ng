import { Component, OnInit } from '@angular/core';
import { ITable, ITableResponse } from '../../../shared/interfaces/table';
import { UserService } from '../../../services/users/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  table: ITable;
  tarbaseTable: ITable;
  tgScanTable: ITable;
  mirDbTable: ITable;

  tableActive: string;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getTarbase();
  }

  getTarbase(): void {
    this.tarbaseTable = {
      columns: [
        { id: 'mirna', name: 'Mirna'},
        { id: 'geneName', name: 'Nome do Gene'},
        { id: 'species', name:  'Espécies'},
        { id: 'method', name:  'Método'},
        { id: 'direct_indirect', name:  'Direto/Indireto'},
        { id: 'up_down', name:  'Cima/Baixo'}
      ],
      data: []
    };
    this.table = this.tarbaseTable;
    this.tableActive = 'Tarbase';

    this.userService.tarbase().subscribe(
      (data: ITableResponse) => {
        this.tarbaseTable.data = data.results;
      },
      error => {
        this.toastr.error('', error);
      }
    );
  }

  getTargetScan(): void {
    this.tgScanTable = {
      columns: [
        { id: 'mirna', name: 'Mirna'},
        { id: 'gene_id', name: 'Identificador do gene' },
        { id: 'gene_name', name: 'Nome do Gene'},
        { id: 'specie', name:  'Espécies'},
        { id: 'score', name: 'Pontuação' }
      ],
      data: []
    };
    this.table = this.tgScanTable;
    this.tableActive = 'Target Scan';

    this.userService.targetScan().subscribe(
      (data: ITableResponse) => {
        this.tgScanTable.data = data.results;
      },
      error => {
        this.toastr.error('', error);
      }
    );
  }

  getMirDB(): void {
    this.mirDbTable = {
      columns: [
        { id: 'mirna', name: 'Mirna'},
        { id: 'geneName', name: 'Nome do Gene'},
        { id: 'score', name:  'Pontuação'},
        { id: 'species', name: 'Espécies' }
      ],
      data: []
    };
    this.table = this.mirDbTable;
    this.tableActive = 'MirDB';

    this.userService.mirDb().subscribe(
      (data: ITableResponse) => {
        this.mirDbTable.data = data.results;
      }
    );
  }

}
