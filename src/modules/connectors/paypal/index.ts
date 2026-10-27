/**
 * PayPal connector interface & types.
 * Connectors are read-only; writes are strictly delegated to the Executor.
 */
export interface PayPalOrderDetails {
  id: string;
  status: string;
  amount: number;
  currency: string;
  captureId?: string;
}

export interface PayPalDisputeDetails {
  id: string;
  status: string;
  stage: string;
  reason: string;
  disputeAmount: {
    currencyCode: string;
    value: string;
  };
  sellerResponseDueDate?: string;
  links: Array<{ href: string; rel: string; method: string }>;
}
