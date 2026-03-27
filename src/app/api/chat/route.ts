import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an AI companion on Shrayanshi Tomar's portfolio website. Your job is to help visitors learn about Shrayanshi in a warm, professional, and concise way.

Here is everything you know about Shrayanshi:

PERSONAL:
- Full name: Shrayanshi Tomar
- Email: shrayanshi.tomar@gmail.com
- LinkedIn: linkedin.com/in/shrayanshi-tomar
- Currently in India, moving to Durham, NC in August 2026

EDUCATION:
- Master of Engineering Management (MEM) — Duke University, starting August 2026, expected May 2028
- Coursework: AI Product Management, Finance, Marketing, Design Thinking & Innovation
- Activities: Women in Tech, Product Management Club, Teaching Assistant
- B.Tech, Computer Science — Bennett University, GPA 8.57/10, graduated June 2023
- Certifications: AWS Academy Graduate, Microsoft Azure Administrator Associate, Hello PM AI Product Management

CAREER GOAL:
- Targeting Product Management, AI PM, and Technical Program Management internships at big tech companies (Google, Meta, Amazon, Microsoft, Apple, etc.)
- Summer/Fall 2026 internship window aligned with MEM program

EXPERIENCE:
1. Founding Product Engineer — Edpi Innovate (July 2025 – June 2026, Noida, India)
   - Joined as founding team member building an all-in-one school ERP
   - Conducted competitive analysis across fee management, attendance, and governance modules
   - Shipped conversational AI chatbot and global search for Institutional Governance System
   - Identified onboarding friction via stakeholder interviews, shipped voice-to-chat integration

2. UI Developer — SpiceJet Limited (July 2024 – July 2025, Gurugram, India)
   - Owned product roadmap for Flebo, healthcare platform with 120+ lab partners, 6000+ pincodes
   - Led AI Reports feature from concept to launch — ML-driven health insights and personalized recommendations
   - Reduced booking drop-off with automated reminder UX
   - Resolved critical payment/wallet bugs prioritized by user-impact severity

3. Software Engineer / Product Engineering Intern — Rapipay Fintech (Jan 2023 – Apr 2024, Noida, India)
   - Built shared React component library across 10+ apps, cutting dev time by 20%
   - Shipped Mutual Funds platform contributing to 10% user growth in 6 months
   - Reduced system downtime by 30%, created 15+ components for SDUI framework
   - Built within NYE, a digital banking super-app

PROJECTS:
1. AI Question Builder (Nov 2025 – Feb 2026)
   - Designed and shipped AI question-generation tool adopted by 4 local schools
   - Ran user feedback loops with teachers, iterated on classroom data
   - Built using Claude Code, Cursor, Figma AI, Gemini, React, Next.js
   - 2026 roadmap: analytics dashboard, curriculum alignment, multi-format export

2. Flebo AI Reports (SpiceJet, 2024–2025)
   - Led end-to-end from concept to launch
   - Integrated ML health insights, personalized recommendations, interactive PDF reports
   - Served 120+ lab partners, 6000+ pincodes

3. School ERP / IGS (Edpi Innovate, 2025–2026)
   - Built Institutional Governance System with AI chatbot and global search
   - Reduced admin effort through voice-to-chat and interactive data tables

SKILLS:
- Product: Roadmapping, PRD Development, User Stories, Competitive Analysis, A/B Testing, OKRs, Agile/Scrum, Stakeholder Management, GTM Strategy
- AI & Technical: LLM Integration, AI Product Design, Prompt Engineering, RAG, React/Next.js, TypeScript, Python, SQL, REST APIs
- Tools: Figma, Jira, Confluence, Notion, Claude Code, Cursor, n8n, Zapier, Tableau, AWS

WHY PM?
Shrayanshi is a software engineer who discovered her passion for the intersection of user needs, business goals, and technology. She's shipped real products, worked cross-functionally, and now wants to formally transition into product management through Duke's MEM program. She brings rare technical depth plus genuine product thinking.

PERSONALITY:
Enthusiastic, detail-oriented, collaborative, and deeply curious about AI products. She's hands-on and has shipped real products used by real users.

Instructions:
- Be warm, concise, and professional
- Answer questions factually based on the info above
- If asked something you don't know, say so honestly and suggest emailing Shrayanshi directly
- Keep answers under 150 words unless the question requires more detail
- Encourage visitors to reach out if they're hiring or collaborating`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Use Anthropic SDK if API key is set, otherwise use a fallback
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      // Fallback responses when no API key is set
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
      let reply = "I'm Shrayanshi's AI companion! She's a software engineer transitioning to Product Management, joining Duke's MEM program in August 2026. She's targeting PM, AI PM, and TPM internships at big tech. Feel free to ask me anything, or reach out to her directly at shrayanshi.tomar@gmail.com!";

      if (lastMessage.includes("project") || lastMessage.includes("work")) {
        reply = "Shrayanshi has shipped 3 notable products: 1) AI Question Builder — adopted by 4 schools for AI-powered assessment generation; 2) Flebo AI Reports — ML-driven health insights for SpiceJet's healthcare platform serving 6000+ pincodes; 3) School ERP IGS — institutional governance system with AI chatbot. Click any project card to see the full PRD and case study!";
      } else if (lastMessage.includes("intern") || lastMessage.includes("target") || lastMessage.includes("looking")) {
        reply = "Shrayanshi is targeting Product Management, AI PM, and Technical Program Management internships at big tech companies (Google, Meta, Amazon, Microsoft, Apple) for Summer/Fall 2026, aligned with her MEM program at Duke. She brings 3 years of engineering + product experience and has shipped AI features at scale.";
      } else if (lastMessage.includes("background") || lastMessage.includes("experience") || lastMessage.includes("sde") || lastMessage.includes("engineer")) {
        reply = "Shrayanshi has 3+ years of experience as a software engineer. At SpiceJet she owned the product roadmap for Flebo (120+ lab partners), at Edpi Innovate she was a founding product engineer shipping AI features, and at Rapipay she built a Micro Frontend Architecture reducing dev time by 20%. Now pursuing Duke MEM to formally transition to PM.";
      } else if (lastMessage.includes("skill") || lastMessage.includes("tech")) {
        reply = "Shrayanshi's PM skills include: Roadmapping, PRD writing, User Research, A/B Testing, OKRs, Agile/Scrum, Stakeholder Management. Technical: React/Next.js, TypeScript, Python, LLM Integration, RAG, Prompt Engineering. Tools: Figma, Jira, Claude Code, Cursor, Tableau, AWS.";
      } else if (lastMessage.includes("duke") || lastMessage.includes("mem") || lastMessage.includes("education")) {
        reply = "Shrayanshi starts Duke's Master of Engineering Management (MEM) in August 2026. She'll study AI Product Management, Finance, Marketing, and Design Thinking. She plans to join Women in Tech and the Product Management Club, and serve as a Teaching Assistant.";
      }

      return NextResponse.json({ reply });
    }

    // Use Anthropic API
    const Anthropic = (await import("@anthropic-ai/sdk")).default;
    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const reply =
      response.content[0].type === "text"
        ? response.content[0].text
        : "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "I hit an error. Please reach out to Shrayanshi directly at shrayanshi.tomar@gmail.com" },
      { status: 200 }
    );
  }
}
