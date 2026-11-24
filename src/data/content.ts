/**
 * All site content lives here. To add a project, append an object to `projects`
 * and drop its images in public/projects/<slug>/. Nothing else needs to change.
 */

export type L = { en: string; ar: string };

export type Cover =
  | { type: "image"; src: string; width: number; height: number }
  | { type: "logo"; src: string; background: string }
  | { type: "wordmark"; text: string };

export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: L;
};

export type Category = "fullstack" | "frontend";

export type Project = {
  slug: string;
  year: string;
  category: Category;
  title: L;
  tagline: L;
  description: { en: string[]; ar: string[] };
  role: L;
  status?: L;
  stack: string[];
  live?: string;
  repo?: string;
  cover: Cover;
  shots: Shot[];
};

export type SocialKind = "linkedin" | "github" | "facebook";

export const profile = {
  name: { en: "Abdallah Anwar", ar: "عبدالله أنور" },
  photo: {
    src: "/me.webp",
    width: 640,
    height: 640,
    alt: "Portrait of Abdallah Anwar",
  },
  title: { en: "Full-Stack Developer", ar: "مطوّر Full-Stack" },
  role: {
    en: "I build web apps with React, Next.js and Node.js, from the interface down to the database.",
    ar: "أبني تطبيقات الويب بـ React وNext.js وNode.js، من الواجهة حتى قاعدة البيانات.",
  },
  intro: {
    en: "I work in English and in Arabic, and I study Computer Science at Zagazig University.",
    ar: "أعمل بالعربية والإنجليزية، وأدرس علوم الحاسب في جامعة الزقازيق.",
  },
  heroTech: ["React", "Next.js", "Node.js", "TypeScript"],
  about: {
    en: [
      "I'm a Computer Science student at the Faculty of Computers and Informatics, Zagazig University, and a full-stack developer working with React, Next.js and Node.js.",
      "My projects start from a real need: a site-management system for finishing companies, a sign language platform for children, an AI-assisted mental health platform. I design the interface, build the front end, and make sure the data behind it is safe and correct.",
      "I care about right-to-left layouts that feel native, apps that keep working offline, and rules enforced where the data lives.",
    ],
    ar: [
      "أدرس علوم الحاسب في كلية الحاسبات والمعلومات بجامعة الزقازيق، وأعمل كمطوّر Full-Stack باستخدام React وNext.js وNode.js.",
      "مشاريعي تبدأ من احتياج حقيقي: نظام لإدارة مواقع التشطيبات، ومنصة لتعليم لغة الإشارة للأطفال، ومنصة صحة نفسية بمساعدة الذكاء الاصطناعي. أصمّم الواجهة وأبني الجزء الأمامي، وأتأكد أن البيانات خلفه سليمة ومحمية.",
      "يهمني أن تبدو الواجهات العربية أصيلة وليست مقلوبة، وأن تستمر التطبيقات في العمل بدون إنترنت، وأن تُطبَّق القواعد في المكان الذي توجد فيه البيانات.",
    ],
  },
  services: [
    {
      en: "Full-stack web apps with React, Next.js and Node.js",
      ar: "تطبيقات ويب متكاملة بـ React وNext.js وNode.js",
    },
    {
      en: "Arabic and right-to-left interfaces that feel native",
      ar: "واجهات عربية RTL تبدو أصيلة",
    },
    {
      en: "Offline-first apps and installable PWAs",
      ar: "تطبيقات تعمل بدون إنترنت وPWA قابلة للتثبيت",
    },
    {
      en: "UI/UX design for the web",
      ar: "تصميم UI/UX للويب",
    },
  ] as L[],
  contactLead: {
    en: "Open to internships and junior roles. Send me a message, or reach me on email or WhatsApp.",
    ar: "متاح للتدريب والوظائف المبتدئة. أرسل لي رسالة، أو تواصل معي على البريد الإلكتروني أو واتساب.",
  },
  footerBio: {
    en: "Full-stack developer building Arabic-friendly web apps with React, Next.js and Node.js.",
    ar: "مطوّر Full-Stack يبني تطبيقات ويب تدعم العربية بـ React وNext.js وNode.js.",
  },
  email: "anwer3652@gmail.com",
  whatsapp: { display: "+20 111 126 1218", href: "https://wa.me/201111261218" },
  location: { en: "Egypt", ar: "مصر" },
  links: [
    {
      kind: "linkedin" as SocialKind,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdallah-anwar0/",
    },
    {
      kind: "github" as SocialKind,
      label: "GitHub",
      href: "https://github.com/Abdallah-Anwar3",
    },
    {
      kind: "facebook" as SocialKind,
      label: "Facebook",
      href: "https://www.facebook.com/abdallah.anwar.790454",
    },
  ],
};

export const skills: { title: L; items: string[] }[] = [
  {
    title: { en: "Front end", ar: "الواجهة الأمامية" },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    title: { en: "Back end", ar: "الخلفية" },
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Sequelize",
      "Mongoose",
    ],
  },
  {
    title: { en: "Databases", ar: "قواعد البيانات" },
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL", "Supabase"],
  },
  {
    title: { en: "Tools", ar: "الأدوات" },
    items: ["Git", "GitHub", "Docker", "Vercel"],
  },
  {
    title: { en: "Also", ar: "أيضًا" },
    items: ["Python", "C++", "OOP", "Data structures", "Algorithms"],
  },
];

export const experience: { when: L; title: L; place: L; note: L }[] = [
  {
    when: { en: "2024 to 2025", ar: "2024 إلى 2025" },
    title: {
      en: "HR Core Team member",
      ar: "عضو الفريق الأساسي للموارد البشرية",
    },
    place: { en: "GDG On-Campus Zagazig", ar: "GDG On-Campus Zagazig" },
    note: {
      en: "Recruitment, team engagement, and communication inside a student developer community.",
      ar: "التوظيف وإشراك الفريق والتواصل داخل مجتمع للمطورين من الطلاب.",
    },
  },
  {
    when: { en: "In progress", ar: "جارٍ" },
    title: {
      en: "B.Tech in Computer Science",
      ar: "بكالوريوس تكنولوجيا في علوم الحاسب",
    },
    place: {
      en: "Faculty of Computers and Informatics, Zagazig University",
      ar: "كلية الحاسبات والمعلومات، جامعة الزقازيق",
    },
    note: {
      en: "Data structures, algorithms, SQL, C++, and networking.",
      ar: "هياكل البيانات والخوارزميات وSQL وC++ والشبكات.",
    },
  },
];

export const projects: Project[] = [
  {
    slug: "tashtibet",
    year: "2026",
    category: "fullstack",
    title: { en: "Tashtibet", ar: "تشطيبات" },
    tagline: {
      en: "Site management for interior-finishing companies, built as an offline-first Arabic app.",
      ar: "نظام لإدارة مواقع التشطيبات والمقاولات، مبني بالعربية ويعمل بدون إنترنت.",
    },
    description: {
      en: [
        "One codebase, three experiences. Site engineers file daily reports with photos, log expenses, and check in on site, even without a connection. Admins and project managers track budgets, payroll, suppliers, inventory, and timelines. Clients follow progress and payments, send requests, and approve finished stages.",
        "Access rules live in Postgres through Row Level Security, so the interface only hides what the database already forbids. Attendance and payroll are calculated on the server, so a phone clock can't change them.",
      ],
      ar: [
        "قاعدة كود واحدة لثلاث تجارب. مهندسو الموقع يرفعون التقارير اليومية بالصور ويسجلون المصروفات والحضور حتى بدون اتصال. والإدارة ومديرو المشاريع يتابعون الميزانيات والرواتب والموردين والمخزون والجداول الزمنية. والعميل يتابع التقدم والدفعات، ويرسل طلباته، ويعتمد المراحل المنتهية.",
        "قواعد الصلاحيات في Postgres عبر Row Level Security، فالواجهة تُخفي فقط ما تمنعه قاعدة البيانات أصلًا. ويُحسب الحضور والرواتب على الخادم، فلا يمكن تغييرها بتعديل ساعة الهاتف.",
      ],
    },
    role: { en: "Design and development", ar: "التصميم والتطوير" },
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Dexie",
      "Supabase",
    ],
    live: "https://demo-tashtibet.vercel.app",
    repo: "https://github.com/Abdallah-Anwar3/Demo-Tashtibet",
    cover: {
      type: "image",
      src: "/projects/tashtibet/dashboard.webp",
      width: 1600,
      height: 808,
    },
    shots: [
      {
        src: "/projects/tashtibet/dashboard.webp",
        width: 1600,
        height: 808,
        alt: "Tashtibet admin dashboard with active sites, progress bars and pending expenses",
        caption: { en: "Admin dashboard", ar: "لوحة تحكم الإدارة" },
      },
      {
        src: "/projects/tashtibet/project.webp",
        width: 1600,
        height: 808,
        alt: "Tashtibet project page with stages, budget and progress",
        caption: {
          en: "Project page: stages, budget, and reports",
          ar: "صفحة المشروع: المراحل والميزانية والتقارير",
        },
      },
      {
        src: "/projects/tashtibet/engineer.webp",
        width: 1600,
        height: 803,
        alt: "Tashtibet site engineer home screen with custody balance and assigned sites",
        caption: { en: "Site engineer app", ar: "تطبيق مهندس الموقع" },
      },
      {
        src: "/projects/tashtibet/client-project.webp",
        width: 1600,
        height: 807,
        alt: "Tashtibet client portal with progress, next payment and spending",
        caption: {
          en: "Client portal: progress, next payment, spending",
          ar: "بوابة العميل: التقدم والدفعة القادمة والمصروفات",
        },
      },
      {
        src: "/projects/tashtibet/client-reports.webp",
        width: 1600,
        height: 806,
        alt: "Tashtibet client portal showing daily reports",
        caption: {
          en: "Client portal: daily updates",
          ar: "بوابة العميل: التقارير اليومية",
        },
      },
      {
        src: "/projects/tashtibet/client-requests.webp",
        width: 1600,
        height: 805,
        alt: "Tashtibet client portal requests with a chat thread",
        caption: {
          en: "Client portal: requests and chat with the company",
          ar: "بوابة العميل: الطلبات والمحادثة مع الشركة",
        },
      },
    ],
  },
  {
    slug: "tawasal",
    year: "2026",
    category: "frontend",
    title: { en: "Tawasal", ar: "تواصل" },
    tagline: {
      en: "Sign language lessons for children with special needs, and guidance for their parents.",
      ar: "دروس لغة الإشارة للأطفال من ذوي الاحتياجات الخاصة، وإرشاد لأولياء أمورهم.",
    },
    description: {
      en: [
        "Built with a team from the Faculty of Disability Sciences. Children learn sign language through video lessons. Parents get practical guidance on communicating with their kids, and a directory of care and rehabilitation centers by governorate.",
        "I designed the full interface first, then built it with HTML, CSS, Bootstrap, and JavaScript. Lesson videos use HTML5 video with JavaScript handling so they play smoothly on any device.",
      ],
      ar: [
        "بُني بالتعاون مع فريق من كلية علوم الإعاقة. يتعلم الأطفال لغة الإشارة عبر دروس فيديو، ويجد أولياء الأمور إرشادًا عمليًا للتواصل مع أطفالهم، ودليلًا لمراكز الرعاية والتأهيل حسب المحافظة.",
        "صمّمت الواجهة كاملة أولًا، ثم نفّذتها بـ HTML وCSS وBootstrap وJavaScript. ودروس الفيديو تعتمد على HTML5 Video مع JavaScript لتعمل بسلاسة على أي جهاز.",
      ],
    },
    role: {
      en: "UI/UX design and front end",
      ar: "تصميم UI/UX والواجهة الأمامية",
    },
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://tawsal.vercel.app",
    repo: "https://github.com/Abdallah-Anwar3/Tawsal",
    cover: {
      type: "image",
      src: "/projects/tawasal/home.webp",
      width: 1600,
      height: 803,
    },
    shots: [
      {
        src: "/projects/tawasal/home.webp",
        width: 1600,
        height: 803,
        alt: "Tawasal home page: the hero and the About section.",
        caption: {
          en: "Tawasal home page: the hero and the About section.",
          ar: "الصفحة الرئيسية لتواصل: الواجهة الرئيسية وقسم عن الموقع.",
        },
      },
      {
        src: "/projects/tawasal/parents.webp",
        width: 1600,
        height: 817,
        alt: "Parent guidance: video lessons that explain hearing loss and how to communicate with a child.",
        caption: {
          en: "Parent guidance: video lessons that explain hearing loss and how to communicate with a child.",
          ar: "التوجيه الأسري: فيديوهات إرشادية تشرح الإعاقة السمعية وطرق التواصل مع الطفل.",
        },
      },
      {
        src: "/projects/tawasal/articles.webp",
        width: 1600,
        height: 817,
        alt: "Articles and awareness: guides on rights, laws and early intervention.",
        caption: {
          en: "Articles and awareness: guides on rights, laws and early intervention.",
          ar: "المقالات والتوعية: أدلة عن الحقوق والقوانين والتدخل المبكر.",
        },
      },
      {
        src: "/projects/tawasal/centers.webp",
        width: 1600,
        height: 804,
        alt: "Centers directory: pick a governorate and see audiology centers with address and phone.",
        caption: {
          en: "Centers directory: pick a governorate and see audiology centers with address and phone.",
          ar: "دليل المراكز: اختر المحافظة لتظهر مراكز السمعيات مع العنوان ورقم التواصل.",
        },
      },
    ],
  },
  {
    slug: "aura",
    year: "2026",
    category: "frontend",
    title: { en: "AURA", ar: "AURA" },
    tagline: {
      en: "An AI-assisted mental health platform. Our graduation project.",
      ar: "منصة للصحة النفسية بمساعدة الذكاء الاصطناعي. مشروع تخرجنا.",
    },
    description: {
      en: [
        "A team project at Zagazig University: a conversational AI therapist, emotion tracking from chat, and a dashboard that shows progress over time.",
        "I'm building the React front end. The back end is FastAPI and the AI pipeline is handled by my teammates.",
      ],
      ar: [
        "مشروع جماعي في جامعة الزقازيق: معالج افتراضي بالذكاء الاصطناعي، وتتبّع للمشاعر من المحادثات، ولوحة تعرض التقدم عبر الوقت.",
        "أبني الواجهة الأمامية بـ React، بينما يتولى زملائي الخلفية بـ FastAPI وخط الذكاء الاصطناعي.",
      ],
    },
    role: { en: "Front end (React)", ar: "الواجهة الأمامية (React)" },
    status: { en: "In progress", ar: "قيد التطوير" },
    stack: ["React", "Tailwind CSS"],
    repo: "https://github.com/abdallah-gith/AURA-AI-Therapy",
    cover: { type: "wordmark", text: "AURA" },
    shots: [],
  },
];

export const navItems: { id: string; label: L }[] = [
  { id: "hero", label: { en: "Home", ar: "الرئيسية" } },
  { id: "about", label: { en: "About", ar: "عني" } },
  { id: "skills", label: { en: "Skills", ar: "المهارات" } },
  { id: "projects", label: { en: "Projects", ar: "الأعمال" } },
  { id: "experience", label: { en: "Experience", ar: "الخبرة" } },
  { id: "contact", label: { en: "Contact", ar: "تواصل" } },
];

export const ui = {
  hero: {
    badge: {
      en: "Open to internships and junior roles",
      ar: "متاح للتدريب والوظائف المبتدئة",
    } as L,
    hello: { en: "Hi, I'm", ar: "مرحبًا، أنا" } as L,
    viewWork: { en: "View my work", ar: "استعرض أعمالي" } as L,
    getInTouch: { en: "Get in touch", ar: "تواصل معي" } as L,
    discover: { en: "Discover more", ar: "اكتشف المزيد" } as L,
  },
  about: {
    eyebrow: { en: "Who I am", ar: "من أنا" } as L,
    title: { en: "About Abdallah", ar: "عن عبدالله" } as L,
    offer: { en: "What I do", ar: "ما أقدمه" } as L,
    stats: {
      projects: { en: "Projects", ar: "مشاريع" } as L,
      demos: { en: "Live demos", ar: "نسخ تجريبية" } as L,
      tech: { en: "Technologies", ar: "تقنية" } as L,
    },
  },
  skills: {
    eyebrow: { en: "What I work with", ar: "ما أعمل به" } as L,
    title: { en: "Skills and technologies", ar: "المهارات والتقنيات" } as L,
  },
  projects: {
    eyebrow: { en: "My work", ar: "أعمالي" } as L,
    title: { en: "Selected projects", ar: "مشاريع مختارة" } as L,
    filters: {
      all: { en: "All", ar: "الكل" } as L,
      fullstack: { en: "Full-stack", ar: "Full-Stack" } as L,
      frontend: { en: "Front end", ar: "واجهات أمامية" } as L,
    },
    categories: {
      fullstack: { en: "Full-stack", ar: "Full-Stack" } as L,
      frontend: { en: "Front end", ar: "واجهة أمامية" } as L,
    },
    details: { en: "Details", ar: "التفاصيل" } as L,
    liveDemo: { en: "Live demo", ar: "النسخة التجريبية" } as L,
    source: { en: "Source code", ar: "الكود المصدري" } as L,
  },
  experience: {
    eyebrow: { en: "My path", ar: "مسيرتي" } as L,
    title: { en: "Experience and education", ar: "الخبرة والتعليم" } as L,
  },
  contact: {
    eyebrow: { en: "Contact", ar: "تواصل" } as L,
    title: { en: "Let's talk", ar: "لنتحدث" } as L,
    email: { en: "Email", ar: "البريد الإلكتروني" } as L,
    whatsapp: { en: "WhatsApp", ar: "واتساب" } as L,
    location: { en: "Location", ar: "الموقع" } as L,
    follow: { en: "Follow me", ar: "تابعني على" } as L,
    form: {
      name: { en: "Your name", ar: "اسمك" } as L,
      email: { en: "Your email", ar: "بريدك الإلكتروني" } as L,
      message: { en: "Message", ar: "رسالتك" } as L,
      send: { en: "Send message", ar: "أرسل الرسالة" } as L,
      note: {
        en: "This opens your email app with the message filled in.",
        ar: "سيفتح هذا تطبيق البريد لديك والرسالة جاهزة.",
      } as L,
      subject: {
        en: "Message from your portfolio",
        ar: "رسالة من البورتفوليو",
      } as L,
    },
  },
  footer: {
    links: { en: "Quick links", ar: "روابط سريعة" } as L,
    reach: { en: "Reach me", ar: "تواصل معي" } as L,
    built: {
      en: "Built with Next.js and Tailwind CSS.",
      ar: "مبني بـ Next.js وTailwind CSS.",
    } as L,
  },
  meta: {
    role: { en: "Role", ar: "الدور" } as L,
    year: { en: "Year", ar: "السنة" } as L,
    stack: { en: "Built with", ar: "التقنيات" } as L,
  },
  allProjects: { en: "All projects", ar: "كل المشاريع" } as L,
  skipToContent: {
    en: "Skip to main content",
    ar: "تخطَّ إلى المحتوى الرئيسي",
  } as L,
  menu: { en: "Menu", ar: "القائمة" } as L,
  switchLang: { en: "العربية", ar: "English" } as L,
};
