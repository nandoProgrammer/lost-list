import { Component } from '@angular/core';
import { AbitusService } from '../../core/services/abitus.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  response: any = [];
  pagination: any = {
    totalElements: 0,
    currentPage: 0,
    itemsPerPage: 12,
  };
  formFilters!: FormGroup;
  filters: any = {
    sexo: '',
    nome: '',
    pagina: '',
    faixaIdadeFinal: 0,
    faixaIdadeInicial: 0
  };

  constructor(
    private apiAbitusService: AbitusService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit():void {
    this.getData();
    this.createForm();
  }

  private getData():void {
    this.filters.pagina = this.pagination.currentPage;
    this.apiAbitusService.getAllPerson(this.filters)
      .subscribe({
        next: (res) => {
          this.response = res;
          this.pagination.totalElements = res.totalElements;
        }, 
        error: (error) => {
          throw new Error(error.message);
        }
      })
  }

  navigateByPerson(idPerson: string):void {
    this.router.navigate([`person/${idPerson}`]);
  }

  pageChange(currentPage: number):void {
    this.pagination.currentPage = currentPage;
    this.getData();
  }

  createForm():void {
     this.formFilters = this.formBuilder.group({
       nome: [''],
       faixaIdadeFinal: [''],
       faixaIdadeInicial: [''],
       sexo: ['']
     });
  }

  filterRequest():void {
    this.filters = {
      ...this.filters,
      ...this.formFilters.value
    };

    this.getData();
  }
}
