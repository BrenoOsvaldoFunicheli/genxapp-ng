export interface ITable {
  columns: IColumn[];
  data: any[];
}

export interface IColumn {
  id: string;
  name: string;
}

export interface ITableResponse {
    count: number;
    next: string;
    previous: string;
    results: any[];
}
