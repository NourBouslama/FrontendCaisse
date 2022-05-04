import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caisse } from '../Model/Caisse';
import { ModePaiement } from '../Model/ModePaiement';
import { AuthentifierService } from './authentifier.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CaisseService {
  apiURL: string = 'http://localhost:8080/caisses/api';
modes : ModePaiement[];
caisses : Caisse[];
  constructor(private http : HttpClient, private authService : AuthentifierService) { }

  
  listeCaisses(): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Caisse[]>(this.apiURL+"/listerCaisses",{headers:httpHeaders}
    );

  }

  ajouterCaisse(prod: Caisse): Observable<Caisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Caisse>(this.apiURL+"/ajouterCaisse",prod,{headers:httpHeaders}
    );
  
  }

  consulterCaisse(id: number): Observable<Caisse> {
    const url = `${this.apiURL}/consulterCaisse/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Caisse>(url,{headers:httpHeaders});
  }

  updateCaisse(prod: Caisse): Observable<Caisse> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<Caisse>(this.apiURL + '/modifierCaisse', prod,{headers:httpHeaders});
  }

  DesactiverCaisse(id: number) {
    const url = `${this.apiURL+"/desactiverCaisse"}/${id}`;
    let jwt = this.authService.getToken();
    //jwt = "Bearer "+jwt;
   // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
   const httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer jwt'
    }),
   withCredentials: true
  };
   const  httpHeaders = {
      headers:new HttpHeaders({"Content-Type": "application/json","Authorization":jwt}), 
      withCredentials: true
    };
    return this.http.put(url,httpOptions);
   /* const url = `${this.apiURL+"/desactiverCaisse"}/${id}`;
    return this.http.put(url,httpOptions);*/
  }

  ActiverCaisse(id: number) {
    const url = `${this.apiURL+"/activerCaisse"}/${id}`;
    return this.http.put(url,httpOptions);
  }

 

 
}
