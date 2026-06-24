export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  group: string;
  summary: string;
  description: string;
  faqs: ServiceFAQ[];
};

export const SERVICES: Service[] = [
  {
    slug: "business-formation-and-restructuring",
    title: "Business formation and restructuring",
    group: "Structure & governance",
    summary:
      "Formation of corporations, partnerships, LLCs, and sole proprietorships tailored to your legal and operational needs.",
    description:
      "Choosing the right entity at the outset, or restructuring when your business evolves, affects liability, taxation, governance, and how you raise capital. We advise on corporations, partnerships, and other structures suited to your operations in Ontario and beyond, and guide you through incorporation, organizational documents, and shareholder arrangements.",
    faqs: [
      {
        q: "Which business structure is right for my company?",
        a: "It depends on liability exposure, ownership, tax treatment, and growth plans. We review your situation and recommend a structure aligned with your commercial goals.",
      },
      {
        q: "Can you help reorganize an existing business?",
        a: "Yes. We assist with amalgamations, wind-ups, entity conversions, and internal reorganizations while managing regulatory and contractual implications.",
      },
      {
        q: "Do you handle federal and Ontario incorporations?",
        a: "We routinely incorporate and maintain corporations under Ontario and federal law, including initial registrations and ongoing compliance guidance.",
      },
    ],
  },
  {
    slug: "corporate-governance",
    title: "Corporate governance",
    group: "Structure & governance",
    summary:
      "Guidance on governance practices, maintaining regulatory compliance and establishing transparent management structures.",
    description:
      "Strong governance protects directors, officers, and shareholders while keeping the business decision-ready. We draft and review bylaws, shareholder agreements, board processes, and policies that support accountability, regulatory compliance, and clear authority across your organization.",
    faqs: [
      {
        q: "What governance documents does a private company need?",
        a: "Most companies benefit from current bylaws, a shareholders' agreement, board resolutions for key decisions, and policies suited to their size and risk profile.",
      },
      {
        q: "Can you advise directors on their duties?",
        a: "We explain fiduciary duties, conflict rules, and documentation practices so leadership can act confidently and defensibly.",
      },
      {
        q: "Do you assist with annual corporate maintenance?",
        a: "Yes, we help with annual returns, minute book updates, and governance reviews to keep your corporation in good standing.",
      },
    ],
  },
  {
    slug: "mergers-and-acquisitions",
    title: "Mergers and acquisitions",
    group: "Structure & governance",
    summary:
      "Guiding clients through due diligence, negotiation, and transaction closing for seamless transitions and favorable outcomes.",
    description:
      "Whether you are buying, selling, or combining businesses, transactions move quickly and carry significant risk. We support due diligence, deal structuring, purchase agreements, disclosure schedules, and closing, coordinating with accountants and advisors so you understand what you are acquiring or transferring.",
    faqs: [
      {
        q: "Do you represent buyers and sellers?",
        a: "We act for both sides in private M&A matters, tailoring diligence and negotiation strategy to our client's role in the transaction.",
      },
      {
        q: "What does legal due diligence cover?",
        a: "We review contracts, employment matters, litigation risk, intellectual property, real property interests, and regulatory compliance material to the deal.",
      },
      {
        q: "How long does a typical small business acquisition take?",
        a: "Timelines vary, but many private transactions close within several weeks to a few months depending on complexity and financing.",
      },
    ],
  },
  {
    slug: "contract-drafting-and-review",
    title: "Contract drafting and review",
    group: "Contracts",
    summary:
      "Drafting, reviewing, and negotiating contracts and agreements of all types to protect your interests and minimize risks.",
    description:
      "Commercial agreements define how your business operates day to day. We draft and review service agreements, supply contracts, NDAs, licensing terms, and other commercial documents, focusing on clear obligations, risk allocation, and remedies when things do not go as planned.",
    faqs: [
      {
        q: "Should I sign a contract before a lawyer reviews it?",
        a: "We recommend review before signing. Early input often prevents costly disputes and identifies one-sided terms that can be negotiated.",
      },
      {
        q: "What types of contracts do you handle?",
        a: "We work on vendor and customer agreements, partnership terms, employment-related contracts, leases, and most commercial arrangements.",
      },
      {
        q: "Can you provide a fast turnaround for urgent deals?",
        a: "Yes. We prioritize commercial timelines and scope review to what matters most when time is limited.",
      },
    ],
  },
  {
    slug: "contract-negotiation",
    title: "Contract negotiation",
    group: "Contracts",
    summary:
      "Legal counsel ensuring agreements are legally sound, compliant with relevant laws, and aligned with your objectives.",
    description:
      "Negotiation is where commercial terms meet legal risk. We help you articulate priorities, propose practical revisions, and close agreements that reflect your business reality, not just boilerplate that favors the other side.",
    faqs: [
      {
        q: "Will you negotiate directly with the other party's lawyer?",
        a: "We can correspond with opposing counsel or support your team behind the scenes, depending on what works best for the relationship.",
      },
      {
        q: "What issues are most commonly negotiated?",
        a: "Liability caps, indemnities, termination rights, payment terms, intellectual property ownership, and service levels are frequent focus areas.",
      },
      {
        q: "Can you join negotiations on short notice?",
        a: "We regularly assist clients when deals are already in motion and terms need rapid legal assessment.",
      },
    ],
  },
  {
    slug: "contract-mediation",
    title: "Contract mediation",
    group: "Contracts",
    summary:
      "Facilitating dispute resolution through legally guided processes, promoting compliance and mitigating adversarial litigation.",
    description:
      "When a contractual relationship breaks down, mediation can preserve business relationships and control cost. We help parties clarify disputes, prepare for mediation, and reach workable settlements, with an eye on enforceability and future compliance.",
    faqs: [
      {
        q: "When is mediation preferable to litigation?",
        a: "Mediation often suits ongoing commercial relationships, discrete contract disputes, and matters where privacy and speed matter.",
      },
      {
        q: "Do you act as mediator or as counsel?",
        a: "We typically act as counsel to one party, advising on strategy, settlement terms, and documentation of any agreement reached.",
      },
      {
        q: "Can a mediated settlement be enforced?",
        a: "A properly drafted settlement agreement is contractually binding. We ensure terms are clear and complete.",
      },
    ],
  },
  {
    slug: "commercial-transactions",
    title: "Commercial transactions",
    group: "Transactions & growth",
    summary:
      "Advising on asset and stock purchases, joint ventures, licensing agreements, and distribution agreements.",
    description:
      "Growth often means new products, partners, or markets. We structure and document asset purchases, joint ventures, distribution and licensing deals, and other commercial transactions so rights, revenue, and responsibilities are clearly defined from day one.",
    faqs: [
      {
        q: "What is the difference between an asset and share purchase?",
        a: "An asset purchase transfers specific business assets and liabilities you choose. A share purchase acquires the company itself, including its existing obligations.",
      },
      {
        q: "Do you draft joint venture agreements?",
        a: "Yes. We help partners define contributions, governance, profit sharing, and exit mechanisms.",
      },
      {
        q: "Can you support transactions outside Ontario?",
        a: "We advise on cross-border elements and coordinate with local counsel where matters extend beyond Ontario.",
      },
    ],
  },
  {
    slug: "international-business",
    title: "International business",
    group: "Transactions & growth",
    summary:
      "Guidance on international trade, cross-border transactions, and global expansion, addressing legal and regulatory challenges.",
    description:
      "Operating across borders introduces customs, tax, regulatory, and contractual complexity. With experience in Ontario and Brazil, we help clients navigate cross-border trade, foreign investment structures, and international commercial agreements with practical, commercially minded advice.",
    faqs: [
      {
        q: "Do you advise on Brazil–Canada business matters?",
        a: "Our team includes dual-licensed experience in Ontario and Brazil, supporting clients with cross-border commercial needs.",
      },
      {
        q: "Can you review international distribution agreements?",
        a: "Yes. We assess governing law, exclusivity, compliance, payment, and termination provisions in cross-border arrangements.",
      },
      {
        q: "Do you work with foreign counsel?",
        a: "We coordinate with trusted local lawyers when matters require on-the-ground expertise outside our jurisdictions.",
      },
    ],
  },
  {
    slug: "real-estate-transactions",
    title: "Real estate transactions",
    group: "Transactions & growth",
    summary:
      "All aspects of property acquisitions, leasing, zoning, land use matters, and real estate development projects.",
    description:
      "Commercial property decisions commit capital for years. We assist with purchases and sales, commercial leasing, development agreements, and land use issues, aligning legal documentation with your financing, operational, and timeline requirements.",
    faqs: [
      {
        q: "Do you handle commercial leases for tenants and landlords?",
        a: "We advise both landlords and tenants on lease negotiation, renewals, assignments, and default remedies.",
      },
      {
        q: "Can you review an agreement of purchase and sale?",
        a: "Yes. We review conditions, representations, closing mechanics, and risk allocation before you commit.",
      },
      {
        q: "Do you assist with zoning or land use concerns?",
        a: "We advise on contractual and regulatory aspects and coordinate with specialists where municipal approvals are required.",
      },
    ],
  },
  {
    slug: "employment-and-labour-law",
    title: "Employment and labour law",
    group: "People & resolution",
    summary:
      "Comprehensive counsel on employment contracts, handbooks, non-compete agreements, and workplace dispute resolution.",
    description:
      "Your people policies affect liability, retention, and culture. We draft employment agreements, contractor arrangements, workplace policies, and restrictive covenants, and advise when disputes arise, with a focus on practical resolution and compliance with Ontario employment standards.",
    faqs: [
      {
        q: "Are non-compete clauses enforceable in Ontario?",
        a: "Enforceability depends on scope, duration, geography, and role. We draft and review restrictive covenants with current legal standards in mind.",
      },
      {
        q: "Can you help with terminations?",
        a: "We advise on notice, severance, documentation, and risk mitigation for both employer-initiated and negotiated departures.",
      },
      {
        q: "Do you draft employee handbooks?",
        a: "Yes. We prepare and update policies covering conduct, leave, confidentiality, and other core workplace topics.",
      },
    ],
  },
  {
    slug: "alternative-dispute-resolution",
    title: "Alternative dispute resolution",
    group: "People & resolution",
    summary:
      "Specialized mediation and arbitration methods to resolve conflicts efficiently and cost-effectively.",
    description:
      "Litigation is not always the right tool. We help clients evaluate mediation, arbitration, and negotiated settlement options, preparing cases, representing you in ADR processes, and drafting settlement terms that close matters with certainty.",
    faqs: [
      {
        q: "What is the difference between mediation and arbitration?",
        a: "Mediation is a facilitated negotiation; the mediator does not impose a decision. Arbitration results in a binding decision from an arbitrator, often with a more private process than court.",
      },
      {
        q: "Can ADR clauses be added to commercial contracts?",
        a: "Yes. We draft dispute resolution clauses specifying process, venue, and timing before conflicts arise.",
      },
      {
        q: "Do you represent clients in arbitration?",
        a: "We prepare submissions, manage procedure, and advocate for clients in arbitration and mediation settings.",
      },
    ],
  },
  {
    slug: "wills-and-estate",
    title: "Wills and estate",
    group: "People & resolution",
    summary:
      "Creating legally valid wills, strategic estate planning, probate, trust establishment, and estate tax planning.",
    description:
      "Estate planning protects your family and business interests after you are gone. We prepare wills and powers of attorney, advise on estate administration, and help business owners plan for succession and orderly transfer of assets.",
    faqs: [
      {
        q: "Do I need a will if I own a business?",
        a: "A will is especially important for business owners. It coordinates personal and business assets and can reduce uncertainty for partners and family.",
      },
      {
        q: "Can you assist executors with probate?",
        a: "Yes. We guide executors through court applications, asset gathering, and distribution in accordance with the will and applicable law.",
      },
      {
        q: "Do you prepare powers of attorney?",
        a: "We draft powers of attorney for property and personal care as part of a complete estate plan.",
      },
    ],
  },
];

export const SERVICE_GROUPS = SERVICES.reduce<
  { label: string; services: Service[] }[]
>((groups, service) => {
  const existing = groups.find((g) => g.label === service.group);
  if (existing) existing.services.push(service);
  else groups.push({ label: service.group, services: [service] });
  return groups;
}, []);

export const ALL_SERVICES = SERVICES.map((s) => s.title);

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
