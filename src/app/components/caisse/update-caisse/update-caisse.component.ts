import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaisseService } from 'src/app/service/caisse.service';
import { ModeService } from 'src/app/service/mode.service';

@Component({
  selector: 'app-update-caisse',
  templateUrl: './update-caisse.component.html',
  styles: [
  ]
})
export class UpdateCaisseComponent implements OnInit {
  modes:any=[];
  constructor(private activatedRoute: ActivatedRoute,private caisseService:CaisseService,private modeService: ModeService,private router :Router) { }

  ngOnInit(): void {
    this.onSelectMode();
  }
  onSelectMode(){
    this.modeService.listeModes().subscribe(response=>{
      console.log(response)
      this.modes = response;
      
    }); 
  }

}
