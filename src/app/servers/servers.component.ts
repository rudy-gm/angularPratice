import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {

  allowNewServer = false; 
  serverCreation = false;
  serverName = ''; 

  constructor(){
    setTimeout((()=>{
      this.allowNewServer = true; 
    }),2000) 
  }

  onServerCreation(){
    this.serverCreation = !this.serverCreation; 
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
