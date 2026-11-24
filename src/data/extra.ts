import type { L } from "./content";

/** Extra copy for the redesigned sections. Edit freely; the site reads it as is. */

export const aboutExtra = {
  headline: {
    en: "I build web apps from the interface to the database",
    ar: "أبني تطبيقات الويب من الواجهة حتى قاعدة البيانات",
  } as L,
  pills: [
    { icon: "cap" as const, label: { en: "Computer Science", ar: "علوم الحاسب" } as L },
    { icon: "pin" as const, label: { en: "Zagazig University", ar: "جامعة الزقازيق" } as L },
    { icon: "code" as const, label: { en: "Full-stack", ar: "Full-Stack" } as L },
  ],
};

export type SkillCard = { name: string; desc: L };

export const skillCards: SkillCard[] = [
  {
    name: "React",
    desc: {
      en: "Component-based interfaces with hooks, state and data fetching.",
      ar: "واجهات قائمة على المكوّنات مع الـ Hooks وإدارة الحالة وجلب البيانات.",
    },
  },
  {
    name: "Next.js",
    desc: {
      en: "Routing, server rendering and static pages with the App Router.",
      ar: "التوجيه والـ Server Rendering والصفحات الثابتة مع App Router.",
    },
  },
  {
    name: "TypeScript",
    desc: {
      en: "Typed code for the front end and the back end, including OOP.",
      ar: "كود مُنمَّط للواجهة والخلفية، مع البرمجة كائنية التوجه.",
    },
  },
  {
    name: "Node.js",
    desc: {
      en: "HTTP servers, the file system, streams and the event loop.",
      ar: "خوادم HTTP ونظام الملفات والـ Streams ودورة الأحداث.",
    },
  },
  {
    name: "Express.js & NestJS",
    desc: {
      en: "REST APIs with routing, middleware, validation and clean folder structure.",
      ar: "واجهات REST مع الـ Routing والـ Middleware والتحقق وهيكلة نظيفة للمجلدات.",
    },
  },
  {
    name: "MongoDB & Mongoose",
    desc: {
      en: "Document databases, schemas, relations and transactions.",
      ar: "قواعد بيانات المستندات والـ Schemas والعلاقات والـ Transactions.",
    },
  },
  {
    name: "MySQL & PostgreSQL",
    desc: {
      en: "Relational design, ERDs, SQL, the Sequelize ORM and SQL injection protection.",
      ar: "تصميم قواعد البيانات العلائقية وSQL وSequelize والحماية من SQL Injection.",
    },
  },
  {
    name: "Tailwind CSS",
    desc: {
      en: "Responsive, accessible interfaces, including right-to-left layouts.",
      ar: "واجهات متجاوبة وسهلة الوصول، بما فيها التخطيطات من اليمين لليسار.",
    },
  },
  {
    name: "Docker",
    desc: {
      en: "Containerizing apps so they run the same everywhere.",
      ar: "تغليف التطبيقات في حاويات لتعمل بنفس الشكل في أي مكان.",
    },
  },
];

export const toolTiles = [
  "Git",
  "GitHub",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Supabase",
  "Vercel",
];

export const experienceIcons = ["briefcase", "cap"] as const;

export const formText = {
  sending: { en: "Sending...", ar: "جارٍ الإرسال..." } as L,
  sent: {
    en: "Message sent. Thank you, I'll reply soon.",
    ar: "تم إرسال الرسالة. شكرًا لك، سأرد قريبًا.",
  } as L,
  error: {
    en: "The message could not be sent. Please try again, or email me directly.",
    ar: "تعذّر إرسال الرسالة. حاول مرة أخرى، أو راسلني على البريد مباشرة.",
  } as L,
  note: {
    en: "Your message goes straight to my inbox.",
    ar: "رسالتك تصل مباشرة إلى بريدي.",
  } as L,
  emailMe: { en: "Email me instead", ar: "راسلني بالبريد بدلًا من ذلك" } as L,
  topButton: { en: "Back to top", ar: "العودة لأعلى" } as L,
};

/** Where the contact form posts. FormSubmit forwards the message to this inbox. */
export const FORM_ENDPOINT = "https://formsubmit.co/ajax/anwer3652@gmail.com";
