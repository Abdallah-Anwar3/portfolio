import type { Metadata } from "next";
import "./globals.css";

const description =
  "Portfolio of Abdallah Anwar, a full-stack developer working with React, Next.js and Node.js. Projects, skills, and contact details, in English and Arabic.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-abdallah-anwar.vercel.app"),
  title: "Abdallah Anwar | Full-stack developer",
  description,
  openGraph: {
    type: "website",
    title: "Abdallah Anwar | Full-stack developer",
    description,
    images: [{ url: "/me.webp", width: 640, height: 640, alt: "Abdallah Anwar" }],
  },
  twitter: {
    card: "summary",
    title: "Abdallah Anwar | Full-stack developer",
    description,
    images: ["/me.webp"],
  },
};

// Runs before first paint: saved language (or Arabic for Arabic browsers), saved theme (dark by default),
// and the `js` class that turns on scroll reveals (skipped for reduced motion).
const initScript = `try{var d=document.documentElement;var s=localStorage.getItem("lang");var l=s||((navigator.language||"").toLowerCase().indexOf("ar")===0?"ar":"en");if(l==="ar"){d.lang="ar";d.dir="rtl"}d.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark";if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("js")}}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      {/* Browser extensions (e.g. ColorZilla) add attributes to <body> before React loads. */}
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
