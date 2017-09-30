import { Component} from '@angular/core';
import { flyIn } from 'animations/fly-in';

@Component({
  templateUrl: './stop-parent-click.component.html',
  animations: [
    flyIn
  ]
})
export class StopParentClickDemoComponent {

  constructor(){}

}
