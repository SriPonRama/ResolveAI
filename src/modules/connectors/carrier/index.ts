/**
 * Mock carrier tracking connector.
 */
export interface TrackingEvent {
  status: string;
  subStatus?: string;
  location?: string;
  timestamp: string;
  description: string;
}

export interface TrackingResult {
  carrier: string;
  trackingNumber: string;
  status: "in_transit" | "delivered" | "exception" | "stalled";
  lastScanDate: string;
  events: TrackingEvent[];
}
