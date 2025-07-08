import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Pessoa {
  cpf: string;
  nome: string;
  genero: string;
  endereco: string;
  idade: number;
  municipio: string;
  estado: string;
}

@Component({
  selector: 'app-pessoas-table',
  templateUrl: './pessoas-table.component.html',
  styleUrls: ['./pessoas-table.component.scss']
})
export class PessoasTableComponent {
  displayedColumns: string[] = ['cpf', 'nome', 'genero', 'endereco', 'idade', 'municipio', 'estado'];
  dataSource = new MatTableDataSource<Pessoa>([]);
  isLoading = false;
  filterValue = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  loadPessoas() {
    this.isLoading = true;
    this.http.get<Pessoa[]>('http://localhost:5000/api/pessoas').subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Erro ao carregar pessoas.');
      }
    });
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: Pessoa, filter: string) =>
      data.nome.toLowerCase().includes(filter);
  }
}
