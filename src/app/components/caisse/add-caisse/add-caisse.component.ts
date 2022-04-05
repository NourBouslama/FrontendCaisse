import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caisse } from 'src/app/Model/Caisse';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { CaisseService } from 'src/app/service/caisse.service';
import { ModeService } from 'src/app/service/mode.service';

@Component({
  selector: 'app-add-caisse',
  templateUrl: './add-caisse.component.html',
  styleUrls: ['./add-caisse.component.scss']
})
export class AddCaisseComponent implements OnInit {
  newCaisse = new Caisse();
  modes:any=[];
  selectedModes: ModePaiement[];
  constructor(private caisseService: CaisseService,private modeService: ModeService,private router :Router) { }

  ngOnInit(): void {
    this.onSelectMode();
  }

  onSelectMode(){
    this.modeService.listeModes().subscribe(response=>{
      console.log(response)
      this.modes = response;
      
    }); 
  }
  addCaisse(){
    this.caisseService.ajouterCaisse(this.newCaisse)
    .subscribe(prod => {
    console.log(prod);
    });
    //this.router.navigate(['/affect-mode:/id']);
    
  }
}
