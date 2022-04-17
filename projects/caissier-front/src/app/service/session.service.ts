import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionCaisse } from '../Model/SessionCaisse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  apiURL: string = 'http://localhost:8080/caisses/session';
  constructor(private http: HttpClient) {
  }
  listeSession(): Observable<SessionCaisse[]> {
    return this.http.get<SessionCaisse[]>(this.apiURL+'/listerSessionCaisses');
  }

  ajouterSession(session: SessionCaisse): Observable<SessionCaisse> {
    return this.http.post<SessionCaisse>(this.apiURL + '/creerSessionCaisse', session, httpOptions);
  }

  FermerSession(id: number) {
    const url = `${this.apiURL+"/fermerSessionCaisse"}/${id}`;
    return this.http.put(url, httpOptions);
  }

  fermerJournalCaisse(id: number) {
    const url = `${this.apiURL+"/fermerJournalCaisse"}/${id}`;
    return this.http.put(url, httpOptions);
  }

  OuvrirSession(id: number) {
    const url = `${this.apiURL+"/ouvrirSessionCaisse"}/${id}`;
    return this.http.put(url, httpOptions);
  }

  consulterSession(numS: number): Observable<SessionCaisse> {
    const url = `${this.apiURL+"/consulterSessionCaisse"}/${numS}`;
    return this.http.get<SessionCaisse>(url);
  }





}
