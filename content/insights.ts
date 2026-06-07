export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "why-most-ai-initiatives-fail",
    title: "Why Most AI Initiatives Fail Before Delivering Business Value",
    excerpt:
      "The failure mode is rarely technical. It is almost always a strategy and operating model problem dressed up as a technology problem.",
    category: "AI & Transformation",
    date: "2026-04-10",
    readTime: "6 min",
    body: [
      "Most AI initiatives fail not because the models are wrong, but because the organization around the model is unprepared. Teams are asked to integrate AI into workflows they have not yet mapped, governed by metrics they cannot yet measure, owned by people who were not part of the decision.",
      "The pattern is consistent: a leadership team sees a competitor announce an AI initiative, initiates a pilot, generates impressive demos, and then discovers that scaling the pilot requires redesigning the operating model — something nobody budgeted for.",
      "Before an organization can extract value from AI, it needs four things that have nothing to do with technology: clear ownership of AI-enabled decisions, quality thresholds that define what 'good enough' means for automation, escalation paths for edge cases, and measurement systems that connect AI activity to business outcomes.",
      "The useful frame is not where AI can be inserted into existing processes. The useful frame is which processes should change shape now that judgment, generation, and analysis can move faster. That is a strategy question. And most organizations are still treating it as an engineering question.",
      "AI value is not delivered by the model. It is delivered by the redesigned workflow, the changed incentive, the new feedback loop. The model is an input. The operating model is the product.",
    ],
  },
  {
    slug: "product-strategy-is-not-roadmap-management",
    title: "Product Strategy Is Not Roadmap Management",
    excerpt:
      "A roadmap is a communication tool. Strategy is a set of choices about where to compete and how to win. Confusing the two is one of the most expensive mistakes a product organization can make.",
    category: "Product Strategy",
    date: "2026-03-14",
    readTime: "5 min",
    body: [
      "The most common misdiagnosis in product organizations is treating a prioritization problem as a strategy problem, or a strategy problem as a roadmap problem. The three are related but distinct, and solving the wrong one first is expensive.",
      "A roadmap is a communication tool. It shows stakeholders what the team is building and approximately when. Done well, it creates alignment. Done poorly, it creates the illusion of alignment while actual disagreements about priorities remain unresolved.",
      "Strategy is a different thing entirely. It is a set of explicit choices: which customers to serve, which problems to solve, which capabilities to build, and — critically — which opportunities to decline. The hardest strategic decisions are not what to add. They are what to say no to.",
      "The signal that a team is roadmapping instead of strategizing is usually visible in the review meeting. If every stakeholder's request ends up on the roadmap somewhere, the team has not made choices. It has made a list.",
      "Good product strategy requires leadership to accept constraint. To say: we will not pursue that market this year. We will not build that feature. We will not serve that customer segment. Those constraints are not failures of ambition. They are the foundation that makes execution possible.",
    ],
  },
  {
    slug: "transformation-is-an-alignment-problem",
    title: "Transformation Is an Alignment Problem, Not a Technology Problem",
    excerpt:
      "Every failed transformation I have observed had adequate technology. None of them had adequate alignment. The technology was never the bottleneck.",
    category: "Digital Leadership",
    date: "2026-02-20",
    readTime: "7 min",
    body: [
      "Organizations invest heavily in the technology layer of transformation — new platforms, automation tools, AI capabilities, cloud migration — and underinvest systematically in the alignment layer. This is a predictable failure mode.",
      "Alignment is not agreement. You can run a room-full-of-nods workshop and leave with zero alignment. Alignment means that when someone in a delivery team faces a decision about trade-offs — speed vs. quality, scope vs. timeline, customer need vs. internal constraint — they know what to choose because the strategy has been made explicit.",
      "The most expensive symptom of misalignment is rework. A delivery team builds something technically correct but strategically wrong. The rework is treated as a technical failure when it is actually a communication failure. The cost is not just time and money. It is motivation.",
      "What I have found works across organizations of different sizes and maturity levels is establishing a small number of explicit strategic bets — three to five at most — and ensuring that every initiative can be traced to one of them. If it cannot, the initiative needs a different justification or a different home.",
      "Transformation programs that succeed share one characteristic that has nothing to do with technology: leadership that is willing to say clearly what they will stop doing, not only what they will start doing. That clarity is the actual foundation of alignment.",
    ],
  },
  {
    slug: "hidden-cost-of-roadmap-overload",
    title: "The Hidden Cost of Roadmap Overload",
    excerpt:
      "When everything is a priority, nothing gets the attention it deserves. Roadmap overload is not a capacity problem. It is a decision-making deficit.",
    category: "Product Strategy",
    date: "2026-01-28",
    readTime: "4 min",
    body: [
      "The most common request I receive from product leaders is help with prioritization. Teams are overwhelmed, backlogs are enormous, and stakeholders are dissatisfied despite the team working at capacity. The problem looks like a resource problem. It is almost always a decision-making problem.",
      "Roadmap overload happens when teams lack a clear framework for saying no. Without that framework, every incoming request gets added because the cost of adding is zero and the cost of declining feels high. The actual cost is the opposite: declining a low-impact request costs nothing. Carrying it through the development cycle costs significantly.",
      "The discipline required is not more sophisticated prioritization frameworks. It is leadership willing to make and defend hard choices. A roadmap with forty items is not a strategy. It is an inventory.",
      "Teams that consistently deliver meaningful outcomes share one practice: they are ruthless about scope. Not because they do not care about the things they cut, but because they understand that diluted focus produces diluted outcomes. Excellence requires constraint.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
