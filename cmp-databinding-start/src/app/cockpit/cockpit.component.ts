import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{bpName: string, bpContent: string}>();
  @ViewChild('newServerContent') serverContent: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(serverNameInput) {
    this.serverCreated.emit({serverName: serverNameInput, serverContent: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(serverNameInput) {
    this.blueprintCreated.emit({bpName: serverNameInput, bpContent: this.serverContent.nativeElement.value});
  }
}
