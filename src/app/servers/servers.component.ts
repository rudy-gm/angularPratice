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
  servers = ["server-1", 'server-2', 'server3']

  // -- Assignment -- //; 
  isShowing = true; 
  numbers = []

  constructor(){
    setTimeout((()=>{
      this.allowNewServer = true; 
    }),2000) 
  }

  onServerCreation(){
    this.serverCreated = !this.serverCreated; 
    this.servers.push(this.serverName)
    console.log(this.servers); 
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  deleteInput(){
    this.userName = ''
  }

  showAndHide(){
    this.isShowing = !this.isShowing; 
    this.numbers.push(new Date())
    console.log(this.numbers)
  }

  changeBackground(number){
    return number >= 5 ? 'blue' : ''; 
  }




}
