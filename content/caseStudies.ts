export type CaseStudy = {
  slug: string;
  title: string;
  headline: string;
  metric: string;
  metricLabel: string;
  industry: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  lessons: string[];
  tags: string[];
  color: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mobile-banking",
    title: "Mobile Banking Transformation",
    headline: "$2.5B Transaction Volume Across 12 Countries",
    metric: "$2.5B",
    metricLabel: "Transaction Volume",
    industry: "Digital Banking · LatAm",
    challenge:
      "A major financial institution needed to migrate 2.5 million users across 12 Latin American countries to a new digital banking platform while maintaining 99.95% SLA, reducing time-to-market, and accelerating enterprise digital adoption at scale.",
    approach: [
      "Defined a phased migration strategy with country-by-country rollout to minimize risk exposure and enable rapid feedback loops.",
      "Established cross-functional squads aligned to customer journey stages rather than technical layers, accelerating autonomous decision-making.",
      "Introduced a shared OKR framework connecting delivery teams to business KPIs including transaction volume, NPS, and activation rates.",
      "Implemented a real-time operations dashboard providing leadership visibility into rollout health across all 12 markets.",
      "Coordinated regulatory compliance and localization requirements in parallel with platform delivery, removing the traditional sequencing bottleneck.",
    ],
    outcomes: [
      "Successfully migrated 2.5M users across 12 countries with zero critical incidents",
      "$2.5B in digital transaction volume within the first year post-launch",
      "183% NPS improvement vs. previous digital experience",
      "99.95% platform availability maintained throughout migration",
      "Delivery velocity increased by 40% through cross-functional squad model",
    ],
    lessons: [
      "Outcome-aligned squads outperform capability-based teams in complex multi-market programs.",
      "Shared visibility into real-time metrics removes political friction from cross-border initiatives.",
      "Regulatory complexity is manageable when embedded into delivery design from day one rather than treated as a gate.",
    ],
    tags: ["Digital Banking", "Platform Migration", "Product Strategy", "LatAm"],
    color: "#14b8a6",
  },
  {
    slug: "tokenization",
    title: "Tokenized Real Estate Platform",
    headline: "€470M in Assets Tokenized on a Regulated Platform",
    metric: "€470M",
    metricLabel: "Assets Tokenized",
    industry: "Digital Assets · Europe",
    challenge:
      "A financial innovation organization sought to tokenize real estate assets to democratize access to institutional-grade investments. The challenge was combining ERC-1400 security token standards with automated KYC/AML workflows while satisfying European regulatory requirements and reducing settlement times from days to minutes.",
    approach: [
      "Designed the product architecture around regulatory compliance as a first-class feature, not an afterthought, using ERC-1400 security token standards.",
      "Led discovery and validation with legal, compliance, and technical teams to define the minimum viable compliance framework before any development began.",
      "Coordinated a multi-disciplinary delivery team across blockchain engineering, legal, financial operations, and UX to align on a single product roadmap.",
      "Introduced automated KYC/AML workflow integration directly into the onboarding experience, eliminating manual intervention in routine cases.",
      "Designed the settlement infrastructure to leverage blockchain finality, reducing T+2 settlement cycles to near-instant confirmation.",
    ],
    outcomes: [
      "€470M in real estate assets tokenized on the platform",
      "94% reduction in settlement time vs. traditional processes",
      "Fully compliant with European financial regulations across three jurisdictions",
      "Automated KYC/AML processing reduced manual review workload by 78%",
      "Platform became a reference implementation cited by the ECB in wholesale CBDC research",
    ],
    lessons: [
      "In regulated markets, compliance embedded in product design is a competitive advantage, not a constraint.",
      "Settlement speed is a product feature — investors care as much about liquidity as yield.",
      "Cross-disciplinary alignment at the architecture phase prevents costly late-stage rework in regulatory contexts.",
    ],
    tags: ["Blockchain", "Tokenization", "Digital Assets", "RegTech"],
    color: "#6366f1",
  },
  {
    slug: "automation",
    title: "Operational Automation Program",
    headline: "90% Reduction in Operational Effort Through Intelligent Automation",
    metric: "90%",
    metricLabel: "Effort Reduction",
    industry: "Payments Operations",
    challenge:
      "A payments infrastructure company was experiencing unsustainable operational costs driven by high-volume manual reconciliation, exception handling, and compliance reporting. The organization needed to automate these workflows without disrupting live payment operations processing thousands of transactions per hour.",
    approach: [
      "Conducted an end-to-end operational audit to map every manual touchpoint, classify exceptions by frequency and resolution complexity, and prioritize automation opportunities by ROI.",
      "Designed an automation roadmap in three phases: quick wins targeting high-frequency, low-complexity tasks; intelligent exception handling using rules-based logic; and ML-augmented anomaly detection.",
      "Introduced a zero-disruption migration pattern that ran automated processes in shadow mode alongside manual operations before cut-over.",
      "Established operational KPIs including exception rate, auto-resolution rate, and SLA compliance as core product metrics tracked by leadership weekly.",
      "Built internal tooling that gave operations teams visibility and control over automated workflows, preserving human oversight for edge cases.",
    ],
    outcomes: [
      "90% reduction in manual operational effort within 6 months",
      "85% reduction in online fraud through automated detection",
      "Platform scaled to 50,000 TPS with no increase in operations headcount",
      "Exception auto-resolution rate reached 94%",
      "Operational cost reduction freed resources to accelerate product development",
    ],
    lessons: [
      "Automation that removes human oversight entirely creates fragility. Design for human-in-the-loop at the right escalation points.",
      "Shadow mode migration is slower but almost always worth it — it surfaces edge cases that cannot be discovered in testing alone.",
      "Operations teams embrace automation when they design it alongside engineers, not when it is deployed to them.",
    ],
    tags: ["Payments", "Automation", "Operational Excellence", "AI/ML"],
    color: "#f59e0b",
  },
  {
    slug: "ai-expansion",
    title: "AI-Driven Product Expansion",
    headline: "3.2x TAM Expansion Through AI-Powered Product Pivot",
    metric: "3.2x",
    metricLabel: "TAM Expansion",
    industry: "SaaS · AI Products",
    challenge:
      "A cybersecurity and data governance SaaS company had built strong product-market fit in a narrow vertical but was facing growth ceiling limitations. Leadership needed a validated strategy to expand the platform into adjacent markets using AI capabilities without destabilizing existing revenue.",
    approach: [
      "Ran a structured discovery program with 40+ customer interviews and competitive analysis to identify unmet jobs-to-be-done in adjacent segments.",
      "Used AI/ML capabilities already embedded in the platform as the foundation for new product hypotheses, avoiding greenfield development risk.",
      "Designed a three-horizon product roadmap: defend the core, extend into adjacencies, and explore new growth vectors — each with distinct success metrics.",
      "Facilitated executive alignment sessions to resolve competing priorities between existing customer commitments and new market investment.",
      "Introduced a validation-first development model using rapid prototypes and design sprints before any full engineering investment was committed.",
    ],
    outcomes: [
      "3.2x expansion of the addressable market through two adjacent product lines",
      "First new market segment reached paying customers within 4 months of pivot",
      "Existing customer retention maintained above 95% throughout the expansion",
      "Product roadmap received Series B investor validation as primary growth evidence",
      "AI feature adoption rate reached 68% among enterprise accounts within one year",
    ],
    lessons: [
      "Product expansion works best when built on existing technical assets, not alongside them.",
      "Validation velocity matters more than development velocity when entering unknown markets.",
      "Executive alignment is a product risk, not a soft skill — unresolved, it derails even well-designed strategies.",
    ],
    tags: ["SaaS", "AI Products", "Growth Strategy", "Product Expansion"],
    color: "#8b5cf6",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
