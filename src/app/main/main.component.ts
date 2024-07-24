import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { MiddleLeftComponent } from '../middleleft/middleleft.component';
import { MiddleRightComponent } from '../middleright/middleright.component';
import { BottomRightComponent } from '../bottomright/bottomright.component';
import { BottomLeftComponent } from '../bottomleft/bottomleft.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent,MiddleLeftComponent,MiddleRightComponent,BottomLeftComponent,BottomRightComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


}
