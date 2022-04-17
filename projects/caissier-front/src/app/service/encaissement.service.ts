import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encaissement } from '../Model/Encaissement';
import { SessionCaisse } from '../Model/SessionCaisse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncaissementService {

  apiURL: string = 'http://localhost:8080/caisses/encaissement';
  constructor(private http: HttpClient) {
  }

  listeEncaissements(): Observable<Encaissement[]> {
    return this.http.get<Encaissement[]>(this.apiURL + '/listerEncaissements');
  }

  listeEncaissementsByEtat(name): Observable<any> {
    const url = `${this.apiURL+"/listerEncaissementsByEtat"}/${name}`;
    return this.http.get<Encaissement[]>(url);
  }
  
  listeEncaissementsBySession(session : number): Observable<any> {
    const url = `${this.apiURL+"/listerEncaissementsBySession"}/${session}`;
    return this.http.get<Encaissement[]>(url);
  }
}
