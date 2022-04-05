import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caisse } from 'src/app/Model/Caisse';
import { CaisseService } from 'src/app/service/caisse.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss']
})
export class CaisseComponent implements OnInit {
   caisse : Caisse;
   caisses : Caisse[];
  constructor(private caisseService: CaisseService, private router: Router) { }

  ngOnInit(): void {

      this.caisseService.listeCaisses().subscribe(livs => {
          console.log(livs);
          this.caisses = livs;
        });
  }
  desactiverMode(p: Caisse) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.caisseService.DesactiverCaisse(p.numC).subscribe(() => {
        console.log("caisse desactivé");
      });
    this.router.navigate(['/Caisse']).then(() => {
      window.location.reload();
    });
  }

  activerMode(p: Caisse) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.caisseService.ActiverCaisse(p.numC).subscribe(() => {
        console.log("caisse activé");
      });
    this.router.navigate(['/Caisse']).then(() => {
      window.location.reload();
    });
  }
}
