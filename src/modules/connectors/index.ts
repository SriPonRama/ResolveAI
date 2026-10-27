export * from "./paypal";
export * from "./carrier";
export * from "./store";

export interface EvidencePack {
  caseId: string;
  orderNumber: string;
  customerHistory: {
    refundCount90d: number;
    disputeCount90d: number;
    isBlocked: boolean;
  };
  tracking?: import("./carrier").TrackingResult;
  paypal?: import("./paypal").PayPalOrderDetails;
  assembledAt: string;
}
