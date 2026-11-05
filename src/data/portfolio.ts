export const personalInfo = {
  name: "Shrayanshi Tomar",
  title: "Product Manager & AI Enthusiast",
  subtitle: "MEM @ Duke University | Ex-SpiceJet | Building AI-native products",
  tagline: "I build products users love — from zero to launch.",
  email: "shrayanshi.tomar@gmail.com",
  linkedin: "https://linkedin.com/in/shrayanshi-tomar",
  phone: "+91-7017744354",
  location: "Durham, NC",
  bio: "Software engineer turned product manager, now in Duke's MEM program. I've shipped AI features, led cross-functional teams, and obsess over the intersection of great UX and business impact. I'm targeting PM, AI PM, and TPM internships at big tech companies for Summer 2027.",
};

export const stats = [
  { value: "3+", label: "Years of Experience", icon: "briefcase" },
  { value: "120+", label: "Lab Partners Served", icon: "users" },
  { value: "6000+", label: "Pincodes Reached", icon: "map" },
  { value: "20%", label: "Dev Time Reduced", icon: "zap" },
  { value: "10%", label: "User Growth Driven", icon: "trending-up" },
  { value: "30%", label: "Downtime Reduced", icon: "shield" },
];

export const experiences = [
  {
    company: "Edpi Innovate",
    role: "Founding Product Engineer",
    type: "Full-time",
    period: "July 2025 – June 2026",
    location: "Noida, India",
    color: "#6366f1",
    highlights: [
      "Joined as founding team member building an all-in-one school ERP; conducted competitive analysis across fee management, attendance, and governance modules — translating findings into roadmap priorities.",
      "Owned delivery of a conversational AI chatbot and global search for the Institutional Governance System; defined requirements, drove cross-functional alignment, and shipped both features on schedule.",
      "Identified onboarding friction via stakeholder interviews; shipped voice-to-chat integration and interactive data tables, reducing manual administrator effort.",
    ],
  },
  {
    company: "SpiceJet Limited",
    role: "UI Developer",
    type: "Full-time",
    period: "July 2024 – July 2025",
    location: "Gurugram, India",
    color: "#f59e0b",
    highlights: [
      "Owned product roadmap for Flebo, a healthcare platform serving 120+ lab partners across 6,000+ pincodes; drove UI improvements that directly impacted booking conversion and user retention.",
      "Led AI Reports feature from concept to launch — partnered with data science and backend teams to deliver ML-driven health insights and personalized recommendations in the patient app.",
      "Reduced booking drop-off with automated reminder UX; managed release cycles across engineering, design, and QA.",
      "Resolved critical payment/wallet bugs prioritized by user-impact severity.",
    ],
  },
  {
    company: "Rapipay Fintech Pvt. Ltd.",
    role: "Software Engineer → Product Engineering Intern",
    type: "Full-time",
    period: "Jan 2023 – Apr 2024",
    location: "Noida, India",
    color: "#10b981",
    highlights: [
      "Built shared React component library across 10+ apps, cutting dev time by ~20%; shipped Mutual Funds platform contributing to 10% user growth in 6 months.",
      "Created 15+ components for a cross-platform (Web/Android/iOS) SDUI framework; owned micro-frontend modules end-to-end within NYE, a digital banking super-app.",
      "Reduced system downtime by ~30% across multiple sub-applications through performance optimization and code reviews.",
    ],
  },
];

export const education = [
  {
    school: "Duke University",
    degree: "Master of Engineering Management (MEM)",
    period: "Aug 2026 – May 2028 (expected)",
    location: "Durham, NC",
    details: "In progress",
    courses: ["AI Product Management", "Finance", "Marketing", "Design Thinking & Innovation"],
    clubs: ["Women in Tech", "Product Management Club", "Teaching Assistant"],
    color: "#003087",
  },
  {
    school: "Bennett University",
    degree: "B.Tech, Computer Science",
    period: "July 2019 – June 2023",
    location: "Noida, India",
    details: "GPA: 8.57 / 10",
    courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
    clubs: [],
    color: "#dc2626",
  },
];

export const projects = [
  {
    slug: "ai-question-builder",
    title: "AI Question Builder",
    tagline: "AI-powered question generation for classrooms",
    description:
      "Designed and shipped an AI question-generation tool adopted by 4 local schools. Ran user feedback loops with teachers and administrators, iterated on classroom usage data, and actively managed the roadmap for 2026 expansion.",
    period: "Nov 2025 – Feb 2026",
    status: "Live",
    tags: ["AI Product", "EdTech", "Roadmapping", "User Research"],
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    metrics: [
      { value: "4", label: "Schools Adopted" },
      { value: "3", label: "Feedback Iterations" },
      { value: "2026", label: "Roadmap Active" },
    ],
    tools: ["Claude Code", "Cursor", "Figma AI", "Gemini", "React", "Next.js"],
    prd: {
      problem:
        "Teachers spend 3–5 hours per week manually creating assessments. Existing tools are generic and don't align to curriculum objectives, forcing extra editing work.",
      users: [
        { persona: "Classroom Teachers", pain: "Time-consuming question creation not aligned to syllabus" },
        { persona: "School Administrators", pain: "No visibility into assessment quality or coverage gaps" },
        { persona: "Students", pain: "Repetitive, low-quality questions that don't test deep understanding" },
      ],
      solution:
        "An AI-native tool that generates curriculum-aligned questions from uploaded lesson content in seconds, with teacher-in-the-loop editing, difficulty controls, and export to popular formats.",
      goals: [
        "Reduce assessment creation time by 70%",
        "Achieve 80% teacher satisfaction rate within 3 months",
        "Expand to 20 schools by end of 2026",
      ],
      features: [
        { name: "Upload & Parse", description: "Upload PDFs, slides, or paste content; AI parses and extracts key concepts" },
        { name: "Smart Generation", description: "Generate MCQ, short answer, and essay questions with adjustable difficulty" },
        { name: "Curriculum Alignment", description: "Tag questions to learning objectives and Bloom's taxonomy levels" },
        { name: "Analytics Dashboard", description: "Track question usage, teacher edits, and coverage gaps (roadmap)" },
        { name: "Multi-format Export", description: "Export to Google Forms, Word, and PDF (roadmap)" },
      ],
      outcomes:
        "Adopted by 4 local schools, with positive feedback from teachers citing significant time savings. Roadmap for 2026 includes analytics dashboard, curriculum alignment scoring, and multi-format export.",
    },
  },
  {
    slug: "flebo-ai-reports",
    title: "Flebo AI Reports",
    tagline: "ML-driven health insights for 6000+ pincodes",
    description:
      "Led the AI Reports feature end-to-end at SpiceJet's healthcare platform — from concept through launch. Integrated ML-driven health insights into the patient frontend, enabling personalized test result analysis and doctor recommendations.",
    period: "2024 – 2025",
    status: "Shipped",
    tags: ["AI PM", "HealthTech", "ML Integration", "Cross-functional"],
    color: "#f59e0b",
    gradient: "from-amber-400 to-orange-500",
    metrics: [
      { value: "120+", label: "Lab Partners" },
      { value: "6000+", label: "Pincodes" },
      { value: "↑", label: "Booking Conversion" },
    ],
    tools: ["React", "Redux", "SCSS", "REST APIs", "Figma"],
    prd: {
      problem:
        "Patients receiving lab results had no context to understand their health data. 60%+ of post-test calls were basic interpretation questions, overwhelming the support team and reducing platform NPS.",
      users: [
        { persona: "Patients", pain: "Confusing lab results with no actionable guidance" },
        { persona: "Support Team", pain: "High volume of post-result interpretation calls" },
        { persona: "Doctors", pain: "Patients arriving for consultations without context on their results" },
      ],
      solution:
        "Integrate ML-powered health insights directly into the patient's result view — surfacing plain-language summaries, trend analysis, and personalized doctor recommendations based on result patterns.",
      goals: [
        "Reduce post-result support calls by 30%",
        "Increase patient satisfaction score for result experience",
        "Drive 15% increase in follow-up consultation bookings",
      ],
      features: [
        { name: "Plain-language Summaries", description: "AI converts complex lab values into patient-friendly explanations" },
        { name: "Trend Analysis", description: "Compare current results against past tests to show trajectory" },
        { name: "Doctor Recommendations", description: "Suggest relevant specialists based on flagged biomarkers" },
        { name: "Interactive PDF Reports", description: "Downloadable, visually rich report with insights embedded" },
        { name: "Risk Flagging", description: "Highlight out-of-range values with severity indicators" },
      ],
      outcomes:
        "Successfully launched across the platform serving 120+ lab partners and 6,000+ pincodes. Directly impacted booking conversion and user retention metrics. Managed full release cycle across engineering, data science, and QA.",
    },
  },
  {
    slug: "school-erp-igs",
    title: "School ERP — IGS",
    tagline: "Zero-to-one governance system for school institutions",
    description:
      "As a founding team member at Edpi Innovate, led product discovery and delivery for an Institutional Governance System (IGS) — a core module of an all-in-one school ERP. Ran competitive analysis, defined roadmap priorities, and shipped AI chatbot + global search.",
    period: "2025 – 2026",
    status: "Shipped",
    tags: ["0-to-1", "EdTech", "ERP", "AI Chatbot"],
    color: "#10b981",
    gradient: "from-emerald-400 to-teal-500",
    metrics: [
      { value: "0→1", label: "Product Built" },
      { value: "2", label: "Core Features Shipped" },
      { value: "↓", label: "Admin Effort" },
    ],
    tools: ["React", "Next.js", "TypeScript", "Claude API", "Figma", "Jira"],
    prd: {
      problem:
        "School administrators manage governance tasks (compliance, approvals, document management) across 5+ disconnected tools, leading to data silos, missed deadlines, and poor visibility into institutional health.",
      users: [
        { persona: "School Administrators", pain: "Fragmented tools, manual processes, no single source of truth" },
        { persona: "Teachers", pain: "Difficulty finding relevant governance documents and approvals" },
        { persona: "School Leadership", pain: "No real-time dashboard for institutional compliance and task status" },
      ],
      solution:
        "A unified Institutional Governance System with AI-powered search, conversational chatbot for task navigation, and streamlined onboarding workflows — all integrated into the school ERP.",
      goals: [
        "Reduce administrator task discovery time by 50%",
        "Achieve 90% onboarding completion rate for new schools",
        "Cut manual data entry effort by 40%",
      ],
      features: [
        { name: "AI Chatbot", description: "Conversational interface built with React/Next.js integrating backend AI models for dynamic workflow navigation" },
        { name: "Global Search", description: "Instant filtering with contextual navigation improving task discovery across all modules" },
        { name: "Voice-to-Chat", description: "Voice input integration reducing manual administrator data entry" },
        { name: "Interactive Data Tables", description: "Sortable, filterable tables with attachment viewer for governance documents" },
        { name: "Onboarding Flows", description: "Step-by-step school onboarding with progress tracking and validation" },
      ],
      outcomes:
        "Shipped AI chatbot and global search on schedule as a founding team member. Voice-to-chat integration reduced manual administrator effort. Competitive analysis translated directly into roadmap differentiation for the early-stage product.",
    },
  },
  {
    slug: "ask-data-trust-layer",
    title: "Ask-Data Trust Layer",
    tagline: "Natural-language analytics that refuses to guess",
    description:
      "A trust-first \"talk to your warehouse\" prototype. Built a governed semantic model, a database-level policy guard, and an evaluation harness that measures silent errors, not just accuracy — cutting confident wrong answers from 79% to 5% versus a naive baseline.",
    period: "Nov 2026",
    status: "Prototype",
    tags: ["AI PM", "Data / Analytics", "Evaluation", "Governance"],
    color: "#0ea5e9",
    gradient: "from-sky-400 to-blue-600",
    metrics: [
      { value: "79→5%", label: "Silent-Error Rate" },
      { value: "97%", label: "Exec. Accuracy" },
      { value: "0%", label: "Over-refusal" },
    ],
    tools: ["Python", "SQLite", "SQL", "Claude API", "HTML / JS"],
    prd: {
      problem:
        "Business users have questions that live in the data warehouse but depend on an analyst to write SQL. Natural-language-to-SQL demos look magical, but adoption stalls on one failure: a confident wrong answer. One wrong number in a QBR and users stop asking.",
      users: [
        { persona: "Business Analysts / RevOps", pain: "Waiting on analysts; inconsistent metric definitions across teams" },
        { persona: "Data Governance Owners", pain: "Fear of ungoverned AI access exposing PII or inventing metrics" },
        { persona: "Data Engineers", pain: "Acting as the human SQL API for ad hoc requests" },
      ],
      solution:
        "A semantic layer that resolves business terms to governed definitions and shows its assumptions, an engine that abstains on PII, writes, causal questions and undefined metrics, and policy enforced in the database authorizer so any engine — rules or LLM — inherits it.",
      goals: [
        "Make silent-error rate the north-star metric, tracked alongside accuracy",
        "Keep over-refusal at 0% so safety doesn't cost usefulness",
        "Gate release on silent-error rate below 2% on a customer's own eval set",
      ],
      features: [
        { name: "Semantic Model", description: "Governed metrics, dimensions and synonyms; every answer states the definition it used" },
        { name: "Policy Guard", description: "Read-only access, table allow-list, and PII columns blocked even through SELECT *" },
        { name: "Graceful Abstention", description: "Explains why it won't answer instead of guessing" },
        { name: "Eval Harness", description: "38 hand-written questions with independent gold SQL, scored on result-set match" },
        { name: "Scorecard UI", description: "Task success, silent errors, over-refusal and latency, with the SQL behind every answer" },
      ],
      outcomes:
        "Versus a keyword baseline: silent-error rate 79% → 5%, execution accuracy 17% → 97%, with 0% over-refusal. The eval set is small and author-written, so these numbers validate the harness rather than claim a benchmark; the two remaining failures (ratio metrics, trend questions) are next on the roadmap.",
    },
  },
  {
    slug: "phishing-triage-assistant",
    title: "Phishing Triage Assistant",
    tagline: "Turning every \"report phishing\" click into a lesson",
    description:
      "A deployable prototype of a \"report this email\" feature for security awareness. Users paste a suspicious message and get a verdict, the specific reasons, where each link really goes, and a short lesson — and it never reassures without evidence.",
    period: "Nov 2026",
    status: "Prototype",
    tags: ["AI Safety", "Security UX", "Evaluation", "Explainability"],
    color: "#f43f5e",
    gradient: "from-rose-500 to-pink-600",
    metrics: [
      { value: "43→9%", label: "Missed Threats" },
      { value: "91%", label: "Threats Flagged" },
      { value: "0%", label: "False Alarms" },
    ],
    tools: ["Python", "Docker", "Render", "HTML / JS"],
    prd: {
      problem:
        "Employees who report suspicious emails rarely learn anything from it, and simple filters either miss look-alike threats or falsely reassure. A tool that says \"looks fine\" without evidence trains people to trust the wrong messages.",
      users: [
        { persona: "Employees", pain: "Unsure whether an email is safe and don't know which signs to look for" },
        { persona: "Security Awareness Teams", pain: "Reports pile up without becoming teaching moments" },
        { persona: "SOC Analysts", pain: "Triage time spent on reports a clear explanation could resolve" },
      ],
      solution:
        "An explainable triage engine that checks look-alike domains, display-name and reply-to mismatches, deceptive links, risky attachments, urgency and credential requests — returning a three-level verdict with reasons and a plain-language lesson for each sign.",
      goals: [
        "Never rate a message safe without evidence; send uncertain cases to review",
        "Cut missed-threat rate well below a keyword baseline",
        "Keep false alarms on legitimate mail at 0%",
      ],
      features: [
        { name: "Three-level Verdict", description: "Likely phishing, check before you trust it, or no clear warning signs" },
        { name: "Link X-ray", description: "Shows where each link really goes versus what its text claims" },
        { name: "Teach-back Lessons", description: "Every flagged sign comes with what to look for next time" },
        { name: "Privacy by Design", description: "Messages analysed in memory, never stored; links never fetched; rate-limited" },
        { name: "Eval Scorecard", description: "44 labelled messages scored against a keyword-only baseline" },
      ],
      outcomes:
        "Missed-threat rate dropped from 43.5% to 8.7% versus a keyword baseline, with 0% false alarms on legitimate mail and every ambiguous message sent to review. Two residual misses (a compromised internal account, pure social engineering) are kept visible to show the limits of content-only rules.",
    },
  },
];

export const skills = {
  product: [
    "Roadmapping", "PRD Development", "User Stories", "Competitive Analysis",
    "A/B Testing", "OKRs", "Agile / Scrum", "Stakeholder Management",
    "GTM Strategy", "Design Thinking", "User Research", "Feature Prioritization",
  ],
  aiTechnical: [
    "LLM Integration", "AI Product Design", "Prompt Engineering", "RAG", "LLM Evaluation",
    "React / Next.js", "TypeScript", "Python", "SQL", "REST APIs",
    "FastAPI", "Redux", "Docker",
  ],
  tools: [
    "Figma", "Jira", "Confluence", "Notion", "Claude Code", "Cursor",
    "n8n", "Zapier", "Tableau", "AWS", "Postman", "Git",
  ],
};

export const certifications = [
  "AWS Academy Graduate",
  "Microsoft Azure Administrator Associate",
  "Hello PM — AI Product Management",
  "The Web Developer Bootcamp (Colt Steele)",
  "FreeCodeCamp Responsive Web Design",
];
