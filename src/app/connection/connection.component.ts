import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Model/Utilisateur';
import { Router } from '@angular/router';
import { AuthentifierService } from '../service/connection.service';
import { Role } from '../Model/Role';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styles: [
  ]
})
export class ConnectionComponent implements OnInit {
  utilisateur = new Utilisateur();
  u=new Utilisateur();
  err:number = 0;
  display: boolean = false;
  r=new Role(1,"admin");

 
  clickAlert(){
    this.display = false;
 }


  constructor(private router: Router,private authentifierService:AuthentifierService,private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
  }

  Connection()
{
    this.authentifierService.connection(this.utilisateur).subscribe((data)=> {
    let jwToken = data.headers.get('Authorization');
    this.authentifierService.saveToken(jwToken);
    this.utilisateurService.chercherParEmail(this.utilisateur.email).
    subscribe( agt =>{ this.u = agt;
      
    if(this.u.role.role=="admin"){
      this.router.navigate(['/acceuil']);
      console.log("in if",this.u.role.role);
    }
    else if(this.u.role.role=="caissier"){

      this.router.navigate(['/session']);
      console.log("in if",this.u.role.role);
    }
  else{
      this.router.navigate(['/connection']);
      console.log("in else",this.u.role.role);
  }
  console.log(this.u.role);

  }) ;


});


 





}


}
