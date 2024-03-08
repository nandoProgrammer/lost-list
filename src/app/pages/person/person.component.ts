import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbitusService } from '../../core/services/abitus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
   idPersonRoute!: string;
   response!: any;

   constructor(
     private activatedRoute: ActivatedRoute,
     private apiAbitusService: AbitusService,
     private router: Router
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
        },
        error: (error) => {
          throw new Error(error.message)
        }
       })
   }

   get urlPage():string {
     return window.location.href;
   }

   shareOn(share: "WHATSAPP" | "FACEBOOK"):void {
    if(share == "WHATSAPP") {
      window.open(`https://api.whatsapp.com/send?text=${this.urlPage}`, '_blank');
    }

    if(share == "FACEBOOK") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.urlPage}`, '_blank');
    }
   }

   navigateHome() {
     this.router.navigate(['']);
   }
}
