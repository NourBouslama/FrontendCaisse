import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Model/Facture';
import { Paiement } from '../Model/Paiement';
import { AuthentifierService } from './authentifier.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  apiURL: string = 'http://localhost:8080/caisses/paiement';
  constructor(private http: HttpClient, private authService: AuthentifierService) {
  }
  listerPaiements(numS: number): Observable<Paiement[]> {


    return this.http.get<Paiement[]>(this.apiURL + '/listerPaiement/' + numS);
  }

  ajouterPaiement(paiement: Paiement): Observable<Paiement> {
    

    return this.http.post<Paiement>(this.apiURL + '/ajouterPaiement', paiement);
  }

  PayerFacture(factures: Facture[]) {
    

    const url = `${this.apiURL}/payer`;
    return this.http.put(url, factures);
  }
  AnnulerPaiement(factures: Facture[]): Observable<Paiement> {
    

    const url = `${this.apiURL}/annuler`;
    return this.http.put<Paiement>(url, factures);
  }

}
