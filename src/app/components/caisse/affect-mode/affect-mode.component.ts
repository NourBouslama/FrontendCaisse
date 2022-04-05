import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AffectMode } from 'src/app/Model/AffectMode';
import { Caisse } from 'src/app/Model/Caisse';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { CaisseService } from 'src/app/service/caisse.service';
import { ModeService } from 'src/app/service/mode.service';

@Component({
  selector: 'app-affect-mode',
  templateUrl: './affect-mode.component.html',
  styleUrls: ['./affect-mode.component.scss']
})
export class AffectModeComponent implements OnInit {
  modes:any=[];
  //currentCaisse = new AffectMode();
  affect =new AffectMode();
  selectedModesCode: number[];
  constructor(private activatedRoute: ActivatedRoute,private caisseService:CaisseService,private modeService: ModeService,private router :Router) { }

  ngOnInit(): void {
    /*this.caisseService.consulterCaisse(this.activatedRoute.snapshot.params.id).
    subscribe( liv =>{ this.currentCaisse = liv; } ) ;*/
    this.onSelectMode();
  }
  onSelectMode(){
    this.modeService.listeModes().subscribe(response=>{
      console.log(response)
      this.modes = response;
      
    }); 
  }
  affectMode(){
    this.caisseService.AffectMode(this.affect).subscribe(prod => {
      console.log(prod);
      });
      console.log(this.selectedModesCode);
  }

}
