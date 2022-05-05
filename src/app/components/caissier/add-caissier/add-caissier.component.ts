import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caissier } from 'src/app/Model/Caissier';
import { Role } from 'src/app/Model/Role';
import { CaissierService } from 'src/app/service/caissier.service';

@Component({
  selector: 'app-add-caissier',
  templateUrl: './add-caissier.component.html',
  styleUrls: ['./add-caissier.component.scss']
})
export class AddCaissierComponent implements OnInit {

  newCaissier = new Caissier();
  r=new Role(2,"caissier");
  constructor(private caissierService:CaissierService,private router :Router)  { }

  ngOnInit(): void {
  }

  ajouterCaissier(){
    this.newCaissier.role=this.r;
    this.caissierService.ajouterCaissier(this.newCaissier)
    .subscribe(agt => {
    console.log(agt);
    });
    this.router.navigate(['/Caissier']).then(() => {
      window.location.reload();
      });
  }

}
