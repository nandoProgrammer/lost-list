import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IFilters } from '../interfaces/filters.interface';

@Injectable({
  providedIn: 'root',
})
export class AbitusService {
  BASE_URL: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllPerson(filters: IFilters): Observable<any> {
    const params = new HttpParams()
      .set('faixaIdadeInicial', filters.faixaIdadeInicial)
      .set('faixaIdadeFinal', filters.faixaIdadeFinal)
      .set('status', 'DESAPARECIDO')
      .set('porPagina', '12')
      .set('nome', filters.nome)
      .set('sexo', filters.sexo)
      .set('pagina', filters.pagina);

    return this.http.get<any>(`${this.BASE_URL}/pessoas/aberto/filtro`, {
      params,
    });
  }

  getPersonById(idPerson: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/pessoas/${idPerson}`);
  }
}
