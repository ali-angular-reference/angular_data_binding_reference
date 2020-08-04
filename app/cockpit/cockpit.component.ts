import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @output means that were passing the event outa the component
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput){
    // these vals are binded to the dom
    this.serverCreated.emit({
      serverName:serverNameInput,
      serverContent:this.newServerContent})
  }

  onAddBlueprint(serverNameInput){
    this.blueprintCreated.emit({serverName:serverNameInput,
      serverContent:this.newServerContent})
  }
}
