import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../Model/Agent';
import { AuthentifierService } from './authentifier.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AgentService {

  apiURL: string = 'http://localhost:8080/caisses/agent';
  constructor(private http: HttpClient, private authService : AuthentifierService) {
  }
  listeAgents(): Observable<Agent[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Agent[]>(this.apiURL+"/listerAgents",{headers:httpHeaders}
    );
  
  }
  ajouterAgent(agent: Agent): Observable<Agent> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Agent>(this.apiURL+"/ajouterAgent",agent,{headers:httpHeaders}
    );
 
  }


  desactiverAgent(idU: number) {
    const url = `${this.apiURL}/desactiverAgent/${idU}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = {
      headers:new HttpHeaders({"Content-Type": "application/json","Authorization":jwt}), 
      withCredentials: true
    };

    return this.http.put(url,{headers:httpHeaders});
  }

  activerAgent(id: number) {
    const url = `${this.apiURL}/activerAgent/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put(url,{headers:httpHeaders});

  }

  consulterAgent(idU: number): Observable<Agent> {
    const url = `${this.apiURL}/consulterAgent/${idU}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Agent>(url,{headers:httpHeaders});
  }

  updateAgent(agent: Agent): Observable<Agent> {
 
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<Agent>(this.apiURL + '/modifierAgent', agent,{headers:httpHeaders});
  }

}
