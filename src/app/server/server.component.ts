import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})


export class  ServerComponent {

    serverID: number = 10;
    serverStatus: string = "Offline"; 

    getServerStatus(){
        return this.serverStatus; 
    }

    getServerID(){
        return this.serverID + 1; 
    }

}