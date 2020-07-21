import { Component } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name: 'testserver',content: 'stinky poopies'}];

  // executed after button click
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
