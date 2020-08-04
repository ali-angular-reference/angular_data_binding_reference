import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @output means that were passing the event outa the component
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  // newServerContent = '';
  // newServerName = '';
  // of type elementref
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput){
    // these vals are binded to the dom
    // console.log(this.serverContentInput.nativeElement.value)
    this.serverCreated.emit({
      serverName:serverNameInput,
      serverContent:this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverNameInput){
    this.blueprintCreated.emit({serverName:serverNameInput,
      serverContent:this.serverContentInput.nativeElement.value})
  }
}
