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
  faCarBurst,
  faMoneyBillWave,
  faFileText,
  faCodePullRequest 
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
  faMoneyBillWave=faMoneyBillWave;
  faFileText=faFileText;
  faCodePullRequest =faCodePullRequest;


  onReceptionClick(){
    this.appService.setActiveMenu("قسم التسجيل والترخيص");
    this.router.navigate(['/reception']);
  }

  onInsuranceClick(){
    this.appService.setActiveMenu("قسم التأمين");
    this.router.navigate(['/insurance']);
  }

  onJobInOutClick(){
    this.appService.setActiveMenu("قسم الاستقبال – فتح أوامر الصيانة");
    this.router.navigate(['/jobinout']);
  }

  onAppoitmentClick(){
    this.appService.setActiveMenu("مركز الاتصال – حجر مواعيد الصيانة");
    this.router.navigate(['/appointment']);
  }

  onInvoiceClick(){
    this.appService.setActiveMenu("ملخص الفاتورة");
    this.router.navigate(['/invoice']);
  }

  onFleetReqClick(){
    this.appService.setActiveMenu("ملخص طلبات الأسطول");
    this.router.navigate(['/fleetreq']);
  }

}
