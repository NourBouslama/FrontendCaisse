import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caisse } from 'src/app/Model/Caisse';
import { Caissier } from 'src/app/Model/Caissier';
import { SessionCaisse } from 'src/app/Model/SessionCaisse';
import { CaisseService } from 'src/app/service/caisse.service';
import { CaissierService } from 'src/app/service/caissier.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {
  caissiers: any = [];
  caisses: any = [];
  caissier: Caissier[];
  caisse: Caisse[];
  newSession= new SessionCaisse();
  constructor(private activatedRoute: ActivatedRoute, private sessionService: SessionService, private caisseService: CaisseService, private caissierService: CaissierService, private router: Router) { }

  ngOnInit(): void {
    this.onSelectCaisse();
    console.log(this.caisses);
    this.onSelectCaissier();
    console.log(this.caissiers);
  }

  onSelectCaisse() {
    this.caisseService.listeCaissesByEtat("active").subscribe(response => {
      console.log(response)
      this.caisses = response;

    });
  }

  onSelectCaissier() {
    this.caissierService.listeCaissiersByEtat("active").subscribe(response => {
      console.log(response)
      this.caissiers = response;

    });
  }

  addSession(){
    this.sessionService.ajouterSession(this.newSession)
    .subscribe(sess => {
    console.log(sess);
    });
    this.router.navigate(['/session']).then(() => {
      window.location.reload();
    });
  }

}
