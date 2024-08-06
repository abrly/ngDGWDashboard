import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderComponent } from "./order/order.component";
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule,HeaderComponent,SideNavComponent,MainComponent,RouterOutlet, OrderComponent, ChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})

export class AppComponent {
  title = 'ngDGWDashboard';

}
