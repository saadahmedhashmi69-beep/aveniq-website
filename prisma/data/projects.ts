// Portfolio seed data.
//
// TRUTHFULNESS RULES — read before editing this file:
// - Exactly one entry may carry status "VERIFIED": siraj-din-electronics.
//   Its content must stay factually restricted to what's actually known
//   about that real project (see the original lib/data/case-studies.ts
//   history) — no invented metrics, dates, team size, or stack.
// - Every other entry is status "CONCEPT": an illustrative example of the
//   kind of system Aveniq designs, not a claim that it was built for a
//   real client. companyName uses an obvious placeholder
//   ("[COMPANY NAME]" + a one-word descriptor so 28 rows stay
//   distinguishable in an admin list) rather than a real or
//   real-sounding business name.
// - No fabricated revenue, conversion, traffic, or adoption figures
//   anywhere. Outcomes/objectives describe operational capability
//   ("centralizes X into one workflow"), never invented results.
// - No real named third-party vendors are claimed as integration
//   partners; integrations are described by category only.
// - Timelines are stated as illustrative ranges, not claimed facts about
//   a delivered engagement.

export interface ProjectSeedInput {
  slug: string;
  status: "VERIFIED" | "CONCEPT";
  companyName: string;
  projectName: string;
  category: string;
  industry: string;
  type: string;
  summary: string;
  overview: string;
  challenge: string[];
  objectives: string[];
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  customerExperience: string[];
  adminExperience: string[];
  workflows: string[];
  integrations: string[];
  security: string[];
  responsiveExperience: string;
  designApproach: string;
  outcomes: string[];
  technology: string[];
  projectScope: string;
  deliverables: string[];
  timeline: string;
  galleryAvailable: boolean;
  relatedProjects: string[];
  ctaText: string;
  featured: boolean;
  order: number;
}

const defaultCta = "Discuss a system like this for your business.";

export const projectSeeds: ProjectSeedInput[] = [
  {
    slug: "siraj-din-electronics",
    status: "VERIFIED",
    companyName: "Siraj Din Electronics",
    projectName: "Installment Commerce Platform",
    category: "Business Software & Custom Systems",
    industry: "Electronics & appliance retail",
    type: "Digital commerce & installment management platform",
    summary:
      "A digital catalogue and installment-management system built for an electronics and appliance retailer that sells through both cash and installment purchases.",
    overview:
      "Siraj Din Electronics sells electronics and appliances through two purchase paths: cash and installment. Installment purchasing — pricing, calculating plans, and handling customer applications — is a significant part of how the business operates. The project brings the product catalogue, cash and installment pricing, and the installment application process into a single digital system, with an administrative side to manage products and review applications.",
    challenge: [
      "Installment pricing, plan calculation, and application handling were not unified into one digital system.",
      "The business needed a single place to manage the product catalogue alongside both purchase paths.",
    ],
    objectives: [
      "Bring cash and installment pricing into one consistent customer-facing catalogue.",
      "Give customers a self-service way to calculate and apply for an installment plan.",
      "Give staff a structured way to manage products, plans, and applications.",
    ],
    solution:
      "A customer-facing catalogue and installment calculator paired with an administrative dashboard for product, plan, and application management.",
    architecture: [
      "Customer-facing catalogue and application flow",
      "Installment calculation logic (down payment, duration)",
      "Administrative dashboard for products and plans",
      "Application review and status-tracking workflow",
    ],
    keyFeatures: [
      "Product catalogue browsing and product detail pages",
      "Cash pricing display",
      "Installment pricing display",
      "Installment calculator with down payment and duration options",
      "Installment application workflow",
      "Submitting customer application information",
    ],
    customerExperience: [
      "Browse the product catalogue and view product details",
      "See cash and installment pricing side by side",
      "Use the installment calculator to model down payment and duration",
      "Submit an installment application directly from a product",
    ],
    adminExperience: [
      "Admin dashboard",
      "Product management",
      "Installment plan management",
      "Application management with status tracking",
      "Remarks and status workflow on applications",
      "Inquiry management",
    ],
    workflows: [
      "Customer submits an installment application from the catalogue",
      "Staff review the application and update its status",
      "Remarks are attached to applications as they move through review",
    ],
    integrations: ["None published — this project does not claim any third-party integrations."],
    security: [
      "Administrative functions are separated from the public catalogue",
      "Application status and remarks are only editable from the admin side",
    ],
    responsiveExperience:
      "The catalogue and application flow are usable on both desktop and mobile, since customers browse and apply from either.",
    designApproach:
      "The catalogue is designed around clear, side-by-side cash and installment pricing so the purchase decision is straightforward.",
    outcomes: [
      "Centralized product management in one system",
      "Clear, consistent presentation of cash and installment pricing",
      "A structured, digital installment application process",
      "Better operational visibility into applications and their status",
    ],
    technology: [
      "The specific technology stack used to build the Siraj Din Electronics platform is not yet published here — it will be added once confirmed.",
    ],
    projectScope:
      "Product catalogue, installment calculator and application flow, and an administrative dashboard for products, plans, applications, and inquiries.",
    deliverables: [
      "Customer-facing catalogue with cash and installment pricing",
      "Installment calculator and application flow",
      "Administrative dashboard for products, plans, and applications",
    ],
    timeline: "Not published — see technology note above.",
    galleryAvailable: false,
    relatedProjects: [],
    ctaText: defaultCta,
    featured: true,
    order: 0,
  },

  {
    slug: "concept-auto-parts-b2b-ordering",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Auto Parts",
    projectName: "B2B Ordering & Inventory Portal",
    category: "Business Software & Custom Systems",
    industry: "Auto parts distribution",
    type: "B2B ordering portal",
    summary:
      "A concept for a wholesale ordering portal that lets repair shops browse live stock and place orders directly, replacing phone-and-fax ordering.",
    overview:
      "This concept represents the kind of system Aveniq designs for distributors whose business customers currently order by phone or fax. It models a self-service ordering portal tied to real-time stock levels, order history, and account-specific pricing.",
    challenge: [
      "Phone and fax ordering is slow and error-prone at volume, and gives the distributor no digital record of what was requested versus fulfilled.",
      "Repair shops can't see live stock before calling, so orders are placed against parts that may already be out.",
    ],
    objectives: [
      "Let business customers browse live inventory and place orders without a phone call.",
      "Give each account its own pricing and order history.",
      "Give staff one place to manage incoming orders and stock levels.",
    ],
    solution:
      "An account-based ordering portal showing live stock and account pricing, backed by an admin system for order fulfillment and inventory management.",
    architecture: [
      "Customer ordering portal with account-based catalogue views",
      "Inventory and pricing data layer",
      "Order management and fulfillment workflow",
      "Admin dashboard for stock and account administration",
    ],
    keyFeatures: [
      "Searchable parts catalogue with live stock indicators",
      "Account-specific pricing",
      "Reorder from order history",
      "Order status tracking",
    ],
    customerExperience: [
      "Search or browse parts by vehicle, brand, or part number",
      "See live stock and account pricing before ordering",
      "Reorder previous purchases in a few clicks",
      "Track order status from submission to fulfillment",
    ],
    adminExperience: [
      "Incoming order queue with fulfillment status",
      "Inventory and stock-level management",
      "Account and pricing tier management",
      "Order history and reporting",
    ],
    workflows: [
      "Customer places an order against live stock",
      "Staff confirm and fulfill the order, updating stock",
      "Customer is notified as order status changes",
    ],
    integrations: ["Accounting/export category", "SMS or email notification category"],
    security: [
      "Account-based access so pricing and history stay private per customer",
      "Role-based staff permissions for order and inventory management",
    ],
    responsiveExperience:
      "Designed mobile-first, since shop staff often order from the counter or a phone rather than a desk.",
    designApproach:
      "Dense, scannable catalogue layout prioritizing fast search over visual merchandising, matching how repair shops actually shop.",
    outcomes: [
      "Moves ordering off the phone and onto a self-service portal tied to live stock",
      "Gives every account its own pricing and a searchable order history",
      "Centralizes incoming orders into one fulfillment queue instead of scattered call notes",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL — typical of Aveniq's business-software builds."],
    projectScope: "Ordering portal, account/pricing management, and an admin fulfillment dashboard.",
    deliverables: ["B2B ordering portal", "Account and pricing administration", "Order fulfillment dashboard"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["siraj-din-electronics", "concept-wholesale-order-management"],
    ctaText: defaultCta,
    featured: false,
    order: 1,
  },

  {
    slug: "concept-clinic-scheduling",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Family Clinic",
    projectName: "Patient Scheduling & Records System",
    category: "Business Software & Custom Systems",
    industry: "Healthcare — outpatient clinic",
    type: "Scheduling & records system",
    summary:
      "A concept for a scheduling and lightweight records system for a small outpatient clinic juggling multiple providers and a paper appointment book.",
    overview:
      "This concept models what Aveniq would build for a clinic replacing a paper appointment book: provider-specific scheduling, patient records, and a front-desk view of the day.",
    challenge: [
      "A shared paper book makes it hard to see provider availability at a glance or avoid double-booking.",
      "Patient history lives in paper folders, so front-desk staff can't quickly confirm past visits.",
    ],
    objectives: [
      "Give front-desk staff a live view of provider availability.",
      "Let staff book, reschedule, and cancel appointments without conflicts.",
      "Keep basic patient records and visit history in one searchable place.",
    ],
    solution:
      "A calendar-based scheduling interface per provider, paired with searchable patient records and visit history.",
    architecture: [
      "Scheduling engine with per-provider calendars",
      "Patient record data layer",
      "Front-desk booking interface",
      "Admin/provider management",
    ],
    keyFeatures: [
      "Provider-specific calendars with conflict prevention",
      "Patient search and record lookup",
      "Visit history per patient",
      "Appointment reminders",
    ],
    customerExperience: [
      "Front-desk staff see all providers' availability on one screen",
      "Patients can be found by name or phone in seconds",
      "Booking a follow-up pre-fills the patient's known details",
    ],
    adminExperience: [
      "Provider schedule and availability management",
      "Patient record administration",
      "Daily/weekly appointment overview",
    ],
    workflows: [
      "Staff book an appointment against live provider availability",
      "Patient record is created or matched automatically",
      "Reminder is queued ahead of the appointment",
    ],
    integrations: ["SMS/email reminder category"],
    security: [
      "Patient records restricted to authenticated clinic staff",
      "Role separation between front-desk and provider access where relevant",
    ],
    responsiveExperience: "Usable on a front-desk desktop and on a tablet at a secondary check-in station.",
    designApproach: "A calendar-first layout so availability is the first thing staff see, not buried in a form.",
    outcomes: [
      "Centralized product management in one system",
      "Clear, consistent presentation of cash and installment pricing",
      "A structured, digital installment application process",
      "Better operational visibility into applications and their status",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Scheduling system, patient record lookup, and basic visit history.",
    deliverables: ["Scheduling application", "Patient record module", "Appointment reminder workflow"],
    timeline: "Illustrative scope: comparable systems typically run 6–10 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-veterinary-clinic", "concept-salon-booking"],
    ctaText: defaultCta,
    featured: false,
    order: 2,
  },

  {
    slug: "concept-furniture-custom-orders",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Furniture Co.",
    projectName: "Custom Order & Delivery Tracking",
    category: "Business Software & Custom Systems",
    industry: "Furniture retail & manufacturing",
    type: "Custom order tracking system",
    summary:
      "A concept for tracking custom furniture orders from measurement through production to delivery, for a retailer that builds to order.",
    overview:
      "Custom furniture orders pass through several stages — measurement, approval, production, and delivery — that are easy to lose track of on paper. This concept models a single system that follows each order through every stage.",
    challenge: [
      "Custom orders move through multiple hand-offs (sales, production, delivery) that are hard to track without a shared system.",
      "Customers have no visibility into where their order stands.",
    ],
    objectives: [
      "Track every custom order through a defined set of stages.",
      "Give staff a clear view of what's in production versus ready for delivery.",
      "Let customers check their order status without calling.",
    ],
    solution: "A staged order-tracking system with a customer-facing status lookup and an internal production board.",
    architecture: [
      "Order intake and specification capture",
      "Stage-based tracking engine (measured → approved → in production → ready → delivered)",
      "Customer status lookup",
      "Internal production board",
    ],
    keyFeatures: [
      "Order specification capture at intake",
      "Stage-based status tracking",
      "Customer order lookup by order number",
      "Production board grouped by stage",
    ],
    customerExperience: [
      "Look up an order by number to see its current stage",
      "Receive a notification as the order moves to the next stage",
    ],
    adminExperience: [
      "Production board showing every order by stage",
      "Move orders between stages with notes",
      "Delivery scheduling",
    ],
    workflows: [
      "Order is captured at intake with specifications",
      "Staff move the order through production stages",
      "Customer is notified at key stage changes",
    ],
    integrations: ["SMS/email notification category"],
    security: ["Staff-only production board", "Customer lookup limited to order number, not full account access"],
    responsiveExperience: "Production board optimized for a workshop tablet; customer lookup optimized for mobile.",
    designApproach: "A visible pipeline view (like a kanban board) so staff can see bottlenecks at a glance.",
    outcomes: [
      "Tracks every custom order through a defined production pipeline",
      "Gives customers self-service status lookup instead of a phone call",
      "Surfaces production bottlenecks on a shared floor board",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Order intake, stage tracking, production board, and customer status lookup.",
    deliverables: ["Order tracking system", "Production board", "Customer status lookup page"],
    timeline: "Illustrative scope: comparable systems typically run 6–10 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-construction-project-management", "concept-print-shop-job-tracking"],
    ctaText: defaultCta,
    featured: false,
    order: 3,
  },

  {
    slug: "concept-real-estate-crm",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Realty Group",
    projectName: "Property Listing & Lead CRM",
    category: "CRM & Customer Systems",
    industry: "Real estate",
    type: "Listings & lead management CRM",
    summary:
      "A concept CRM for a real estate agency to manage property listings alongside buyer and seller leads in one place.",
    overview:
      "Agencies often manage listings in one tool and leads in another (or a spreadsheet). This concept ties listings and leads together so an agent can see which leads are interested in which properties.",
    challenge: [
      "Listings and lead information live in separate tools, so agents can't easily see which leads match which properties.",
      "Follow-up on leads is inconsistent without a shared pipeline.",
    ],
    objectives: [
      "Manage listings and leads in one connected system.",
      "Give agents a sales pipeline shaped around buying and selling stages.",
      "Track follow-up tasks per lead.",
    ],
    solution: "A listings module linked to a lead pipeline, with follow-up tasks and per-lead activity history.",
    architecture: [
      "Listings management module",
      "Lead pipeline (stages: New, Contacted, Viewing, Offer, Closed)",
      "Task and follow-up engine",
      "Agent-facing dashboard",
    ],
    keyFeatures: [
      "Listing creation and status management",
      "Lead pipeline with drag-between-stage tracking",
      "Linking leads to specific listings of interest",
      "Follow-up task reminders",
    ],
    customerExperience: [
      "Agents see all active listings and their status in one view",
      "Leads are tracked through a clear pipeline, not a spreadsheet",
      "Follow-up tasks surface automatically as leads move stages",
    ],
    adminExperience: [
      "Team-wide pipeline visibility",
      "Listing performance overview (views, inquiries)",
      "Agent workload and task tracking",
    ],
    workflows: [
      "New lead is captured and linked to a listing of interest",
      "Agent moves the lead through pipeline stages",
      "Follow-up tasks are created automatically at key stages",
    ],
    integrations: ["Email/SMS notification category", "Calendar sync category"],
    security: ["Agent-level data access controls", "Admin oversight of the full pipeline"],
    responsiveExperience: "Mobile-friendly, since agents update leads from open houses and viewings.",
    designApproach: "A pipeline-first layout so the sales process is always visible, not hidden behind reports.",
    outcomes: [
      "Connects listings directly to the leads interested in them",
      "Replaces spreadsheet-based lead tracking with a defined sales pipeline",
      "Surfaces follow-up tasks automatically as leads move stages",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Listings module, lead pipeline, task tracking, and agent dashboard.",
    deliverables: ["Listings management module", "Lead pipeline CRM", "Task and follow-up system"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-car-dealership-crm", "concept-property-management-portal"],
    ctaText: defaultCta,
    featured: true,
    order: 4,
  },

  {
    slug: "concept-restaurant-pos-inventory",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Kitchen Group",
    projectName: "Multi-Location POS & Inventory Dashboard",
    category: "Dashboards & Admin Systems",
    industry: "Restaurant & food service",
    type: "Multi-location operations dashboard",
    summary:
      "A concept dashboard giving a multi-location restaurant group one view of sales and inventory across branches.",
    overview:
      "This concept models a central dashboard that pulls sales and stock data from each branch, so ownership doesn't have to call each location for a daily summary.",
    challenge: [
      "Each branch tracks its own sales and inventory, with no combined view for ownership.",
      "Low-stock issues at one branch aren't visible until it's already a problem.",
    ],
    objectives: [
      "Give ownership one dashboard covering every branch.",
      "Surface low-stock items before they run out.",
      "Compare branch performance on the same screen.",
    ],
    solution: "A central dashboard aggregating per-branch sales and inventory, with low-stock alerts.",
    architecture: [
      "Per-branch data intake",
      "Aggregation and reporting layer",
      "Central dashboard",
      "Alerting engine for stock thresholds",
    ],
    keyFeatures: [
      "Cross-branch sales overview",
      "Per-branch and combined inventory views",
      "Low-stock threshold alerts",
      "Branch comparison reporting",
    ],
    customerExperience: [
      "Ownership opens one dashboard instead of calling each branch",
      "Managers see their own branch plus how it compares",
    ],
    adminExperience: [
      "Branch and user management",
      "Stock threshold configuration",
      "Historical reporting across date ranges",
    ],
    workflows: [
      "Branch records daily sales and stock counts",
      "Dashboard aggregates data centrally",
      "Alerts fire when stock crosses a set threshold",
    ],
    integrations: ["POS data category", "SMS/email alert category"],
    security: ["Role-based access separating branch managers from ownership-level views"],
    responsiveExperience: "Dashboard designed for desktop review, with a simplified mobile view for quick checks.",
    designApproach: "Chart-forward layout prioritizing at-a-glance comparison over dense tables.",
    outcomes: [
      "Gives ownership one dashboard covering every branch instead of daily phone check-ins",
      "Surfaces low-stock issues before they become a service problem",
      "Makes branch performance comparable on a single screen",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Cross-branch dashboard, inventory aggregation, and alerting.",
    deliverables: ["Multi-location dashboard", "Inventory alerting system", "Branch comparison reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–14 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-grocery-multi-branch-inventory", "concept-pharmacy-inventory"],
    ctaText: defaultCta,
    featured: false,
    order: 5,
  },

  {
    slug: "concept-fitness-membership",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Fitness Studio",
    projectName: "Membership & Class Booking Platform",
    category: "Applications",
    industry: "Fitness & wellness",
    type: "Membership & booking application",
    summary:
      "A concept platform for a fitness studio to manage memberships and let members book classes online instead of by phone or in person.",
    overview:
      "This concept models self-service class booking tied to membership status, plus a staff-facing view of class capacity and attendance.",
    challenge: [
      "Class bookings by phone or walk-in make it hard to manage capacity.",
      "Membership status and payment history aren't connected to the booking process.",
    ],
    objectives: [
      "Let members book and cancel classes online.",
      "Tie bookings to active membership status.",
      "Give staff visibility into class capacity and attendance.",
    ],
    solution: "A member-facing booking app connected to membership records and a staff capacity dashboard.",
    architecture: [
      "Member account & membership status layer",
      "Class scheduling and capacity engine",
      "Booking interface",
      "Staff attendance dashboard",
    ],
    keyFeatures: [
      "Class schedule browsing with live capacity",
      "Book/cancel with membership validation",
      "Waitlist for full classes",
      "Attendance tracking for staff",
    ],
    customerExperience: [
      "Browse the week's classes and available spots",
      "Book a spot in seconds, or join a waitlist",
      "See upcoming bookings in one place",
    ],
    adminExperience: [
      "Class schedule management",
      "Membership administration",
      "Attendance and capacity reporting",
    ],
    workflows: [
      "Member books a class against live capacity",
      "Waitlisted members are notified if a spot opens",
      "Staff check members in at class time",
    ],
    integrations: ["Payment processing category", "SMS/email notification category"],
    security: ["Booking restricted to active members", "Staff-only attendance and membership administration"],
    responsiveExperience: "Mobile-first, since most members book from their phone.",
    designApproach: "A simple weekly schedule view designed for fast, low-friction booking.",
    outcomes: [
      "Moves class booking online, tied automatically to membership status",
      "Reduces phone-based booking and manual capacity tracking",
      "Gives staff a live view of attendance and class capacity",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Membership records, class booking, waitlisting, and staff attendance tracking.",
    deliverables: ["Booking application", "Membership management module", "Attendance dashboard"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-salon-booking", "concept-coworking-membership"],
    ctaText: defaultCta,
    featured: false,
    order: 6,
  },

  {
    slug: "concept-logistics-fleet-tracking",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Logistics",
    projectName: "Fleet & Delivery Tracking System",
    category: "Dashboards & Admin Systems",
    industry: "Logistics & delivery",
    type: "Fleet operations dashboard",
    summary:
      "A concept dashboard for a delivery company to track vehicles, drivers, and delivery status from dispatch to drop-off.",
    overview:
      "This concept models a dispatch-facing dashboard showing active deliveries, driver assignment, and status, replacing radio check-ins and a whiteboard.",
    challenge: [
      "Dispatch relies on radio check-ins to know where a delivery stands.",
      "There's no digital record of delivery status changes over time.",
    ],
    objectives: [
      "Give dispatch a live view of every active delivery.",
      "Track status changes from pickup to drop-off.",
      "Assign drivers and vehicles from one screen.",
    ],
    solution: "A dispatch dashboard tracking deliveries through defined status stages, tied to driver and vehicle assignment.",
    architecture: [
      "Delivery intake and assignment layer",
      "Status-tracking engine (assigned → picked up → in transit → delivered)",
      "Dispatch dashboard",
      "Driver-facing status update interface",
    ],
    keyFeatures: [
      "Live delivery board grouped by status",
      "Driver and vehicle assignment",
      "Status updates from a driver-facing view",
      "Delivery history and reporting",
    ],
    customerExperience: [
      "Dispatch sees every active delivery and its status at a glance",
      "Drivers update status from a simple mobile view",
    ],
    adminExperience: [
      "Driver and vehicle roster management",
      "Delivery history and performance reporting",
      "Route/assignment overview",
    ],
    workflows: [
      "Dispatch assigns a delivery to a driver and vehicle",
      "Driver updates status as the delivery progresses",
      "Completed deliveries are logged to history",
    ],
    integrations: ["SMS notification category", "Mapping/location category"],
    security: ["Driver access limited to their own assigned deliveries"],
    responsiveExperience: "Dispatch dashboard for desktop; driver status updates designed mobile-first.",
    designApproach: "A board-style layout grouping deliveries by status, built for a fast-moving dispatch desk.",
    outcomes: [
      "Replaces radio check-ins with a live dispatch board",
      "Creates a digital record of delivery status changes over time",
      "Lets dispatch assign drivers and vehicles from one screen",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Dispatch dashboard, driver assignment, and status tracking through delivery.",
    deliverables: ["Dispatch dashboard", "Driver status-update interface", "Delivery history reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-freight-shipment-tracking", "concept-home-services-dispatch"],
    ctaText: defaultCta,
    featured: false,
    order: 7,
  },

  {
    slug: "concept-law-firm-case-management",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Legal",
    projectName: "Case Management & Client Portal",
    category: "Business Software & Custom Systems",
    industry: "Legal services",
    type: "Case management system",
    summary:
      "A concept case management system for a small law firm, with a client portal for document sharing and case status.",
    overview:
      "This concept models a firm-side case tracking system paired with a limited client portal, so clients can check case status without a call to the office.",
    challenge: [
      "Case files and correspondence are managed manually per matter, with no shared view across the firm.",
      "Clients call for status updates that staff have to look up manually.",
    ],
    objectives: [
      "Track every case's status, deadlines, and documents in one system.",
      "Give clients limited self-service access to their own case status.",
      "Keep a clear audit trail of case activity.",
    ],
    solution: "An internal case tracking system with deadline reminders, paired with a scoped client portal.",
    architecture: [
      "Case record and document management layer",
      "Deadline and task tracking",
      "Internal case dashboard",
      "Scoped client portal (own-case access only)",
    ],
    keyFeatures: [
      "Case record creation and status tracking",
      "Document upload and organization per case",
      "Deadline reminders",
      "Client-facing case status view",
    ],
    customerExperience: [
      "Clients log in to see their case status and shared documents",
      "No need to call for a basic status update",
    ],
    adminExperience: [
      "Case dashboard across all active matters",
      "Deadline and task tracking per case",
      "Document management per case",
    ],
    workflows: [
      "Case is opened and assigned to staff",
      "Documents and status updates are logged as the case progresses",
      "Client portal reflects status changes automatically",
    ],
    integrations: ["Document storage category", "Email notification category"],
    security: [
      "Client portal access strictly scoped to that client's own case",
      "Internal case data restricted to authorized staff",
    ],
    responsiveExperience: "Internal dashboard for desktop use; client portal usable on mobile.",
    designApproach: "A calm, low-noise interface, appropriate for a professional-services context.",
    outcomes: [
      "Gives every case a single tracked record instead of scattered files",
      "Reduces status-check calls with a scoped client portal",
      "Keeps deadlines and documents attached directly to each matter",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Internal case tracking, document management, deadlines, and a scoped client portal.",
    deliverables: ["Case management dashboard", "Client portal", "Deadline tracking system"],
    timeline: "Illustrative scope: comparable systems typically run 10–14 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-insurance-claims-management", "concept-nonprofit-donor-management"],
    ctaText: defaultCta,
    featured: false,
    order: 8,
  },

  {
    slug: "concept-wholesale-order-management",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Wholesale",
    projectName: "B2B Order Management System",
    category: "Business Software & Custom Systems",
    industry: "Wholesale distribution",
    type: "Order management system",
    summary:
      "A concept order management system for a wholesale distributor handling large volumes of recurring B2B orders.",
    overview:
      "This concept models a system for distributors juggling recurring orders from many retail accounts, replacing spreadsheets and email order forms.",
    challenge: [
      "Recurring orders are tracked in spreadsheets and email threads, which don't scale as accounts grow.",
      "It's hard to see which accounts are overdue for a reorder.",
    ],
    objectives: [
      "Centralize order intake from all accounts.",
      "Support recurring/standing orders.",
      "Give staff visibility into order status and fulfillment.",
    ],
    solution: "An account-based order system supporting standing orders, with a fulfillment queue for staff.",
    architecture: [
      "Account and standing-order management",
      "Order intake and fulfillment queue",
      "Reporting layer",
      "Admin dashboard",
    ],
    keyFeatures: [
      "Account-based ordering with standing/recurring order support",
      "Fulfillment queue with status tracking",
      "Reorder reminders for accounts",
      "Order history per account",
    ],
    customerExperience: [
      "Accounts place or repeat orders without an email or phone call",
      "Standing orders reduce repetitive manual entry",
    ],
    adminExperience: [
      "Fulfillment queue across all accounts",
      "Standing order configuration per account",
      "Order history and reporting",
    ],
    workflows: [
      "Account places or triggers a standing order",
      "Order enters the fulfillment queue",
      "Staff update status through to delivery",
    ],
    integrations: ["Accounting/export category"],
    security: ["Account-scoped access to order history and pricing"],
    responsiveExperience: "Desktop-first for staff fulfillment; mobile-friendly for account ordering.",
    designApproach: "A queue-based layout so fulfillment priority is obvious at a glance.",
    outcomes: [
      "Centralizes recurring B2B orders that previously lived in spreadsheets and email",
      "Supports standing orders to reduce repetitive manual entry",
      "Gives staff one fulfillment queue across all accounts",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Account management, standing orders, fulfillment queue, and reporting.",
    deliverables: ["Order management system", "Standing order module", "Fulfillment dashboard"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-auto-parts-b2b-ordering", "concept-textile-production-workflow"],
    ctaText: defaultCta,
    featured: false,
    order: 9,
  },

  {
    slug: "concept-property-management-portal",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Properties",
    projectName: "Tenant & Maintenance Portal",
    category: "Applications",
    industry: "Property management",
    type: "Tenant portal & maintenance tracking",
    summary:
      "A concept portal for a property management company to handle tenant maintenance requests and track work through to completion.",
    overview:
      "This concept models a tenant-facing portal for submitting maintenance requests, connected to an internal tracking board for the maintenance team.",
    challenge: [
      "Maintenance requests come in by phone or text with no shared record.",
      "It's hard to know which requests are open, in progress, or resolved across many units.",
    ],
    objectives: [
      "Let tenants submit and track maintenance requests online.",
      "Give the maintenance team a shared board of open work.",
      "Keep a record of resolution for every request.",
    ],
    solution: "A tenant-facing request portal tied to an internal maintenance tracking board.",
    architecture: [
      "Tenant portal and request intake",
      "Maintenance tracking board (open → assigned → in progress → resolved)",
      "Property and unit data layer",
      "Admin dashboard",
    ],
    keyFeatures: [
      "Maintenance request submission with photos and description",
      "Status tracking visible to the tenant",
      "Maintenance team board grouped by status",
      "Per-property request history",
    ],
    customerExperience: [
      "Submit a maintenance request in minutes from a phone",
      "See request status without calling the office",
    ],
    adminExperience: [
      "Maintenance board across all properties and units",
      "Assign requests to maintenance staff",
      "Resolution history per unit",
    ],
    workflows: [
      "Tenant submits a request",
      "Staff assign and update status through resolution",
      "Tenant is notified as status changes",
    ],
    integrations: ["SMS/email notification category"],
    security: ["Tenants see only their own unit's requests"],
    responsiveExperience: "Tenant portal mobile-first; maintenance board usable on a tablet in the field.",
    designApproach: "A board-style status view for staff, and a simple submission form for tenants.",
    outcomes: [
      "Gives tenants self-service maintenance requests instead of phone/text",
      "Gives the maintenance team a shared, status-tracked board",
      "Creates a resolution history per unit",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Tenant portal, maintenance request tracking, and staff assignment board.",
    deliverables: ["Tenant portal", "Maintenance tracking board", "Request history reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-real-estate-crm", "concept-coworking-membership"],
    ctaText: defaultCta,
    featured: false,
    order: 10,
  },

  {
    slug: "concept-manufacturing-production-tracking",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Manufacturing",
    projectName: "Production Tracking Dashboard",
    category: "Dashboards & Admin Systems",
    industry: "Manufacturing",
    type: "Production tracking dashboard",
    summary:
      "A concept dashboard tracking a production line's output and status stage by stage, for a small manufacturing operation.",
    overview:
      "This concept models a floor-facing dashboard showing where each production run stands, replacing a paper production log.",
    challenge: [
      "Production status is tracked on paper logs that management can't see in real time.",
      "It's hard to spot bottlenecks until output is already behind.",
    ],
    objectives: [
      "Track production runs through defined stages in real time.",
      "Give management a live view of the floor.",
      "Flag stalled or delayed runs.",
    ],
    solution: "A stage-based production tracking system with a live floor dashboard and management overview.",
    architecture: [
      "Production run intake and stage tracking",
      "Floor-facing status board",
      "Management dashboard and reporting",
      "Delay/bottleneck flagging",
    ],
    keyFeatures: [
      "Stage-based run tracking",
      "Live floor status board",
      "Delay flagging when a run exceeds expected time in a stage",
      "Historical output reporting",
    ],
    customerExperience: [
      "Floor staff update run status from a shared station",
      "Management sees the whole line's status without walking the floor",
    ],
    adminExperience: [
      "Production stage configuration",
      "Delay and bottleneck reporting",
      "Historical output analysis",
    ],
    workflows: [
      "Run enters the line and is logged at each stage",
      "Delays are flagged automatically against expected timing",
      "Completed runs feed into output reporting",
    ],
    integrations: ["None assumed — floor-station based data entry"],
    security: ["Floor-station accounts scoped to status updates only; reporting restricted to management"],
    responsiveExperience: "Designed for a shared floor tablet/kiosk plus a desktop management view.",
    designApproach: "High-contrast, large-touch-target floor UI; denser reporting view for management.",
    outcomes: [
      "Replaces a paper production log with a live floor status board",
      "Flags delayed runs automatically instead of after the fact",
      "Gives management a real-time view of the line without walking the floor",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Stage tracking, floor status board, delay flagging, and output reporting.",
    deliverables: ["Production tracking dashboard", "Floor status board", "Output reporting module"],
    timeline: "Illustrative scope: comparable systems typically run 8–14 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-textile-production-workflow", "concept-print-shop-job-tracking"],
    ctaText: defaultCta,
    featured: false,
    order: 11,
  },

  {
    slug: "concept-salon-booking",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Salon & Spa",
    projectName: "Appointment Booking & Staff Scheduling",
    category: "Applications",
    industry: "Salon & spa",
    type: "Booking & staff scheduling application",
    summary:
      "A concept booking platform for a salon chain to manage client appointments and staff schedules across multiple stylists.",
    overview:
      "This concept models client-facing online booking tied to stylist availability, plus a staff-facing schedule view.",
    challenge: [
      "Bookings by phone tie up front-desk staff and are prone to double-booking.",
      "Stylist schedules are managed separately from client bookings.",
    ],
    objectives: [
      "Let clients book appointments online against real stylist availability.",
      "Manage stylist schedules and services in one place.",
      "Reduce no-shows with reminders.",
    ],
    solution: "A client-facing booking flow tied to stylist calendars, with reminders and a staff schedule view.",
    architecture: [
      "Stylist calendar and availability engine",
      "Service and pricing catalogue",
      "Client booking interface",
      "Staff schedule dashboard",
    ],
    keyFeatures: [
      "Service selection with stylist and time picking",
      "Real-time availability, no double-booking",
      "Appointment reminders",
      "Staff schedule and service management",
    ],
    customerExperience: [
      "Pick a service, stylist, and time in a few taps",
      "Receive a reminder ahead of the appointment",
      "Reschedule or cancel without calling",
    ],
    adminExperience: [
      "Stylist schedule management",
      "Service and pricing configuration",
      "Daily appointment overview",
    ],
    workflows: [
      "Client books against live stylist availability",
      "Reminder is sent ahead of the appointment",
      "Staff manage day-of changes from the schedule view",
    ],
    integrations: ["SMS/email reminder category", "Payment processing category"],
    security: ["Client booking limited to their own appointments; staff-only schedule administration"],
    responsiveExperience: "Mobile-first booking flow; desktop-friendly staff schedule view.",
    designApproach: "A visual, service-forward booking flow suited to a retail/wellness audience.",
    outcomes: [
      "Moves appointment booking online, tied to real stylist availability",
      "Reduces double-booking and front-desk phone load",
      "Adds reminders to reduce no-shows",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Client booking flow, stylist scheduling, and reminder workflow.",
    deliverables: ["Booking application", "Staff scheduling dashboard", "Reminder workflow"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-fitness-membership", "concept-clinic-scheduling"],
    ctaText: defaultCta,
    featured: false,
    order: 12,
  },

  {
    slug: "concept-construction-project-management",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Construction",
    projectName: "Project & Subcontractor Management",
    category: "Business Software & Custom Systems",
    industry: "Construction & contracting",
    type: "Project management system",
    summary:
      "A concept system for a construction contractor to track active projects, subcontractor assignments, and milestones in one place.",
    overview:
      "This concept models a project tracking system that ties milestones, subcontractor assignments, and site updates together for a contractor running several jobs at once.",
    challenge: [
      "Multiple active projects are tracked in separate spreadsheets and text threads.",
      "It's hard to see which subcontractors are assigned where, or which milestones are at risk.",
    ],
    objectives: [
      "Track every active project's milestones in one system.",
      "Manage subcontractor assignments per project.",
      "Flag milestones at risk of slipping.",
    ],
    solution: "A project dashboard with milestone tracking, subcontractor assignment, and at-risk flagging.",
    architecture: [
      "Project and milestone data layer",
      "Subcontractor assignment engine",
      "Project dashboard",
      "Risk/delay flagging",
    ],
    keyFeatures: [
      "Milestone tracking per project",
      "Subcontractor assignment and scheduling",
      "At-risk milestone flagging",
      "Site update logging",
    ],
    customerExperience: [
      "Project managers see every active job's milestones in one view",
      "Subcontractor assignments are visible across all projects, avoiding conflicts",
    ],
    adminExperience: [
      "Project and milestone configuration",
      "Subcontractor roster management",
      "Cross-project reporting",
    ],
    workflows: [
      "Project is created with milestones and subcontractor assignments",
      "Site updates are logged against milestones",
      "At-risk milestones are flagged automatically",
    ],
    integrations: ["Document storage category"],
    security: ["Project access scoped by role (management vs. site staff)"],
    responsiveExperience: "Mobile-friendly for site updates; desktop for project planning.",
    designApproach: "A milestone-timeline view so project managers can see the whole job at a glance.",
    outcomes: [
      "Tracks every active project's milestones in one system instead of separate spreadsheets",
      "Surfaces subcontractor assignments across all jobs to avoid conflicts",
      "Flags at-risk milestones before they slip",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Project/milestone tracking, subcontractor assignment, and risk flagging.",
    deliverables: ["Project management dashboard", "Subcontractor assignment module", "Risk flagging reporting"],
    timeline: "Illustrative scope: comparable systems typically run 10–14 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-furniture-custom-orders", "concept-equipment-rental-tracking"],
    ctaText: defaultCta,
    featured: false,
    order: 13,
  },

  {
    slug: "concept-school-enrollment-lms",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Training Institute",
    projectName: "Student Enrollment & Course Management",
    category: "Applications",
    industry: "Education & training",
    type: "Enrollment & course management system",
    summary:
      "A concept system for a training institute to manage course enrollment, schedules, and student progress.",
    overview:
      "This concept models a system tying course catalogues, enrollment, and attendance/progress tracking together for an institute currently managing this on paper and spreadsheets.",
    challenge: [
      "Enrollment, payment status, and attendance are tracked separately, making it hard to see a student's full picture.",
      "Course schedules and instructor assignments are managed manually.",
    ],
    objectives: [
      "Centralize course enrollment and student records.",
      "Track attendance and progress per course.",
      "Manage course schedules and instructor assignments.",
    ],
    solution: "An enrollment and course management system with attendance tracking and a student progress view.",
    architecture: [
      "Course catalogue and scheduling",
      "Enrollment and payment status tracking",
      "Attendance and progress tracking",
      "Admin dashboard",
    ],
    keyFeatures: [
      "Course catalogue with schedule and instructor info",
      "Online enrollment with payment status",
      "Attendance tracking per session",
      "Student progress overview",
    ],
    customerExperience: [
      "Browse and enroll in available courses",
      "See enrollment and payment status",
      "Track attendance and progress through a course",
    ],
    adminExperience: [
      "Course and schedule management",
      "Enrollment and payment tracking",
      "Attendance and progress reporting",
    ],
    workflows: [
      "Student enrolls in a course",
      "Attendance is logged per session",
      "Progress is tracked against course milestones",
    ],
    integrations: ["Payment processing category", "Email notification category"],
    security: ["Student access limited to their own enrollment and progress records"],
    responsiveExperience: "Mobile-friendly enrollment; desktop-friendly instructor/admin tools.",
    designApproach: "A catalogue-first layout for enrollment, with a simple progress view for returning students.",
    outcomes: [
      "Centralizes enrollment, payment status, and attendance in one system",
      "Gives students self-service enrollment and progress tracking",
      "Gives staff one view of course schedules and instructor assignments",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Course catalogue, enrollment, attendance tracking, and progress reporting.",
    deliverables: ["Enrollment system", "Attendance tracking module", "Student progress dashboard"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-nonprofit-donor-management", "concept-coworking-membership"],
    ctaText: defaultCta,
    featured: false,
    order: 14,
  },

  {
    slug: "concept-nonprofit-donor-management",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Foundation",
    projectName: "Donor & Volunteer Management",
    category: "CRM & Customer Systems",
    industry: "Nonprofit",
    type: "Donor & volunteer CRM",
    summary:
      "A concept CRM for a nonprofit to track donors, donations, and volunteer engagement in one system.",
    overview:
      "This concept models a system tying donor records, donation history, and volunteer scheduling together, replacing a spreadsheet-based approach.",
    challenge: [
      "Donor and donation records are tracked in spreadsheets with no shared history view.",
      "Volunteer scheduling is managed separately from donor relationships.",
    ],
    objectives: [
      "Track donor records and donation history in one place.",
      "Manage volunteer scheduling and engagement.",
      "Give staff a shared view of supporter relationships.",
    ],
    solution: "A donor and volunteer CRM with donation history and a volunteer scheduling module.",
    architecture: [
      "Donor and donation record layer",
      "Volunteer scheduling engine",
      "Reporting and history dashboard",
      "Admin/staff interface",
    ],
    keyFeatures: [
      "Donor record and donation history tracking",
      "Volunteer scheduling and shift sign-up",
      "Supporter activity timeline",
      "Reporting on donations and volunteer hours",
    ],
    customerExperience: [
      "Volunteers sign up for shifts online",
      "Donors receive acknowledgment tied to accurate records",
    ],
    adminExperience: [
      "Donor and donation record management",
      "Volunteer schedule administration",
      "Reporting across donations and volunteer activity",
    ],
    workflows: [
      "Donation is recorded against a donor profile",
      "Volunteer signs up for an available shift",
      "Staff review supporter activity in one timeline",
    ],
    integrations: ["Payment processing category", "Email notification category"],
    security: ["Donor financial history restricted to authorized staff"],
    responsiveExperience: "Volunteer sign-up mobile-first; donor/reporting tools desktop-friendly.",
    designApproach: "A relationship-timeline view so staff see the full supporter history at a glance.",
    outcomes: [
      "Replaces spreadsheet-based donor tracking with a shared donation history",
      "Moves volunteer scheduling online with self-service shift sign-up",
      "Gives staff one timeline of supporter activity",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Donor CRM, donation history, and volunteer scheduling.",
    deliverables: ["Donor management system", "Volunteer scheduling module", "Donation reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-school-enrollment-lms", "concept-event-planning-platform"],
    ctaText: defaultCta,
    featured: false,
    order: 15,
  },

  {
    slug: "concept-event-planning-platform",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Events",
    projectName: "Event & Vendor Coordination Platform",
    category: "Business Software & Custom Systems",
    industry: "Event planning",
    type: "Event coordination system",
    summary:
      "A concept platform for an event planning company to coordinate vendors, timelines, and client approvals for each event.",
    overview:
      "This concept models a per-event workspace tracking vendor assignments, timelines, and client-facing approvals, replacing scattered email threads.",
    challenge: [
      "Each event involves multiple vendors and a timeline coordinated over email, which gets lost across events.",
      "Clients have no single place to review and approve event details.",
    ],
    objectives: [
      "Give each event a dedicated coordination workspace.",
      "Track vendor assignments and timelines per event.",
      "Let clients review and approve details in one place.",
    ],
    solution: "A per-event workspace with vendor assignment, timeline tracking, and a client approval view.",
    architecture: [
      "Event workspace and timeline layer",
      "Vendor assignment tracking",
      "Client-facing approval view",
      "Admin dashboard across events",
    ],
    keyFeatures: [
      "Event timeline and milestone tracking",
      "Vendor assignment per event",
      "Client approval flow for key details",
      "Cross-event vendor performance view",
    ],
    customerExperience: [
      "Clients review and approve event details in one place",
      "Vendors see their assignments and deadlines clearly",
    ],
    adminExperience: [
      "Event workspace management",
      "Vendor roster and assignment tracking",
      "Cross-event reporting",
    ],
    workflows: [
      "Event workspace is created with a timeline and vendor assignments",
      "Client reviews and approves key details",
      "Staff track timeline progress to event day",
    ],
    integrations: ["Email notification category", "Document sharing category"],
    security: ["Client access scoped to their own event"],
    responsiveExperience: "Mobile-friendly for on-site coordination; desktop for planning.",
    designApproach: "A timeline-first workspace layout so the whole event plan is visible at once.",
    outcomes: [
      "Gives each event a dedicated coordination workspace instead of scattered email threads",
      "Gives clients one place to review and approve event details",
      "Tracks vendor assignments and timelines per event",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Event workspace, vendor assignment, timeline tracking, and client approvals.",
    deliverables: ["Event coordination platform", "Vendor assignment module", "Client approval workflow"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-nonprofit-donor-management", "concept-coworking-membership"],
    ctaText: defaultCta,
    featured: false,
    order: 16,
  },

  {
    slug: "concept-home-services-dispatch",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Home Services",
    projectName: "Field Service Dispatch & Scheduling",
    category: "Dashboards & Admin Systems",
    industry: "Home services",
    type: "Field service dispatch system",
    summary:
      "A concept dispatch system for a home services company (plumbing, HVAC, electrical) to schedule technicians and track job status.",
    overview:
      "This concept models a dispatch board matching incoming service requests to available technicians, with a field-facing job status view.",
    challenge: [
      "Scheduling technicians by phone makes it hard to see who's available and where.",
      "Job status isn't visible to the office until the technician calls in.",
    ],
    objectives: [
      "Match incoming requests to available technicians.",
      "Track job status from scheduled through completed.",
      "Give the office a live view of the day's jobs.",
    ],
    solution: "A dispatch board with technician availability and a field-facing job status app.",
    architecture: [
      "Service request intake",
      "Technician availability and assignment engine",
      "Dispatch dashboard",
      "Field-facing job status app",
    ],
    keyFeatures: [
      "Technician availability and assignment",
      "Live dispatch board by job status",
      "Field job status updates",
      "Job history per customer",
    ],
    customerExperience: [
      "Office staff match requests to available technicians quickly",
      "Technicians update job status from the field",
    ],
    adminExperience: [
      "Technician roster and availability management",
      "Job history and reporting",
      "Dispatch board across all active jobs",
    ],
    workflows: [
      "Request comes in and is assigned to an available technician",
      "Technician updates status through the job",
      "Completed jobs are logged to history",
    ],
    integrations: ["SMS notification category", "Mapping/location category"],
    security: ["Technician access limited to their own assigned jobs"],
    responsiveExperience: "Dispatch board on desktop; technician app mobile-first.",
    designApproach: "A board-style dispatch layout for fast reassignment during a busy day.",
    outcomes: [
      "Matches incoming service requests to available technicians from one board",
      "Gives the office live job status instead of waiting for a call-in",
      "Creates a searchable job history per customer",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Dispatch board, technician assignment, and field status updates.",
    deliverables: ["Dispatch dashboard", "Field technician app", "Job history reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-logistics-fleet-tracking", "concept-equipment-rental-tracking"],
    ctaText: defaultCta,
    featured: false,
    order: 17,
  },

  {
    slug: "concept-pharmacy-inventory",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Pharmacy",
    projectName: "Prescription & Inventory Management",
    category: "Business Software & Custom Systems",
    industry: "Pharmacy retail",
    type: "Prescription & inventory system",
    summary:
      "A concept system for a pharmacy chain to manage prescription fulfillment status and medication inventory across branches.",
    overview:
      "This concept models a fulfillment tracking system tied to inventory levels, so pharmacists can see what's in stock and where each prescription stands.",
    challenge: [
      "Prescription fulfillment status is tracked manually, with no shared view for customers checking readiness.",
      "Inventory levels aren't visible across branches, complicating stock transfers.",
    ],
    objectives: [
      "Track prescription fulfillment status from intake to ready.",
      "Give staff visibility into inventory across branches.",
      "Let customers check if their prescription is ready.",
    ],
    solution: "A fulfillment tracking system tied to a cross-branch inventory view.",
    architecture: [
      "Prescription intake and fulfillment tracking",
      "Cross-branch inventory layer",
      "Customer status lookup",
      "Admin/pharmacist dashboard",
    ],
    keyFeatures: [
      "Fulfillment status tracking (received → filling → ready)",
      "Cross-branch inventory visibility",
      "Customer readiness lookup",
      "Low-stock alerts",
    ],
    customerExperience: ["Check prescription readiness without calling the branch"],
    adminExperience: [
      "Fulfillment queue per branch",
      "Cross-branch inventory management",
      "Low-stock alerting",
    ],
    workflows: [
      "Prescription is logged at intake",
      "Status is updated as it moves through fulfillment",
      "Customer is notified when ready",
    ],
    integrations: ["SMS notification category"],
    security: ["Fulfillment and inventory data restricted to pharmacy staff"],
    responsiveExperience: "Staff dashboard on desktop/tablet; customer lookup mobile-first.",
    designApproach: "A queue-based fulfillment view built for a fast-paced counter environment.",
    outcomes: [
      "Gives customers self-service prescription readiness checks",
      "Gives staff cross-branch inventory visibility for stock transfers",
      "Surfaces low-stock situations with automatic alerts",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Fulfillment tracking, cross-branch inventory, and customer status lookup.",
    deliverables: ["Fulfillment tracking system", "Inventory management module", "Customer status lookup"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-restaurant-pos-inventory", "concept-grocery-multi-branch-inventory"],
    ctaText: defaultCta,
    featured: false,
    order: 18,
  },

  {
    slug: "concept-freight-shipment-tracking",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Freight",
    projectName: "Shipment Tracking Portal",
    category: "Applications",
    industry: "Freight forwarding",
    type: "Shipment tracking portal",
    summary:
      "A concept portal for a freight forwarding company to give clients visibility into shipment status without calling for updates.",
    overview:
      "This concept models a client-facing tracking portal tied to internal shipment status updates, replacing status calls and email chains.",
    challenge: [
      "Clients call or email for shipment status, tying up staff time.",
      "Shipment status is tracked internally with no client-facing view.",
    ],
    objectives: [
      "Give clients self-service shipment status tracking.",
      "Track shipment status through defined stages internally.",
      "Reduce status-check calls to staff.",
    ],
    solution: "A client-facing tracking portal reflecting internal shipment status updates in real time.",
    architecture: [
      "Shipment intake and status tracking",
      "Client-facing tracking portal",
      "Internal status update interface",
      "Admin/reporting dashboard",
    ],
    keyFeatures: [
      "Shipment status tracking (booked → in transit → customs → delivered)",
      "Client tracking portal by shipment number",
      "Internal status update interface for staff",
      "Shipment history per client",
    ],
    customerExperience: ["Track a shipment's status by shipment number, any time"],
    adminExperience: [
      "Status update interface for staff",
      "Cross-client shipment overview",
      "Historical reporting",
    ],
    workflows: [
      "Shipment is booked and logged",
      "Staff update status as the shipment progresses",
      "Client portal reflects status in real time",
    ],
    integrations: ["SMS/email notification category"],
    security: ["Client tracking scoped to their own shipments"],
    responsiveExperience: "Client tracking portal mobile-first; staff update interface desktop-friendly.",
    designApproach: "A simple, status-forward tracking view similar to familiar package-tracking patterns.",
    outcomes: [
      "Gives clients self-service shipment status instead of status calls",
      "Creates a consistent internal record of shipment status changes",
      "Reduces status-check volume on staff time",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Shipment tracking, client portal, and internal status updates.",
    deliverables: ["Shipment tracking portal", "Internal status update tool", "Shipment history reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-logistics-fleet-tracking", "concept-wholesale-order-management"],
    ctaText: defaultCta,
    featured: false,
    order: 19,
  },

  {
    slug: "concept-insurance-claims-management",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Insurance",
    projectName: "Policy & Claims Management",
    category: "Business Software & Custom Systems",
    industry: "Insurance",
    type: "Policy & claims management system",
    summary:
      "A concept system for a small insurance agency to manage policyholder records and claims status in one place.",
    overview:
      "This concept models a system tracking policies and claims together, so agents can see a client's full picture without switching tools.",
    challenge: [
      "Policy records and claims tracking are managed in separate spreadsheets.",
      "Claims status isn't easily visible to policyholders without a call.",
    ],
    objectives: [
      "Track policies and claims in one connected system.",
      "Track claims through a defined review process.",
      "Let policyholders check claim status.",
    ],
    solution: "A policy and claims management system with a policyholder-facing status lookup.",
    architecture: [
      "Policy record management",
      "Claims intake and review tracking",
      "Policyholder status lookup",
      "Admin/agent dashboard",
    ],
    keyFeatures: [
      "Policy record management",
      "Claims status tracking (filed → under review → approved/denied → closed)",
      "Policyholder claim status lookup",
      "Agent dashboard across policies and claims",
    ],
    customerExperience: ["Check claim status without calling the agency"],
    adminExperience: [
      "Policy record administration",
      "Claims review workflow",
      "Cross-policyholder reporting",
    ],
    workflows: [
      "Claim is filed and logged against a policy",
      "Agent reviews and updates claim status",
      "Policyholder is notified of status changes",
    ],
    integrations: ["Document storage category", "Email notification category"],
    security: ["Policyholder access limited to their own policy and claims"],
    responsiveExperience: "Agent dashboard desktop-friendly; policyholder lookup mobile-first.",
    designApproach: "A clear status-stage view so both agents and policyholders understand where a claim stands.",
    outcomes: [
      "Connects policy and claims records that were previously tracked separately",
      "Gives policyholders self-service claim status lookup",
      "Tracks claims through a defined review process",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Policy management, claims tracking, and policyholder status lookup.",
    deliverables: ["Policy management system", "Claims tracking module", "Policyholder status lookup"],
    timeline: "Illustrative scope: comparable systems typically run 10–14 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-law-firm-case-management", "concept-nonprofit-donor-management"],
    ctaText: defaultCta,
    featured: false,
    order: 20,
  },

  {
    slug: "concept-textile-production-workflow",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Textiles",
    projectName: "Order & Production Workflow",
    category: "Business Software & Custom Systems",
    industry: "Textile manufacturing",
    type: "Order & production workflow system",
    summary:
      "A concept system tying customer orders to production stages for a textile manufacturer producing to order.",
    overview:
      "This concept models a system connecting order intake to production stage tracking, so sales and the production floor share one source of truth.",
    challenge: [
      "Orders are communicated to production verbally or by paper note, disconnected from the sales record.",
      "It's hard to tell customers when an order will be ready.",
    ],
    objectives: [
      "Connect order intake directly to production tracking.",
      "Track production stage per order.",
      "Give sales an accurate view of expected completion.",
    ],
    solution: "An order intake system feeding a production tracking board, shared between sales and the floor.",
    architecture: [
      "Order intake and specification capture",
      "Production stage tracking",
      "Sales-facing order status view",
      "Admin dashboard",
    ],
    keyFeatures: [
      "Order intake with production specifications",
      "Production stage tracking board",
      "Sales-facing status view per order",
      "Production history and reporting",
    ],
    customerExperience: ["Sales staff can give customers an accurate status without checking with the floor"],
    adminExperience: [
      "Production stage configuration",
      "Cross-order production board",
      "Historical reporting",
    ],
    workflows: [
      "Order is captured with specifications",
      "Production logs stage progress against the order",
      "Sales sees status update automatically",
    ],
    integrations: ["None assumed — internal system"],
    security: ["Role separation between sales and production data entry"],
    responsiveExperience: "Floor board on a shared tablet/kiosk; sales view on desktop.",
    designApproach: "A shared board view so sales and production are always looking at the same status.",
    outcomes: [
      "Connects order intake directly to production tracking",
      "Gives sales an accurate, shared view of expected completion",
      "Removes the gap between verbal order notes and the production floor",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Order intake, production stage tracking, and sales status visibility.",
    deliverables: ["Order intake system", "Production tracking board", "Sales status view"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-manufacturing-production-tracking", "concept-wholesale-order-management"],
    ctaText: defaultCta,
    featured: false,
    order: 21,
  },

  {
    slug: "concept-car-dealership-crm",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Motors",
    projectName: "Inventory & Sales Pipeline CRM",
    category: "CRM & Customer Systems",
    industry: "Automotive retail",
    type: "Inventory & sales CRM",
    summary:
      "A concept CRM for a car dealership connecting vehicle inventory to the sales pipeline for each buyer.",
    overview:
      "This concept models a system where sales staff can see live inventory alongside a lead's stage in the buying process, instead of managing both separately.",
    challenge: [
      "Vehicle inventory and buyer leads are tracked in separate tools.",
      "Sales staff can't quickly see which leads are interested in which vehicles.",
    ],
    objectives: [
      "Connect inventory directly to the sales pipeline.",
      "Track buyer leads through defined pipeline stages.",
      "Give management visibility into inventory turnover and pipeline health.",
    ],
    solution: "An inventory system linked to a lead pipeline, with reporting on turnover and pipeline stages.",
    architecture: [
      "Vehicle inventory management",
      "Lead pipeline (Inquiry → Test Drive → Offer → Sold)",
      "Linking leads to specific vehicles",
      "Management reporting dashboard",
    ],
    keyFeatures: [
      "Vehicle inventory listing and status",
      "Lead pipeline linked to specific vehicles",
      "Sales staff task and follow-up tracking",
      "Inventory turnover reporting",
    ],
    customerExperience: [
      "Sales staff see which vehicles a lead is interested in, in one view",
      "Follow-up tasks appear automatically as leads move stages",
    ],
    adminExperience: [
      "Inventory management",
      "Pipeline-wide visibility for management",
      "Turnover and sales reporting",
    ],
    workflows: [
      "Lead is captured and linked to a vehicle of interest",
      "Sales staff move the lead through pipeline stages",
      "Sold vehicles are removed from active inventory automatically",
    ],
    integrations: ["SMS/email notification category"],
    security: ["Sales-staff-level access to their own leads; management-level pipeline visibility"],
    responsiveExperience: "Mobile-friendly for sales staff on the lot; desktop for management reporting.",
    designApproach: "An inventory-first layout so vehicles and interested leads are always linked visually.",
    outcomes: [
      "Connects inventory directly to the leads interested in specific vehicles",
      "Replaces separate inventory and lead tools with one linked system",
      "Gives management visibility into inventory turnover and pipeline health",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Inventory management, lead pipeline, and turnover reporting.",
    deliverables: ["Inventory management system", "Sales pipeline CRM", "Turnover reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-real-estate-crm", "concept-equipment-rental-tracking"],
    ctaText: defaultCta,
    featured: false,
    order: 22,
  },

  {
    slug: "concept-veterinary-clinic",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Veterinary Clinic",
    projectName: "Patient Records & Appointment System",
    category: "Applications",
    industry: "Veterinary care",
    type: "Patient records & scheduling system",
    summary:
      "A concept system for a veterinary clinic to manage animal patient records and appointment scheduling together.",
    overview:
      "This concept models a scheduling system tied to per-animal patient records, so staff can see an animal's history when booking or during a visit.",
    challenge: [
      "Animal patient history is kept on paper, separate from appointment scheduling.",
      "Owners with multiple pets are hard to track consistently.",
    ],
    objectives: [
      "Track patient records per animal, linked to an owner.",
      "Schedule appointments against provider availability.",
      "Keep visit history searchable.",
    ],
    solution: "A scheduling system linked to per-animal patient records and visit history.",
    architecture: [
      "Owner and patient (animal) record layer",
      "Scheduling engine with provider calendars",
      "Visit history tracking",
      "Front-desk booking interface",
    ],
    keyFeatures: [
      "Per-animal patient records linked to an owner",
      "Provider scheduling with conflict prevention",
      "Visit history per animal",
      "Appointment reminders",
    ],
    customerExperience: [
      "Front-desk staff pull up an animal's full history instantly",
      "Owners with multiple pets are tracked under one account",
    ],
    adminExperience: [
      "Provider schedule management",
      "Patient record administration",
      "Appointment overview",
    ],
    workflows: [
      "Owner and patient record is created or matched at booking",
      "Appointment is booked against provider availability",
      "Visit details are logged to patient history",
    ],
    integrations: ["SMS/email reminder category"],
    security: ["Patient records restricted to authenticated clinic staff"],
    responsiveExperience: "Front-desk desktop primary; tablet-friendly for exam-room use.",
    designApproach: "A calendar-first layout mirroring the human-clinic scheduling concept, adapted for multi-pet owners.",
    outcomes: [
      "Gives front-desk staff instant access to a pet's full visit history",
      "Tracks multiple pets under one owner account consistently",
      "Replaces a shared paper book with conflict-free provider scheduling",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Scheduling, per-animal patient records, and visit history.",
    deliverables: ["Scheduling application", "Patient record module", "Visit history tracking"],
    timeline: "Illustrative scope: comparable systems typically run 6–10 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-clinic-scheduling", "concept-salon-booking"],
    ctaText: defaultCta,
    featured: false,
    order: 23,
  },

  {
    slug: "concept-coworking-membership",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Coworking",
    projectName: "Membership & Booking Management",
    category: "Applications",
    industry: "Coworking & shared office space",
    type: "Membership & space booking application",
    summary:
      "A concept platform for a coworking space to manage memberships and let members book desks and meeting rooms.",
    overview:
      "This concept models a member-facing booking system tied to membership tier and space availability, replacing a shared sign-up sheet.",
    challenge: [
      "Desk and room bookings are tracked on a shared sheet, prone to conflicts.",
      "Membership tiers and usage limits aren't enforced automatically.",
    ],
    objectives: [
      "Let members book desks and rooms against live availability.",
      "Enforce membership tier and usage limits automatically.",
      "Give staff visibility into space utilization.",
    ],
    solution: "A booking system tied to membership tiers, with a staff-facing utilization dashboard.",
    architecture: [
      "Membership tier and usage-limit engine",
      "Space availability and booking engine",
      "Member-facing booking interface",
      "Staff utilization dashboard",
    ],
    keyFeatures: [
      "Desk and meeting room booking",
      "Membership tier enforcement",
      "Usage limit tracking",
      "Utilization reporting for staff",
    ],
    customerExperience: [
      "Book a desk or room against live availability",
      "See remaining usage under your membership tier",
    ],
    adminExperience: [
      "Membership tier configuration",
      "Space and resource management",
      "Utilization reporting",
    ],
    workflows: [
      "Member books a space against availability and remaining tier usage",
      "Usage is deducted from the member's allotment",
      "Staff review utilization trends",
    ],
    integrations: ["Payment processing category"],
    security: ["Booking limited to active members within their tier's usage limits"],
    responsiveExperience: "Mobile-first booking; desktop-friendly utilization dashboard.",
    designApproach: "A calendar/floor-plan-style booking view for intuitive space selection.",
    outcomes: [
      "Moves desk and room booking online, tied to live availability",
      "Enforces membership tier usage limits automatically",
      "Gives staff a utilization view instead of a shared sign-up sheet",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Membership management, space booking, and utilization reporting.",
    deliverables: ["Booking application", "Membership management module", "Utilization dashboard"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-fitness-membership", "concept-property-management-portal"],
    ctaText: defaultCta,
    featured: false,
    order: 24,
  },

  {
    slug: "concept-equipment-rental-tracking",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Rentals",
    projectName: "Rental & Asset Tracking System",
    category: "Business Software & Custom Systems",
    industry: "Equipment rental",
    type: "Rental & asset tracking system",
    summary:
      "A concept system for an equipment rental company to track asset availability, reservations, and return status.",
    overview:
      "This concept models a system that tracks each rental asset's status — available, reserved, out, overdue — so staff always know what's on the lot versus in the field.",
    challenge: [
      "Asset availability is tracked on a whiteboard, which doesn't scale as the fleet grows.",
      "Overdue returns are easy to miss without an automated flag.",
    ],
    objectives: [
      "Track every asset's status in real time.",
      "Manage reservations against asset availability.",
      "Flag overdue returns automatically.",
    ],
    solution: "An asset tracking system with reservation management and automated overdue flagging.",
    architecture: [
      "Asset registry and status tracking",
      "Reservation engine",
      "Overdue flagging",
      "Admin dashboard",
    ],
    keyFeatures: [
      "Asset status tracking (available → reserved → out → returned/overdue)",
      "Reservation booking against availability",
      "Overdue return flagging",
      "Rental history per asset and per customer",
    ],
    customerExperience: ["Staff can confirm equipment availability instantly when a customer calls"],
    adminExperience: [
      "Asset registry management",
      "Reservation and return tracking",
      "Overdue reporting",
    ],
    workflows: [
      "Customer reserves an available asset",
      "Asset status updates as it goes out and comes back",
      "Overdue assets are flagged automatically",
    ],
    integrations: ["SMS reminder category"],
    security: ["Staff-only asset and reservation administration"],
    responsiveExperience: "Desktop-first for the rental counter; tablet-friendly for yard checks.",
    designApproach: "A status-board layout so available versus out equipment is obvious at a glance.",
    outcomes: [
      "Gives staff real-time visibility into what's on the lot versus in the field",
      "Flags overdue returns automatically instead of relying on memory",
      "Replaces a whiteboard with a searchable rental history",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Asset tracking, reservation management, and overdue flagging.",
    deliverables: ["Asset tracking system", "Reservation management module", "Overdue reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-construction-project-management", "concept-home-services-dispatch"],
    ctaText: defaultCta,
    featured: false,
    order: 25,
  },

  {
    slug: "concept-print-shop-job-tracking",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Print Shop",
    projectName: "Order & Job Tracking System",
    category: "Business Software & Custom Systems",
    industry: "Printing services",
    type: "Job tracking system",
    summary:
      "A concept system for a print shop to track jobs from order through production and pickup.",
    overview:
      "This concept models a job tracking board following each print job from specification through production and customer pickup.",
    challenge: [
      "Jobs are tracked on paper tickets that can be misplaced or hard to prioritize.",
      "Customers have no way to check whether a job is ready without calling.",
    ],
    objectives: [
      "Track every job through defined production stages.",
      "Let customers check job status without calling.",
      "Prioritize jobs by due date across the shop floor.",
    ],
    solution: "A job tracking board with stage-based status and a customer-facing lookup.",
    architecture: [
      "Job intake and specification capture",
      "Stage-based tracking (queued → printing → finishing → ready)",
      "Customer status lookup",
      "Shop floor tracking board",
    ],
    keyFeatures: [
      "Job intake with specifications and due date",
      "Stage-based job tracking board",
      "Customer job status lookup",
      "Due-date prioritization view",
    ],
    customerExperience: ["Check job status by order number instead of calling"],
    adminExperience: [
      "Shop floor tracking board",
      "Due-date prioritization",
      "Job history and reporting",
    ],
    workflows: [
      "Job is captured at intake with a due date",
      "Staff move the job through production stages",
      "Customer is notified when the job is ready",
    ],
    integrations: ["SMS/email notification category"],
    security: ["Staff-only production board; customer lookup limited to order number"],
    responsiveExperience: "Shop floor board on a tablet/kiosk; customer lookup mobile-first.",
    designApproach: "A board-style layout grouped by stage and sortable by due date.",
    outcomes: [
      "Tracks every job through production on a shared status board",
      "Gives customers self-service status lookup by order number",
      "Makes due-date prioritization visible across the shop floor",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Job intake, stage tracking, and customer status lookup.",
    deliverables: ["Job tracking board", "Customer status lookup page", "Due-date reporting"],
    timeline: "Illustrative scope: comparable systems typically run 6–10 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-furniture-custom-orders", "concept-manufacturing-production-tracking"],
    ctaText: defaultCta,
    featured: false,
    order: 26,
  },

  {
    slug: "concept-grocery-multi-branch-inventory",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Grocery",
    projectName: "Multi-Branch Inventory & Procurement Dashboard",
    category: "Dashboards & Admin Systems",
    industry: "Grocery retail",
    type: "Multi-branch inventory dashboard",
    summary:
      "A concept dashboard for a grocery chain to manage inventory and procurement across multiple branches from one place.",
    overview:
      "This concept models a central inventory and procurement dashboard so purchasing decisions can be made with visibility across all branches, not just one.",
    challenge: [
      "Each branch manages its own stock and ordering, with no combined view for procurement.",
      "Overstocking at one branch and shortages at another aren't visible centrally.",
    ],
    objectives: [
      "Give procurement a cross-branch inventory view.",
      "Flag low-stock and overstock situations per branch.",
      "Streamline reordering from a central dashboard.",
    ],
    solution: "A central inventory dashboard aggregating branch-level stock, with procurement and alerting tools.",
    architecture: [
      "Per-branch inventory intake",
      "Aggregation and central dashboard",
      "Procurement/reorder workflow",
      "Alerting engine",
    ],
    keyFeatures: [
      "Cross-branch inventory overview",
      "Low-stock and overstock alerts",
      "Central reorder workflow",
      "Branch-level and combined reporting",
    ],
    customerExperience: ["Procurement staff see all branches' stock levels in one dashboard"],
    adminExperience: [
      "Branch and inventory management",
      "Alert threshold configuration",
      "Procurement and reorder tracking",
    ],
    workflows: [
      "Branch records stock levels",
      "Dashboard aggregates and flags thresholds",
      "Procurement initiates reorders centrally",
    ],
    integrations: ["Accounting/export category"],
    security: ["Role-based access separating branch staff from central procurement"],
    responsiveExperience: "Dashboard designed for desktop procurement review.",
    designApproach: "A table-and-chart hybrid layout suited to dense multi-branch comparison.",
    outcomes: [
      "Gives procurement one cross-branch view instead of per-branch spreadsheets",
      "Flags low-stock and overstock situations automatically",
      "Streamlines reordering from a single dashboard",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Cross-branch inventory dashboard, alerting, and procurement workflow.",
    deliverables: ["Inventory dashboard", "Procurement workflow module", "Alerting system"],
    timeline: "Illustrative scope: comparable systems typically run 10–14 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-restaurant-pos-inventory", "concept-pharmacy-inventory"],
    ctaText: defaultCta,
    featured: false,
    order: 27,
  },

  {
    slug: "concept-subscription-box-fulfillment",
    status: "CONCEPT",
    companyName: "[COMPANY NAME] Subscription Co.",
    projectName: "Subscription & Fulfillment Management",
    category: "Websites & E-commerce",
    industry: "Subscription commerce",
    type: "Subscription & fulfillment system",
    summary:
      "A concept system for a subscription box company to manage recurring subscriptions and monthly fulfillment in one place.",
    overview:
      "This concept models a system tracking subscriber status, billing cycles, and fulfillment batches together, replacing manually cross-referenced spreadsheets each month.",
    challenge: [
      "Subscriber status, billing, and fulfillment lists are cross-referenced manually each cycle.",
      "It's hard to see churn or fulfillment issues until after a batch ships.",
    ],
    objectives: [
      "Track subscriber status and billing cycles in one system.",
      "Generate fulfillment batches automatically from active subscribers.",
      "Give staff visibility into churn and fulfillment status.",
    ],
    solution: "A subscription management system generating fulfillment batches automatically from active subscribers.",
    architecture: [
      "Subscriber and billing-cycle management",
      "Fulfillment batch generation",
      "Shipping status tracking",
      "Admin reporting dashboard",
    ],
    keyFeatures: [
      "Subscriber management with billing cycle status",
      "Automatic fulfillment batch generation",
      "Shipping status tracking per subscriber",
      "Churn and fulfillment reporting",
    ],
    customerExperience: [
      "Subscribers manage their own subscription (pause, skip, cancel)",
      "Subscribers can see their shipping status",
    ],
    adminExperience: [
      "Subscriber and billing management",
      "Fulfillment batch review before shipping",
      "Churn and fulfillment reporting",
    ],
    workflows: [
      "Billing cycle runs and active subscribers are confirmed",
      "Fulfillment batch is generated automatically",
      "Staff review and release the batch for shipping",
    ],
    integrations: ["Payment processing category", "Shipping/carrier category"],
    security: ["Subscriber self-service limited to their own account"],
    responsiveExperience: "Subscriber portal mobile-first; fulfillment batch review desktop-friendly.",
    designApproach: "A subscriber self-service portal paired with a batch-review tool for operations.",
    outcomes: [
      "Automates fulfillment batch generation from active subscribers",
      "Gives subscribers self-service management of their own subscription",
      "Surfaces churn and fulfillment issues before a batch ships, not after",
    ],
    technology: ["Illustrative stack: React, Node.js, PostgreSQL."],
    projectScope: "Subscriber management, automated fulfillment batching, and reporting.",
    deliverables: ["Subscription management system", "Fulfillment batch tool", "Churn/fulfillment reporting"],
    timeline: "Illustrative scope: comparable systems typically run 8–12 weeks.",
    galleryAvailable: false,
    relatedProjects: ["concept-wholesale-order-management", "concept-grocery-multi-branch-inventory"],
    ctaText: defaultCta,
    featured: false,
    order: 28,
  },
];
