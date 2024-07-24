import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppserviceService } from '../appservice.service';

import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
  faCalendarCheck,
  faCarBurst
} from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  constructor(private router:Router,private appService:AppserviceService){}

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faCalendarCheck=faCalendarCheck;
  faCarBurst=faCarBurst;


  onReceptionClick(){
    this.appService.setActiveMenu("استقبال");
    this.router.navigate(['/reception']);
  }

  onInsuranceClick(){
    this.appService.setActiveMenu("تأمين");
    this.router.navigate(['/insurance']);
  }

  onJobInOutClick(){
    this.appService.setActiveMenu("ملخص الوظائف");
    this.router.navigate(['/jobinout']);
  }

  onAppoitmentClick(){
    this.appService.setActiveMenu("تعيينات");
    this.router.navigate(['/appointment']);
  }

}
