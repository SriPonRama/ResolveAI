/**
 * Store DB connector (orders, invoices, customer history).
 */
export interface StoreOrder {
  orderNumber: string;
  paypalOrderId?: string;
  captureId?: string;
  customerEmail: string;
  amount: number;
  currency: string;
  status: string;
  items: Array<{
    sku: string;
    name: string;
    quantity: number;
    unitPrice: number;
  }>;
}
