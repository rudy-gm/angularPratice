import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {

  allowNewServer = false; 
  serverCreation = `No server was created`;
  serverName = `I'm fine thanks`; 
  userName = ''

  constructor(){
    setTimeout((()=>{
      this.allowNewServer = true; 
    }),2000) 
  }

  onServerCreation(){
    this.serverCreation = `Server name: ${this.serverName} was created`; 
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  deleteInput(){
    this.userName = ''
  }


}
