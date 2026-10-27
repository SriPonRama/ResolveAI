export interface MockCase {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  type: "item_not_received" | "damaged_item" | "unauthorised" | "significantly_not_as_described";
  source: "complaint" | "dispute";
  state: "RECEIVED" | "CLASSIFIED" | "EVIDENCE_GATHERED" | "DECIDED" | "AUTO_EXECUTED" | "PENDING_APPROVAL" | "EXECUTED" | "CLOSED";
  amount: number;
  currency: string;
  openedAt: string;
  dueAt: string;
  urgency: "low" | "medium" | "high";
  recommendedAction: "AUTO_REFUND" | "REQUIRE_APPROVAL" | "DEFEND_DISPUTE" | "MAKE_OFFER" | "DENY";
  riskScore: number; // 0 - 100
  riskSignals: Array<{ name: string; score: number; details: string }>;
  evidencePack: {
    orderDate: string;
    items: Array<{ name: string; sku: string; price: number; quantity: number }>;
    carrier: string;
    trackingNumber: string;
    carrierStatus: string;
    lastCarrierScan: string;
    paypalCaptureId: string;
    paypalStatus: string;
    customerHistory: {
      totalOrders: number;
      refunds90d: number;
      disputes90d: number;
      isBlocked: boolean;
    };
    customerMessage: string;
    photoUrls?: string[];
  };
  ruleTrace: {
    ruleId: string;
    ruleName: string;
    gate: "AUTO_EXECUTE" | "REQUIRE_APPROVAL" | "DENY";
    reason: string;
  };
  costAnalysis: {
    refundCost: number;
    offerCost: number;
    defendCost: number;
    expectedSavings: number;
  };
}

export const MOCK_CASES: MockCase[] = [
  {
    id: "CASE-1001",
    orderNumber: "ORD-89421",
    customerName: "Sarah Jenkins",
    customerEmail: "sarah.jenkins@example.com",
    type: "item_not_received",
    source: "complaint",
    state: "AUTO_EXECUTED",
    amount: 89.00,
    currency: "USD",
    openedAt: "2026-10-26T14:32:00Z",
    dueAt: "2026-10-28T14:32:00Z",
    urgency: "high",
    recommendedAction: "AUTO_REFUND",
    riskScore: 12,
    riskSignals: [
      { name: "Carrier Stalled", score: 5, details: "USPS tracking shows no scans for 8 consecutive days." },
      { name: "Customer History", score: 0, details: "First-time refund request in 3 years of purchasing." },
      { name: "Order Match", score: 0, details: "Verified matching PayPal capture and order address." },
      { name: "Amount Under Cap", score: 7, details: "$89.00 is well below the $150 auto-refund threshold." }
    ],
    evidencePack: {
      orderDate: "2026-10-15",
      items: [{ name: "Wireless Ergonomic Keyboard", sku: "KB-ERG-01", price: 89.00, quantity: 1 }],
      carrier: "USPS",
      trackingNumber: "9400111899223344556677",
      carrierStatus: "Stalled (No movement since Oct 18)",
      lastCarrierScan: "2026-10-18 04:12 PM - Regional Facility, Chicago IL",
      paypalCaptureId: "SIM-CAP-789102",
      paypalStatus: "COMPLETED",
      customerHistory: {
        totalOrders: 6,
        refunds90d: 0,
        disputes90d: 0,
        isBlocked: false
      },
      customerMessage: "Hi, I ordered this over 10 days ago and the tracking has not updated in over a week. The package appears to be lost in transit. Could you please check and issue a refund or send a replacement?"
    },
    ruleTrace: {
      ruleId: "RULE-LOST-PKG",
      ruleName: "Auto-refund lost packages below $150 with stalled carrier scan > 6 days",
      gate: "AUTO_EXECUTE",
      reason: "Carrier confirmed stalled for 8 days; customer has 0 prior refunds; order amount ($89.00) is under $150 cap."
    },
    costAnalysis: {
      refundCost: 89.00,
      offerCost: 89.00,
      defendCost: 104.00, // Includes $15 dispute fee risk
      expectedSavings: 15.00
    }
  },
  {
    id: "CASE-1002",
    orderNumber: "ORD-89422",
    customerName: "David Miller",
    customerEmail: "david.m@example.com",
    type: "damaged_item",
    source: "complaint",
    state: "PENDING_APPROVAL",
    amount: 145.50,
    currency: "USD",
    openedAt: "2026-10-27T08:15:00Z",
    dueAt: "2026-10-29T08:15:00Z",
    urgency: "medium",
    recommendedAction: "REQUIRE_APPROVAL",
    riskScore: 48,
    riskSignals: [
      { name: "Visual Damage Confirmed", score: 15, details: "Vision model identified cracked ceramic casing." },
      { name: "Customer Refund Frequency", score: 25, details: "1 previous refund claim in past 90 days." },
      { name: "High Item Value", score: 8, details: "Value is near the $150 automated threshold." }
    ],
    evidencePack: {
      orderDate: "2026-10-22",
      items: [{ name: "Handmade Ceramic Pour-over Set", sku: "CER-POUR-09", price: 145.50, quantity: 1 }],
      carrier: "FedEx",
      trackingNumber: "782944019283",
      carrierStatus: "Delivered",
      lastCarrierScan: "2026-10-25 11:30 AM - Front Porch",
      paypalCaptureId: "SIM-CAP-789103",
      paypalStatus: "COMPLETED",
      customerHistory: {
        totalOrders: 3,
        refunds90d: 1,
        disputes90d: 0,
        isBlocked: false
      },
      customerMessage: "The box arrived crushed on one corner, and when I opened it, the ceramic dripper was cracked down the middle. Please see the photo attached.",
      photoUrls: ["https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"]
    },
    ruleTrace: {
      ruleId: "RULE-PHOTO-DAMAGE",
      ruleName: "Damaged item claim requires human review if prior refund exists or score > 35",
      gate: "REQUIRE_APPROVAL",
      reason: "Customer has 1 prior refund in past 90 days. Human approval required before refund execution."
    },
    costAnalysis: {
      refundCost: 145.50,
      offerCost: 72.75, // Partial 50% replacement offer
      defendCost: 160.50,
      expectedSavings: 72.75
    }
  },
  {
    id: "CASE-1003",
    orderNumber: "ORD-89419",
    customerName: "Marcus Vance",
    customerEmail: "marcus.v@example.com",
    type: "item_not_received",
    source: "dispute",
    state: "DECIDED",
    amount: 199.00,
    currency: "USD",
    openedAt: "2026-10-25T19:00:00Z",
    dueAt: "2026-10-31T23:59:59Z",
    urgency: "high",
    recommendedAction: "DEFEND_DISPUTE",
    riskScore: 22,
    riskSignals: [
      { name: "Delivery Signature on File", score: 0, details: "Carrier GPS and customer signature match shipping address." },
      { name: "Direct PayPal Dispute Opened", score: 20, details: "Customer bypassed store contact and opened dispute directly." },
      { name: "PayPal Seller Protection Eligible", score: 2, details: "Proof of delivery qualifies under Seller Protection policy." }
    ],
    evidencePack: {
      orderDate: "2026-10-12",
      items: [{ name: "Noise Cancelling Studio Headphones", sku: "HP-PRO-88", price: 199.00, quantity: 1 }],
      carrier: "UPS",
      trackingNumber: "1Z9999999999999999",
      carrierStatus: "Delivered (Signed by M. Vance)",
      lastCarrierScan: "2026-10-16 02:45 PM - Residential Doorstep",
      paypalCaptureId: "SIM-CAP-789099",
      paypalStatus: "DISPUTED",
      customerHistory: {
        totalOrders: 1,
        refunds90d: 0,
        disputes90d: 1,
        isBlocked: false
      },
      customerMessage: "Buyer filed dispute directly with PayPal claiming package never arrived."
    },
    ruleTrace: {
      ruleId: "RULE-DISPUTE-DEFEND",
      ruleName: "Defend INR disputes when valid tracking + signature confirms delivery to buyer address",
      gate: "REQUIRE_APPROVAL",
      reason: "UPS tracking shows successful delivery with signature matching buyer name. Recommend submitting evidence."
    },
    costAnalysis: {
      refundCost: 199.00,
      offerCost: 199.00,
      defendCost: 15.00, // Dispute fee only if won/protected
      expectedSavings: 184.00
    }
  }
];

export const MOCK_DISPUTES = [
  {
    id: "PP-D-5501",
    caseId: "CASE-1003",
    orderNumber: "ORD-89419",
    buyerName: "Marcus Vance",
    amount: "$199.00 USD",
    reason: "ITEM_NOT_RECEIVED",
    stage: "CHARGEBACK",
    status: "UNDER_REVIEW",
    dueInHours: 72,
    dueDate: "Oct 31, 2026",
    sellerProtectionEligible: true,
    evidenceChecklist: [
      { label: "Valid Tracking Number (UPS 1Z999999...)", status: "have" },
      { label: "Carrier Delivery Timestamp & GPS", status: "have" },
      { label: "Proof of Delivery with Signature", status: "have" },
      { label: "Original Order Confirmation & Invoice", status: "have" },
      { label: "Merchant Explanation Note", status: "missing" }
    ]
  },
  {
    id: "PP-D-5502",
    caseId: "CASE-1005",
    orderNumber: "ORD-89390",
    buyerName: "Elena Rostova",
    amount: "$64.00 USD",
    reason: "SIGNIFICANTLY_NOT_AS_DESCRIBED",
    stage: "INQUIRY",
    status: "WAITING_FOR_SELLER_RESPONSE",
    dueInHours: 120,
    dueDate: "Nov 02, 2026",
    sellerProtectionEligible: false,
    evidenceChecklist: [
      { label: "Product Listing Specification", status: "have" },
      { label: "Serial Number Verification", status: "missing" },
      { label: "Return Shipping Label Offered", status: "missing" }
    ]
  }
];

export const MOCK_AUDIT_LOGS = [
  {
    id: "AUD-901",
    timestamp: "10 mins ago",
    actor: "ResolveAI Policy Engine",
    event: "RULE_EVALUATED",
    entity: "CASE-1001",
    details: "Fired RULE-LOST-PKG. Gate: AUTO_EXECUTE. Risk Score: 12/100."
  },
  {
    id: "AUD-902",
    timestamp: "9 mins ago",
    actor: "ResolveAI Executor (Mock)",
    event: "SIMULATED_REFUND_EXECUTED",
    entity: "CASE-1001",
    details: "Executed full refund of $89.00 USD. Mock Refund ID: SIM-REF-449102."
  },
  {
    id: "AUD-903",
    timestamp: "8 mins ago",
    actor: "ResolveAI Comms",
    event: "CUSTOMER_EMAIL_DISPATCHED",
    entity: "CASE-1001",
    details: "Sent apology & refund confirmation email to sarah.jenkins@example.com."
  },
  {
    id: "AUD-904",
    timestamp: "45 mins ago",
    actor: "Elena Rostova (Customer)",
    event: "COMPLAINT_SUBMITTED",
    entity: "CASE-1002",
    details: "Uploaded photo evidence: damaged_ceramic.jpg. Stored in /uploads/."
  },
  {
    id: "AUD-905",
    timestamp: "3 hours ago",
    actor: "PayPal Webhook Ingest",
    event: "DISPUTE_CREATED",
    entity: "PP-D-5501",
    details: "Received event CUSTOMER.DISPUTE.CREATED from PayPal simulator."
  }
];
