export class SummaryTotals {
    constructor(
        public TotalTransCount: number,
        public TotalTranTypes: number,
        public TotalInvoiceValue: number,
        public TotalUsers: number,  
        public TotalOfflinePaymentsValue: number,
        public TotalOnlinePaymentsValue : number,       
        ) { }
}