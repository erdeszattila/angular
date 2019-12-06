import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Testerino!'}, {
    type: 'blueprint',
    name: 'TestBP',
    content: 'BP!'
  }];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bpData: {bpName: string, bpContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bpData.bpName,
      content: bpData.bpContent
    });
  }
}
