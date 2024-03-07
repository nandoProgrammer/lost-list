import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbitusService } from '../../core/services/abitus.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
   idPersonRoute!: string;
   response!: any;

   constructor(
     private activatedRoute: ActivatedRoute,
     private apiAbitusService: AbitusService
   ) {}

   ngOnInit():void {
      this.idPersonRoute = this.activatedRoute.snapshot.params["idPerson"];
      this.getPersonById();
   }

   getPersonById():void {
     if(!this.idPersonRoute) return;

     this.apiAbitusService.getPersonById(this.idPersonRoute)
       .subscribe({
        next: (res) => {
          this.response = res;
          console.log(res)
        },
        error: (error) => {
          throw new Error(error.message)
        }
       })
   }
}
