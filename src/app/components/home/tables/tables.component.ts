import { Component, OnInit } from '@angular/core';
import { ITable, ITableResponse } from '../../../shared/interfaces/table';
import { UserService } from '../../../services/users/user.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tarbaseTable: ITable;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getTarbase();
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
    }
  }

  getTarbase(): void {
    this.userService.tarbase().subscribe(
      (data: ITableResponse) => {
        this.tarbaseTable.data = data.results;
      }
    )
  }
}
