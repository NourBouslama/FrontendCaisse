import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkbox } from 'primeng/checkbox';
import { SessionCaisse } from 'src/app/Model/SessionCaisse';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-fermer-session',
  templateUrl: './fermer-session.component.html',
  styleUrls: ['./fermer-session.component.scss']
})
export class FermerSessionComponent implements OnInit {

val:number=0;
val1:number=0;
val2:number=0;
val3:number=0;
val4:number=0;
val5:number=0;
val6:number=0;
val7:number=0;
val8:number=0;
val9:number=0;
val10:number=0;
val11:number=0;
val12:number=0;
resultat:number=0

box :Checkbox;

sessionCaisses:SessionCaisse[];
currentSession = new SessionCaisse();
  constructor(private activatedRoute: ActivatedRoute,private sessionService: SessionService,private router :Router) { }

  ngOnInit(): void {
    this.sessionService.consulterSession(this.activatedRoute.snapshot.params.numS).
    subscribe( sess =>{ this.currentSession = sess; } ) ;
    console.log(this.currentSession.encaissements);
 

 
  }
  Calculer(){
    this.resultat=this.val*50+this.val1*5+this.val2*20+this.val3*2+this.val4*10+this.val5+this.val6*5+this.val7*0.5+this.val8*0.2+this.val9*0.1+this.val10*0.05+this.val11*0.02+this.val12*0.01;
 }

 FermerSession(s:SessionCaisse){
  let conf = confirm("Voulez-vous vraiement activer ce caissier ?");
  if (conf)
 
  this.sessionService.FermerSession(s.numS).subscribe(() => {
  //s.datefermeture=new Date();
  console.log("session fermer");
  });


  this.router.navigate(['/session']).then(() => {
  window.location.reload();
  });

 }

 
 FermerJournalCaisse(p: SessionCaisse) {
 /* let conf = confirm("Etes-vous sûr ?");
  if (conf)*/
    this.sessionService.fermerJournalCaisse(p.numS).subscribe(() => {
      console.log("session ouvert");
    });
 
}


}
