import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentifierService } from './connection.service';
import { Utilisateur } from '../Model/Utilisateur';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  apiURL: string = 'http://localhost:8080/caisses/utilisateur';

  constructor(private http: HttpClient, private authService : AuthentifierService) { }

  chercherParEmail(email: String): Observable<Utilisateur> {
    const url = `${this.apiURL}/chercherParEmail/${email}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Utilisateur>(url,{headers:httpHeaders});


  }
}
