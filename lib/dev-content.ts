export const DEV_CONTENT = {
  hero: {
    headline: "Understand any codebase instantly.",
    subheadline: "Ask your repo anything — get clear AI explanations, architecture maps, and documentation in minutes.",
    primaryCTA: "Start Free Trial",
    communityCTA: "Join Community",
    trustBadges: ["Works offline", "File/line citations", "Privacy-first"],
    speedMetrics: [
      { value: "<5min", label: "First insight" },
      { value: "<10min", label: "Full repo overview" },
      { value: "100%", label: "Offline capable" },
    ],
    socialMetrics: [
      { value: "5 min", label: "Average Analysis Time" },
      { value: "10K+", label: "Lines Processed Daily" },
      { value: "500+", label: "Active Developers" },
    ],
  },
  story: {
    title: "Why we built VirgilDev",
    content:
      "As developers, we've all inherited legacy codebases that felt impossible to understand. Documentation is outdated, the original team is gone, and every change feels like defusing a bomb. We built VirgilDev to turn that fear into confidence — giving you AI-powered insights that help you understand, modernize, and maintain any codebase with ease.",
  },
  differentiation: {
    title: "What makes VirgilDev different",
    features: [
      {
        title: "Modernization-focused",
        description: "Not just documentation — we show you how to modernize and refactor with AI assistance",
      },
      {
        title: "AI-readable output",
        description: "Generate architecture maps that AI tools can use to help you refactor and improve code",
      },
      {
        title: "Privacy-first architecture",
        description: "Works 100% offline in Free mode — your code never leaves your machine",
      },
      {
        title: "Any language, any framework",
        description: "Polyglot support for all major programming languages and frameworks",
      },
      {
        title: "Context-aware answers",
        description: "Get explanations with file/line citations from across your entire project",
      },
      {
        title: "Built for developers",
        description: "Web app and CLI tools — use it however you work",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    subtitle: "Simple three-step process to get AI-powered insights from any codebase.",
    steps: [
      {
        number: "1",
        title: "Index",
        description:
          "VirgilDev analyzes your repository, mapping relationships between files, functions, and components",
      },
      {
        number: "2",
        title: "Overview",
        description: "Get a comprehensive project summary and architecture map based on the complete codebase",
      },
      {
        number: "3",
        title: "Ask",
        description:
          "Ask questions and get detailed explanations with relevant code snippets and modernization suggestions",
      },
    ],
  },
  example: {
    title: "See VirgilDev in action",
    subtitle: "Real example: Understanding React's component lifecycle",
    repository: "facebook/react",
    question: "How does React handle component lifecycle?",
    finds: [
      "Relevant code from ReactComponent.js",
      "Hook implementations in ReactFiberHooks.js",
      "Commit phase logic in ReactFiberCommitWork.js",
    ],
    generates:
      "Comprehensive explanation of the lifecycle system with code examples from all relevant files, plus suggestions for modernizing class components to hooks",
  },
  problem: {
    title: "You spend half your time trying to understand code you didn't write.",
    bullets: [
      { icon: "FileQuestion", text: "Outdated or missing documentation" },
      { icon: "Network", text: "Confusing dependencies and architecture" },
      { icon: "AlertTriangle", text: "Fear of breaking things you can't see" },
      { icon: "Clock", text: "Slow onboarding for new repos or teams" },
    ],
  },
  solution: {
    title: "Your AI pair architect — built for code understanding.",
    cards: [
      {
        title: "Ask Your Repo Anything",
        description: "Chat with your codebase; get answers with citations.",
        icon: "MessageSquare",
      },
      {
        title: "Instant Code Maps",
        description: "See modules and dependencies at a glance.",
        icon: "GitBranch",
      },
      {
        title: "Auto Documentation",
        description: "Generate and update docs as you code.",
        icon: "FileText",
      },
    ],
  },
  demo: {
    title: "See VirgilDev in action.",
    caption: "First insight in under 5 minutes.",
  },
  featuresSection: {
    title: "Powerful features for every developer",
    subtitle: "Everything you need to understand, navigate, and modernize any codebase.",
  },
  features: [
    { title: "Smart Q&A", description: "Ask questions, get instant answers with file citations" },
    { title: "Code Explorer", description: "Navigate complex codebases with AI-powered insights" },
    { title: "Repo Overview", description: "Understand architecture and dependencies instantly" },
    { title: "Privacy Mode", description: "Works 100% offline — your code never leaves your machine" },
    { title: "Impact Analyzer", description: "See what changes affect before you commit" },
    { title: "Docs Generator", description: "Auto-generate and maintain documentation" },
  ],
  pricing: {
    title: "Start free. Upgrade when you're ready.",
    note: "No hidden fees • Cancel anytime • Works offline • Your code never leaves your control",
    plans: [
      {
        name: "Starter",
        price: "Free",
        period: "forever",
        badge: "Popular",
        features: ["1 repository", "Local-only processing", "AI Q&A", "File explainers", "Basic code navigation"],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "$15",
        period: "/month",
        badge: "Best Value",
        features: [
          "Unlimited repositories",
          "Architecture maps",
          "Auto documentation",
          "Faster AI responses",
          "Priority support",
          "Cloud sync (encrypted)",
        ],
        cta: "Start Pro Trial",
        highlighted: true,
      },
      {
        name: "Team",
        price: "$99",
        period: "/month",
        badge: "For Teams",
        features: [
          "Everything in Pro",
          "Shared workspace",
          "PR summaries",
          "Collaboration tools",
          "Team analytics",
          "SSO & admin controls",
        ],
        cta: "Contact Sales",
        highlighted: false,
      },
    ],
  },
  socialProof: {
    title: "Built by developers. Loved by developers.",
    testimonials: [
      {
        quote: "VirgilDev cut our onboarding time from weeks to days. New devs are productive immediately.",
        author: "Sarah Chen",
        role: "Engineering Lead",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      {
        quote: "Finally, a tool that actually understands my codebase. The architecture maps are a game-changer.",
        author: "Marcus Rodriguez",
        role: "Senior Developer",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      {
        quote: "Privacy-first and works offline. Exactly what we needed for our enterprise codebase.",
        author: "Alex Kim",
        role: "CTO",
        avatar: "/placeholder.svg?height=48&width=48",
      },
    ],
  },
  security: {
    title: "Your code. Your data. Your control.",
    bullets: [
      "Works 100% offline in Free mode",
      "No training on your code by default",
      "Encrypted cloud sync for Pro",
      "Transparent logs and privacy policy",
    ],
  },
  faq: [
    {
      question: "Does this work with multiple languages?",
      answer:
        "Yes, VirgilDev is polyglot and works with all major programming languages. We focus on common stacks and are continually expanding language support.",
    },
    {
      question: "Is it secure?",
      answer:
        "Absolutely. The Free tier works 100% offline — your code never leaves your machine. Pro users can opt into encrypted cloud sync. We never train on your code by default.",
    },
    {
      question: "What if I don't find value?",
      answer:
        "Stay on the Free tier forever, or cancel Pro anytime with no questions asked. We only win if you find real value.",
    },
    {
      question: "How fast can I get value?",
      answer: "Sign up in under 2 minutes, get your first answer in seconds, and have a full repo overview in minutes.",
    },
  ],
  finalCTA: {
    title: "Understand any codebase instantly — free forever.",
    primaryCTA: "Start Free Trial",
    communityCTA: "Join Community",
    badge: "Early Access — first 500 users get Lifetime Pro.",
  },
}
