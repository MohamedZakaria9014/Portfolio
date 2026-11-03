"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Dithering } from "@paper-design/shaders-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { projects, experience, additionalWork } from "@/lib/portfolio";

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────

const skillGroups = [
  { category: "Web", items: ["Next.js", "React 19", "TypeScript", "JavaScript", "Tailwind CSS", "Leaflet", "Vercel"] },
  {
    category: "Mobile",
    items: [
      "React Native",
      "Expo",
      "TypeScript",
      "Flutter",
      "Dart",
      "React Navigation",
      "Expo Router",
      "NativeWind",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Supabase",
      "Firebase",
      "Node.js",
      "REST APIs",
      "Drizzle ORM",
      "Airtable API",
      "Row-Level Security",
      "PostgreSQL",
      "Firestore",
      "SQLite",
      "Real-time Features",
      "Offline-first Sync",
    ],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Zustand", "TanStack Query", "Redux Persist", "Context API", "AsyncStorage"],
  },
  {
    category: "Authentication",
    items: [
      "Supabase Auth",
      "Firebase Auth",
      "OTP Verification",
      "Session Management",
    ],
  },
  {
    category: "AI & Computer Vision",
    items: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "AI Integration",
      "Phishing Detection",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Postman",
      "Arduino",
      "NodeMCU",
      "Unity",
      "C#",
      "Java",
      "C++",
    ],
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// ─────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GlobeIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function EmailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────────────────────────

function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top > window.innerHeight) setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: (typeof projects)[0];
  dark: boolean;
}

function ProjectCard({ project, dark }: ProjectCardProps) {
  const [imgIdx, setImgIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i - 1 + project.images.length) % project.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i + 1) % project.images.length);
  };

  const cardBg = dark ? "bg-white/[0.04]" : "bg-black/[0.03]";
  const cardBorder = dark ? "border-white/12" : "border-black/12";
  const muted = dark ? "text-white/60" : "text-black/60";
  const tagBg = dark ? "bg-white/8 text-white/65" : "bg-black/6 text-black/55";
  const navBtn = dark
    ? "bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm"
    : "bg-white/70 hover:bg-white/95 text-black backdrop-blur-sm";
  const ghBtn = dark
    ? "border border-white/20 text-white/55 hover:text-white hover:border-white/50 hover:bg-white/5"
    : "border border-black/20 text-black/45 hover:text-black hover:border-black/45 hover:bg-black/4";

  return (
    <div
      id={project.id}
      className={`project-card rounded-xl border ${cardBorder} ${cardBg} overflow-hidden transition-all duration-300 hover:border-opacity-30`}
    >
      {/* Image carousel */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {project.live && (
          <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </div>
        )}
        {project.images.length > 0 ? <Image
          src={`${basePath}${project.images[imgIdx]}`}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
          unoptimized={project.images[imgIdx].endsWith(".gif")}
          sizes="(max-width: 768px) 100vw, 50vw"
        /> : (
          <div className={`project-art project-art-${project.id}`} aria-label={`${project.name} project illustration`}>
            <span className="project-art-orbit" aria-hidden="true" />
            <span className="project-art-category">{project.category === "In progress" ? "In development" : `${project.category} experience`}</span>
            <span className="project-art-name">{project.name}</span>
            <span className="project-art-caption">{project.tagline}</span>
          </div>
        )}
        {project.images.length > 1 && (
          <>
            <button
              id={`${project.id}-prev`}
              onClick={prev}
              aria-label="Previous"
              className={`absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all ${navBtn}`}
            >
              <ChevronLeft />
            </button>
            <button
              id={`${project.id}-next`}
              onClick={next}
              aria-label="Next"
              className={`absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all ${navBtn}`}
            >
              <ChevronRight />
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  id={`${project.id}-dot-${i}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setImgIdx(i);
                  }}
                  aria-label={`Image ${i + 1}`}
                  className={`rounded-full transition-all ${i === imgIdx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div>
            <h3 className="text-base font-semibold tracking-tight">
              {project.name}
            </h3>
            <p className={`text-xs mt-0.5 ${muted}`}>{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0 pt-0.5">

            {project.live && (
              <a
                id={`${project.id}-website`}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name} website`}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all font-mono ${ghBtn}`}
              >
                <GlobeIcon size={12} />
                Website
                <ExternalIcon />
              </a>
            )}
            {project.github && (
              <a
                id={`${project.id}-github`}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View source for ${project.name}`}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all font-mono ${ghBtn}`}
              >
                <GitHubIcon size={12} />
                Repo
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <p className={`text-xs font-mono mb-3 ${muted}`}>{project.category === "In progress" ? "In development" : project.category}</p>
        <p
          className={`text-xs leading-[1.7] mb-4 ${dark ? "text-white/65" : "text-black/60"}`}
        >
          {project.description}
        </p>

        <ul className={`project-highlights text-xs leading-relaxed mb-5 ${dark ? "text-white/65" : "text-black/60"}`}>
          {project.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-0.5 rounded-full font-mono ${tagBg}`}
              style={{ fontSize: "10px" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Tokens
  const pageBg = isDarkMode ? "bg-[#080808]" : "bg-[#f4f4f4]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const muted = isDarkMode ? "text-white/60" : "text-black/60";
  const divider = isDarkMode ? "border-white/10" : "border-black/10";
  const navBg = scrolled
    ? isDarkMode
      ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
      : "bg-white/80 backdrop-blur-xl border-b border-black/10"
    : "bg-transparent";
  const socialBtn = isDarkMode
    ? "border border-white/20 text-white/70 hover:border-white/50 hover:text-white hover:bg-white/5"
    : "border border-black/20 text-black/60 hover:border-black/45 hover:text-black hover:bg-black/4";
  const cardBg = isDarkMode
    ? "bg-white/[0.035] border-white/10"
    : "bg-black/[0.025] border-black/10";
  const tagPill = isDarkMode
    ? "border border-white/15 bg-white/[0.04] text-white/70 hover:border-white/35 hover:bg-white/8"
    : "border border-black/15 bg-black/[0.03] text-black/60 hover:border-black/30 hover:bg-black/6";

  return (
    <div
      className={`portfolio ${isDarkMode ? "portfolio-dark" : "portfolio-light"} min-h-screen ${pageBg} ${textColor} transition-colors duration-300`}
    >
      {/* ══════════════════════════════════════
          STICKY NAV
      ══════════════════════════════════════ */}
      <a href="#projects" className="skip-link">Skip to projects</a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span
            className="text-xs tracking-widest uppercase font-semibold truncate"

          >
            <span className="sm:hidden">Mohamed Zakaria</span>
            <span className="hidden sm:inline">MZ<span className="brand-dot">.</span></span>
          </span>
          <div className="flex items-center gap-2">
            <div className="section-nav hidden md:flex">
              <a href="#projects" onClick={(e) => handleScrollTo(e, "projects")}>Work</a>
              <a href="#experience" onClick={(e) => handleScrollTo(e, "experience")}>Experience</a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>Contact</a>
            </div>
            <a
              id="nav-github"
              href="https://github.com/MohamedZakaria9014"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium px-2 sm:px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
              aria-label="GitHub"
            >
              <GitHubIcon size={14} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              id="nav-linkedin"
              href="https://www.linkedin.com/in/mohamedzakariaa"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium px-2 sm:px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              id="nav-email"
              href="mailto:mohamed.zakariaa.dev@gmail.com"
              className={`flex items-center gap-1.5 text-sm font-medium px-2 sm:px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
              aria-label="Email"
            >
              <EmailIcon size={14} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <button
              id="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/8"}`}
              aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO — Full-width shader banner
      ══════════════════════════════════════ */}
      <section
        className="portfolio-hero relative w-full overflow-hidden"
      >
        {/* Shader fills the entire hero */}
        <div className="hero-shader absolute inset-0">
          {!reducedMotion && <Dithering
            style={{ height: "100%", width: "100%" }}
            colorBack={isDarkMode ? "hsl(0, 0%, 4%)" : "hsl(0, 0%, 96%)"}
            colorFront={
              isDarkMode ? "hsl(262, 70%, 30%)" : "hsl(220, 85%, 58%)"
            }
            shape="wave"
            type="4x4"
            pxSize={3}
            offsetX={0}
            offsetY={0.25}
            scale={0.85}
            rotation={0}
            speed={0.2}
          />}
        </div>

        {/* Light mode tint — washes the waves back so text is readable */}
        {!isDarkMode && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(255,255,255,0.70)" }}
          />
        )}

        {/* Gradient overlay — fades shader into page bg at the bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background: isDarkMode
              ? "linear-gradient(to bottom, transparent, #080808)"
              : "linear-gradient(to bottom, transparent, #f4f4f4)",
          }}
        />

        <div className="hero-inner max-w-6xl mx-auto px-5 sm:px-6">
          <div className="hero-copy">
            <p className="hero-eyebrow hero-enter"><span className="status-dot" /> SOFTWARE ENGINEER · CAIRO, EGYPT</p>
            <p className="hero-intro hero-enter">Hello, I’m Mohamed Zakaria.</p>
            <h1 className="hero-heading hero-enter">Built with<br />purpose.<br /><span>Made to move.</span></h1>
            <p className="hero-description hero-enter">Full-stack TypeScript. Thoughtful mobile experiences.<br className="hidden sm:block" /> From a first interaction to the systems that make it work.</p>
            <div className="hero-actions hero-enter">
              <a href="#projects" onClick={(e) => handleScrollTo(e, "projects")} className="primary-cta">Explore my work <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="mailto:Mohamed.Zakariaa.dev@gmail.com" className="secondary-cta">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-showcase hero-enter" aria-label="Featured project: Aura Gallery">
            <div className="showcase-orbit" aria-hidden="true" />
            <div className="showcase-label"><span>FROM IDEA TO EXPERIENCE</span><span>01 / AURA</span></div>
            <a href="#aura-gallery" className="showcase-image-link" aria-label="Explore Aura Gallery project">
              <Image src={`${basePath}/Aura Gallery/Aura Gallery MU.png`} alt="Aura Gallery mobile application preview" width={1200} height={900} priority className="showcase-image" />
            </a>
            <div className="showcase-caption"><div><span className="showcase-kicker">FEATURED MOBILE PROJECT</span><p>Aura Gallery</p></div><a href="#aura-gallery" aria-label="View Aura Gallery details"><ArrowUpRight size={18} aria-hidden="true" /></a></div>
            <div className="showcase-code" aria-hidden="true"><span>const experience =</span> craft + curiosity;</div>
          </div>
          <div className="hero-bottom">
            <p>WEB & MOBILE <span> / </span> CLEAN ARCHITECTURE <span> / </span> REAL-WORLD IMPACT</p>
            <a href="#projects" onClick={(e) => handleScrollTo(e, "projects")}>SCROLL TO EXPLORE <ArrowDown size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTENT
      ══════════════════════════════════════ */}
      <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        {/* ─ ABOUT ─────────────────────────── */}
        <section id="about" className="pt-20 pb-16">
          <RevealOnScroll>
            <SectionLabel label="About" muted={muted} />
          </RevealOnScroll>

          <div className="about-intro"><h3>Interfaces with intention.<br /><span>Engineering with depth.</span></h3><p>I’m a Computer Science graduate and developer working across web and mobile. I build client websites, offline-first apps, and connected experiences — and help the next generation of engineers find their footing.</p></div>
          <div className="proof-strip"><div><strong>Top 3%</strong><span>Computer Science graduate</span></div><div><strong>100+</strong><span>Students mentored</span></div><div><strong>50+</strong><span>Student projects reviewed</span></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {/* Education */}
            <RevealOnScroll delay={100}>
              <div className={`rounded-xl border p-5 ${cardBg}`}>
                <p
                  className={`text-xs uppercase tracking-widest mb-3 ${muted}`}
                >
                  Education
                </p>
                <p className="text-sm font-semibold leading-snug mb-1">
                  Modern University for Information & Technology
                </p>
                <p className={`text-xs ${muted}`}>
                  B.Sc. Computer Science · 2024
                </p>
                <p className={`text-xs mt-1 font-mono ${muted}`}>
                  3.525 GPA · Ranked 9th of 350+ students · Top 3%
                </p>
              </div>
            </RevealOnScroll>

            {/* Currently building */}
            <RevealOnScroll delay={200}>
              <div className={`rounded-xl border p-5 ${cardBg}`}>
                <div className="flex items-center justify-between mb-3">
                  <p className={`text-xs uppercase tracking-widest ${muted}`}>
                    Currently Building
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                      isDarkMode
                        ? "bg-green-500/15 text-green-400"
                        : "bg-green-600/12 text-green-700"
                    }`}
                  >
                    Active
                  </span>
                </div>
                <p className="text-sm font-semibold mb-2">BRDG</p>
                <p
                  className={`text-xs leading-[1.7] ${isDarkMode ? "text-white/60" : "text-black/55"}`}
                >
                  Production-grade food delivery platform — customer app, driver
                  app, restaurant dashboard, and admin panel. React Native ·
                  TypeScript · Expo · Supabase · OTP · Real-time tracking ·
                  RBAC.
                </p>
              </div>
            </RevealOnScroll>

            {/* Philosophy */}
            <RevealOnScroll delay={300} className="md:col-span-2">
              <div className={`rounded-xl border p-5 ${cardBg}`}>
                <p
                  className={`text-xs uppercase tracking-widest mb-3 ${muted}`}
                >
                  Engineering Philosophy
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    ["🏗️", "Architecture First"],
                    ["⚡", "Performance Matters"],
                    ["🔐", "Secure by Design"],
                    ["🧩", "Clean Systems"],
                    ["📱", "Thoughtful UX"],
                    ["📈", "Built to Scale"],
                    ["🧠", "Always Learning"],
                    ["🚀", "Ship Quality"],
                  ].map(([emoji, label]) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border ${
                        isDarkMode
                          ? "border-white/8 bg-white/[0.025]"
                          : "border-black/8 bg-black/[0.02]"
                      }`}
                    >
                      <span>{emoji}</span>
                      <span
                        className={
                          isDarkMode ? "text-white/65" : "text-black/60"
                        }
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Divider */}
        <div className={`border-t ${divider}`} />

        {/* ─ PROJECTS ──────────────────────── */}
        <section id="projects" className="pt-16 pb-16">
          <RevealOnScroll>
            <SectionLabel label="Selected Work" muted={muted} />
            <p className={`text-sm leading-relaxed mt-4 max-w-xl ${muted}`}>Client websites, mobile applications, and experiments — from the interface to the systems underneath.</p>
            <div className="project-filters" aria-label="Filter projects">
              {["All", "Web", "Mobile", "AI", "In progress"].map((category) => (
                <button key={category} onClick={() => setFilter(category)} aria-pressed={filter === category} className={`filter-button ${filter === category ? "is-active" : ""}`}>{category} <span>{category === "All" ? projects.length : projects.filter((p) => p.category === category).length}</span></button>
              ))}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {projects.filter((project) => filter === "All" || project.category === filter).map((project, i) => (
              <RevealOnScroll key={project.id} delay={(i % 2) * 90}>
                <ProjectCard project={project} dark={isDarkMode} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={`border-t ${divider}`} />

        <section id="experience" className="py-16">
          <RevealOnScroll><SectionLabel label="Experience" muted={muted} /></RevealOnScroll>
          <div className="experience-list mt-8">
            {experience.map((item, i) => (
              <RevealOnScroll key={item.role} delay={i * 60}>
                <article className={`experience-item border-b ${divider} py-7`}>
                  <p className={`text-xs mb-3 ${muted}`}>{item.period}</p>
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className={`text-sm mt-1 mb-4 ${muted}`}>{item.organization}</p>
                  <ul className={`project-highlights text-sm leading-relaxed ${isDarkMode ? "text-white/65" : "text-black/65"}`}>
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </article>
              </RevealOnScroll>
            ))}
          </div>
          <p className={`text-xs mt-6 ${muted}`}>Arabic · Native &nbsp; / &nbsp; English · Fluent, C1</p>
        </section>

        <section id="archive" className="py-16">
          <RevealOnScroll><SectionLabel label="More from the workshop" muted={muted} />
            <p className={`text-sm mt-4 ${muted}`}>Earlier experiments, internship work, hardware, and the repositories behind them.</p>
          </RevealOnScroll>
          <div className="archive-grid mt-8">
            {additionalWork.map((item, i) => <RevealOnScroll key={item.repo} delay={(i % 2) * 60}>
              <a className="archive-link" href={`https://github.com/MohamedZakaria9014/${item.repo}`} target="_blank" rel="noreferrer"><div><h3>{item.name}</h3><p>{item.language}</p></div><ArrowUpRight size={16} aria-hidden="true" /></a>
            </RevealOnScroll>)}
          </div>
        </section>

        {/* ─ SKILLS ────────────────────────── */}
        <section id="skills" className="pt-16 pb-4">
          <RevealOnScroll>
            <SectionLabel label="Skills" muted={muted} />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-6">
            {skillGroups.map((group, i) => (
              <RevealOnScroll key={group.category} delay={i * 80}>
                <div>
                  <p
                    className={`text-xs uppercase tracking-widest mb-3 ${muted}`}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-3 py-1 rounded-lg font-mono cursor-default transition-all ${tagPill}`}
                        style={{ fontSize: "11px" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <section id="contact" className="contact-section max-w-6xl mx-auto px-5 sm:px-6">
        <RevealOnScroll><p className="hero-eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s build<br /><span>something that matters.</span></h2><a className="contact-email" href="mailto:Mohamed.Zakariaa.dev@gmail.com">Mohamed.Zakariaa.dev@gmail.com <ArrowUpRight size={16} aria-hidden="true" /></a></RevealOnScroll>
      </section>
      <footer className={`border-t ${divider} py-8`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
          <p className={`text-xs font-mono ${muted}`}>
            Mohamed Zakaria · Cairo, Egypt · 2026
          </p>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <a
              href="https://github.com/MohamedZakaria9014"
              target="_blank"
              rel="noreferrer"
              id="footer-github"
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
            >
              <GitHubIcon size={12} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedzakariaa"
              target="_blank"
              rel="noreferrer"
              id="footer-linkedin"
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
            >
              <LinkedInIcon size={12} />
              LinkedIn
            </a>
            <a
              href="mailto:mohamed.zakariaa.dev@gmail.com"
              id="footer-email"
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
            >
              <EmailIcon size={12} />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION LABEL
// ─────────────────────────────────────────────────────────────────

function SectionLabel({ label, muted }: { label: string; muted: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-bold tracking-tight">{label}</h2>
      <div
        className={`flex-1 border-t ${muted.replace("text-", "border-").replace("/45", "/15").replace("/40", "/15")}`}
      />
    </div>
  );
}
