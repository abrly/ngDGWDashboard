import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { SalesByMonthComponent } from '../sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { TopThreeProductsComponent } from '../top-three-products/top-three-products.component';
import { LastFewTransactionsComponent } from '../last-few-transactions/last-few-transactions.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent,SalesByMonthComponent,SalesByCategoryComponent,LastFewTransactionsComponent,TopThreeProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


}
