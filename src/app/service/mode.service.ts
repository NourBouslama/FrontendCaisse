import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModePaiement } from '../Model/ModePaiement';
import { AuthentifierService } from './connection.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  apiURL: string = 'http://localhost:8080/caisses/mode';
  constructor(private http: HttpClient, private authService : AuthentifierService) {
  }
  listeModes(): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<ModePaiement[]>(this.apiURL+"/listerModePaiements",{headers:httpHeaders}
    );
  
  }

  listerModePaiementParEtat(name): Observable<any> {
    const url = `${this.apiURL+"/listerModePaiementParEtat"}/${name}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<ModePaiement[]>(url,{headers:httpHeaders}
    );


  
  }

  ajouterMode(prod: ModePaiement): Observable<ModePaiement> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<ModePaiement>(this.apiURL+"/ajouterModePaiement",prod,{headers:httpHeaders}
    );
  }

  consulterMode(id: number): Observable<ModePaiement> {
    const url = `${this.apiURL}/consulterModePaiement/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<ModePaiement>(url,{headers:httpHeaders});

  }

  updateMode(prod: ModePaiement): Observable<ModePaiement> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<ModePaiement>(this.apiURL + '/modifierModePaiement', prod,{headers:httpHeaders});
  
  }

  DesactiverMode(id: number) {
    const url = `${this.apiURL}/desactiverMode/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put(url,{headers:httpHeaders});

 
  }

  ActiverMode(id: number) {
    const url =`${this.apiURL+"/activerMode"}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put(url,{headers:httpHeaders});

 /*   const url = `${this.apiURL+"/activerMode"}/${id}`;
    return this.http.put(url, httpOptions);*/
  }
}
