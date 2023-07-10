import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {

  allowNewServer = false; 
  serverName =""; 
  userName = '';
  serverCreated = false; 

  constructor(){
    setTimeout((()=>{
      this.allowNewServer = true; 
    }),2000) 
  }

  onServerCreation(){
    this.serverCreated = !this.serverCreated; 
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  deleteInput(){
    this.userName = ''
  }


}
