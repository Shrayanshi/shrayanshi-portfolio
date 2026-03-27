module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/data/portfolio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certifications",
    ()=>certifications,
    "education",
    ()=>education,
    "experiences",
    ()=>experiences,
    "personalInfo",
    ()=>personalInfo,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats
]);
const personalInfo = {
    name: "Shrayanshi Tomar",
    title: "Product Manager & AI Enthusiast",
    subtitle: "MEM @ Duke University | Ex-SpiceJet | Building AI-native products",
    tagline: "I build products users love — from zero to launch.",
    email: "shrayanshi.tomar@gmail.com",
    linkedin: "https://linkedin.com/in/shrayanshi-tomar",
    phone: "+91-7017744354",
    location: "Durham, NC (starting Aug 2026)",
    bio: "Software engineer turned product manager, joining Duke's MEM program this August. I've shipped AI features, led cross-functional teams, and obsess over the intersection of great UX and business impact. I'm targeting PM, AI PM, and TPM internships at big tech companies."
};
const stats = [
    {
        value: "3+",
        label: "Years of Experience",
        icon: "briefcase"
    },
    {
        value: "120+",
        label: "Lab Partners Served",
        icon: "users"
    },
    {
        value: "6000+",
        label: "Pincodes Reached",
        icon: "map"
    },
    {
        value: "20%",
        label: "Dev Time Reduced",
        icon: "zap"
    },
    {
        value: "10%",
        label: "User Growth Driven",
        icon: "trending-up"
    },
    {
        value: "30%",
        label: "Downtime Reduced",
        icon: "shield"
    }
];
const experiences = [
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
            "Identified onboarding friction via stakeholder interviews; shipped voice-to-chat integration and interactive data tables, reducing manual administrator effort."
        ]
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
            "Resolved critical payment/wallet bugs prioritized by user-impact severity."
        ]
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
            "Reduced system downtime by ~30% across multiple sub-applications through performance optimization and code reviews."
        ]
    }
];
const education = [
    {
        school: "Duke University",
        degree: "Master of Engineering Management (MEM)",
        period: "Expected May 2028",
        location: "Durham, NC",
        details: "Starting August 2026",
        courses: [
            "AI Product Management",
            "Finance",
            "Marketing",
            "Design Thinking & Innovation"
        ],
        clubs: [
            "Women in Tech",
            "Product Management Club",
            "Teaching Assistant"
        ],
        color: "#003087"
    },
    {
        school: "Bennett University",
        degree: "B.Tech, Computer Science",
        period: "July 2019 – June 2023",
        location: "Noida, India",
        details: "GPA: 8.57 / 10",
        courses: [
            "Data Structures",
            "Algorithms",
            "Database Systems",
            "Software Engineering"
        ],
        clubs: [],
        color: "#dc2626"
    }
];
const projects = [
    {
        slug: "ai-question-builder",
        title: "AI Question Builder",
        tagline: "AI-powered question generation for classrooms",
        description: "Designed and shipped an AI question-generation tool adopted by 4 local schools. Ran user feedback loops with teachers and administrators, iterated on classroom usage data, and actively managed the roadmap for 2026 expansion.",
        period: "Nov 2025 – Feb 2026",
        status: "Live",
        tags: [
            "AI Product",
            "EdTech",
            "Roadmapping",
            "User Research"
        ],
        color: "#6366f1",
        gradient: "from-indigo-500 to-purple-600",
        metrics: [
            {
                value: "4",
                label: "Schools Adopted"
            },
            {
                value: "3",
                label: "Feedback Iterations"
            },
            {
                value: "2026",
                label: "Roadmap Active"
            }
        ],
        tools: [
            "Claude Code",
            "Cursor",
            "Figma AI",
            "Gemini",
            "React",
            "Next.js"
        ],
        prd: {
            problem: "Teachers spend 3–5 hours per week manually creating assessments. Existing tools are generic and don't align to curriculum objectives, forcing extra editing work.",
            users: [
                {
                    persona: "Classroom Teachers",
                    pain: "Time-consuming question creation not aligned to syllabus"
                },
                {
                    persona: "School Administrators",
                    pain: "No visibility into assessment quality or coverage gaps"
                },
                {
                    persona: "Students",
                    pain: "Repetitive, low-quality questions that don't test deep understanding"
                }
            ],
            solution: "An AI-native tool that generates curriculum-aligned questions from uploaded lesson content in seconds, with teacher-in-the-loop editing, difficulty controls, and export to popular formats.",
            goals: [
                "Reduce assessment creation time by 70%",
                "Achieve 80% teacher satisfaction rate within 3 months",
                "Expand to 20 schools by end of 2026"
            ],
            features: [
                {
                    name: "Upload & Parse",
                    description: "Upload PDFs, slides, or paste content; AI parses and extracts key concepts"
                },
                {
                    name: "Smart Generation",
                    description: "Generate MCQ, short answer, and essay questions with adjustable difficulty"
                },
                {
                    name: "Curriculum Alignment",
                    description: "Tag questions to learning objectives and Bloom's taxonomy levels"
                },
                {
                    name: "Analytics Dashboard",
                    description: "Track question usage, teacher edits, and coverage gaps (roadmap)"
                },
                {
                    name: "Multi-format Export",
                    description: "Export to Google Forms, Word, and PDF (roadmap)"
                }
            ],
            outcomes: "Adopted by 4 local schools, with positive feedback from teachers citing significant time savings. Roadmap for 2026 includes analytics dashboard, curriculum alignment scoring, and multi-format export."
        }
    },
    {
        slug: "flebo-ai-reports",
        title: "Flebo AI Reports",
        tagline: "ML-driven health insights for 6000+ pincodes",
        description: "Led the AI Reports feature end-to-end at SpiceJet's healthcare platform — from concept through launch. Integrated ML-driven health insights into the patient frontend, enabling personalized test result analysis and doctor recommendations.",
        period: "2024 – 2025",
        status: "Shipped",
        tags: [
            "AI PM",
            "HealthTech",
            "ML Integration",
            "Cross-functional"
        ],
        color: "#f59e0b",
        gradient: "from-amber-400 to-orange-500",
        metrics: [
            {
                value: "120+",
                label: "Lab Partners"
            },
            {
                value: "6000+",
                label: "Pincodes"
            },
            {
                value: "↑",
                label: "Booking Conversion"
            }
        ],
        tools: [
            "React",
            "Redux",
            "SCSS",
            "REST APIs",
            "Figma"
        ],
        prd: {
            problem: "Patients receiving lab results had no context to understand their health data. 60%+ of post-test calls were basic interpretation questions, overwhelming the support team and reducing platform NPS.",
            users: [
                {
                    persona: "Patients",
                    pain: "Confusing lab results with no actionable guidance"
                },
                {
                    persona: "Support Team",
                    pain: "High volume of post-result interpretation calls"
                },
                {
                    persona: "Doctors",
                    pain: "Patients arriving for consultations without context on their results"
                }
            ],
            solution: "Integrate ML-powered health insights directly into the patient's result view — surfacing plain-language summaries, trend analysis, and personalized doctor recommendations based on result patterns.",
            goals: [
                "Reduce post-result support calls by 30%",
                "Increase patient satisfaction score for result experience",
                "Drive 15% increase in follow-up consultation bookings"
            ],
            features: [
                {
                    name: "Plain-language Summaries",
                    description: "AI converts complex lab values into patient-friendly explanations"
                },
                {
                    name: "Trend Analysis",
                    description: "Compare current results against past tests to show trajectory"
                },
                {
                    name: "Doctor Recommendations",
                    description: "Suggest relevant specialists based on flagged biomarkers"
                },
                {
                    name: "Interactive PDF Reports",
                    description: "Downloadable, visually rich report with insights embedded"
                },
                {
                    name: "Risk Flagging",
                    description: "Highlight out-of-range values with severity indicators"
                }
            ],
            outcomes: "Successfully launched across the platform serving 120+ lab partners and 6,000+ pincodes. Directly impacted booking conversion and user retention metrics. Managed full release cycle across engineering, data science, and QA."
        }
    },
    {
        slug: "school-erp-igs",
        title: "School ERP — IGS",
        tagline: "Zero-to-one governance system for school institutions",
        description: "As a founding team member at Edpi Innovate, led product discovery and delivery for an Institutional Governance System (IGS) — a core module of an all-in-one school ERP. Ran competitive analysis, defined roadmap priorities, and shipped AI chatbot + global search.",
        period: "2025 – 2026",
        status: "Shipped",
        tags: [
            "0-to-1",
            "EdTech",
            "ERP",
            "AI Chatbot"
        ],
        color: "#10b981",
        gradient: "from-emerald-400 to-teal-500",
        metrics: [
            {
                value: "0→1",
                label: "Product Built"
            },
            {
                value: "2",
                label: "Core Features Shipped"
            },
            {
                value: "↓",
                label: "Admin Effort"
            }
        ],
        tools: [
            "React",
            "Next.js",
            "TypeScript",
            "Claude API",
            "Figma",
            "Jira"
        ],
        prd: {
            problem: "School administrators manage governance tasks (compliance, approvals, document management) across 5+ disconnected tools, leading to data silos, missed deadlines, and poor visibility into institutional health.",
            users: [
                {
                    persona: "School Administrators",
                    pain: "Fragmented tools, manual processes, no single source of truth"
                },
                {
                    persona: "Teachers",
                    pain: "Difficulty finding relevant governance documents and approvals"
                },
                {
                    persona: "School Leadership",
                    pain: "No real-time dashboard for institutional compliance and task status"
                }
            ],
            solution: "A unified Institutional Governance System with AI-powered search, conversational chatbot for task navigation, and streamlined onboarding workflows — all integrated into the school ERP.",
            goals: [
                "Reduce administrator task discovery time by 50%",
                "Achieve 90% onboarding completion rate for new schools",
                "Cut manual data entry effort by 40%"
            ],
            features: [
                {
                    name: "AI Chatbot",
                    description: "Conversational interface built with React/Next.js integrating backend AI models for dynamic workflow navigation"
                },
                {
                    name: "Global Search",
                    description: "Instant filtering with contextual navigation improving task discovery across all modules"
                },
                {
                    name: "Voice-to-Chat",
                    description: "Voice input integration reducing manual administrator data entry"
                },
                {
                    name: "Interactive Data Tables",
                    description: "Sortable, filterable tables with attachment viewer for governance documents"
                },
                {
                    name: "Onboarding Flows",
                    description: "Step-by-step school onboarding with progress tracking and validation"
                }
            ],
            outcomes: "Shipped AI chatbot and global search on schedule as a founding team member. Voice-to-chat integration reduced manual administrator effort. Competitive analysis translated directly into roadmap differentiation for the early-stage product."
        }
    }
];
const skills = {
    product: [
        "Roadmapping",
        "PRD Development",
        "User Stories",
        "Competitive Analysis",
        "A/B Testing",
        "OKRs",
        "Agile / Scrum",
        "Stakeholder Management",
        "GTM Strategy",
        "Design Thinking",
        "User Research",
        "Feature Prioritization"
    ],
    aiTechnical: [
        "LLM Integration",
        "AI Product Design",
        "Prompt Engineering",
        "RAG",
        "React / Next.js",
        "TypeScript",
        "Python",
        "SQL",
        "REST APIs",
        "FastAPI",
        "Redux",
        "Docker"
    ],
    tools: [
        "Figma",
        "Jira",
        "Confluence",
        "Notion",
        "Claude Code",
        "Cursor",
        "n8n",
        "Zapier",
        "Tableau",
        "AWS",
        "Postman",
        "Git"
    ]
};
const certifications = [
    "AWS Academy Graduate",
    "Microsoft Azure Administrator Associate",
    "Hello PM — AI Product Management",
    "The Web Developer Bootcamp (Colt Steele)",
    "FreeCodeCamp Responsive Web Design"
];
}),
"[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/projects/[slug]/ProjectDetail.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/projects/[slug]/ProjectDetail.tsx <module evaluation>", "default");
}),
"[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/projects/[slug]/ProjectDetail.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/projects/[slug]/ProjectDetail.tsx", "default");
}),
"[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) return {};
    return {
        title: `${project.title} — Shrayanshi Tomar`,
        description: project.description
    };
}
async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        project: project
    }, void 0, false, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0zv387f._.js.map