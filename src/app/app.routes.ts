import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'person/:idPerson',
        loadComponent: () => import('./pages/person/person.component').then(m => m.PersonComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
