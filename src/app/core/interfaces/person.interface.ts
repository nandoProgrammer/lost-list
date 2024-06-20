export interface ListPerson {
  content: IPerson[];
}

export interface IPerson {
  id: string;
  sexo: string;
  nome: string;
  idade: string;
  urlFoto: string;
  faixaIdadeInicial: number;
  ultimaOcorrencia: any;
  vivo: string;
}
