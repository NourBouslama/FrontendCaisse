import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'src/app/Model/Agent';
import { AgentService } from 'src/app/service/agent.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.scss']
})
export class ListAgentComponent implements OnInit {

  agents: Agent[];
  agent: Agent;
  display: boolean = false;
  ok: boolean = false;
  constructor(private agentService: AgentService, private router: Router) { }

  ngOnInit(): void {
    this.agentService.listeAgents().subscribe(agnt => {
      console.log(agnt);
      this.agents = agnt;
    });
  }

  DesactiverAgent(g: Agent) {
    this.display=true;
   // let conf = confirm("Etes-vous sûr ?");
    if (this.ok==true){
      this.agentService.desactiverAgent(g.idU).subscribe(() => {
        console.log("agent Désactiver");
      });

    }
     
  }

  ActiverAgent(g: Agent) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.agentService.activerAgent(g.idU).subscribe(() => {
        console.log("agent Activer");
      });
    this.router.navigate(['/Agent']).then(() => {
      window.location.reload();
    });
  }

  clickAlert(){
    this.display = false;
 }
 valider(){
  this.ok = true;
}


}
