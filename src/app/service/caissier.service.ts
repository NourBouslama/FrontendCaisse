import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caissier } from '../Model/Caissier';
import { AuthentifierService } from './authentifier.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CaissierService {

  apiURL: string = 'http://localhost:8080/caisses/caissier';
  constructor(private http: HttpClient, private authService : AuthentifierService) {
  }
  listeCaissiers(): Observable<Caissier[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Caissier[]>(this.apiURL+"/listerCaissiers",{headers:httpHeaders}
    );
  

  }
  ajouterCaissier(caissier: Caissier): Observable<Caissier> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Caissier>(this.apiURL+"/ajouterCaissier",caissier,{headers:httpHeaders}
    );

  }


  desactiverCaissier(id: number):Observable<Caissier> {
    const url = `${this.apiURL}/desactiverCaissier/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<Caissier>(url,{headers:httpHeaders});

  }
  activerCaissier(id: number) {
    const url = `${this.apiURL}/activerCaissier/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put(url,{headers:httpHeaders});

   
  }

  consulterCaissier(matricule: number): Observable<Caissier> {
    const url = `${this.apiURL}/consulterCaissier/${matricule}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Caissier>(url,{headers:httpHeaders});


  }

  updateCaissier(caissier: Caissier): Observable<Caissier> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<Caissier>(this.apiURL + '/modifierCaissier', caissier,{headers:httpHeaders});

  }
}
