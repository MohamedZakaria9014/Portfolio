"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────

const skillGroups = [
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
      "PostgreSQL",
      "Firestore",
      "SQLite",
      "Real-time Features",
    ],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Redux Persist", "Context API", "AsyncStorage"],
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
const projects = [
  {
    id: "aura-gallery",
    name: "Aura Gallery",
    tagline: "Art Gallery & Marketplace",
    year: "2026",
    stack: "React Native · TypeScript · Expo · Supabase",
    description:
      "Production-level mobile art gallery and marketplace. Browse artworks, attend upcoming events, and purchase pieces directly from your phone. Built with a clean architecture approach and Supabase for real-time data.",
    tech: ["React Native", "TypeScript", "Expo", "Supabase", "PostgreSQL"],
    github: "https://github.com/MohamedZakaria9014/GalleryApplication",
    images: [
      "/Aura Gallery MU.png",
      "/Aura Gallery MU 2.png",
      "/Aura Gallery MU 3.png",
    ],
  },
  {
    id: "home-sphere",
    name: "Home Sphere",
    tagline: "Smart Home Automation",
    year: "2023",
    stack: "Arduino · NodeMCU · Firebase · Android",
    description:
      "IoT smart home automation system with real-time device control and monitoring. Custom hardware with Arduino Mega and NodeMCU communicating through Firebase, paired with a companion Android app.",
    tech: ["Arduino", "NodeMCU", "Firebase", "Android", "IoT"],
    github:
      "https://github.com/MohamedZakaria9014/Home-Sphere-Mobile-Application",
    images: ["/HomeSphere_Preview.gif", "/HomeSphere_Preview2.gif"],
  },
  {
    id: "ocr",
    name: "OCR Engine",
    tagline: "Handwriting Recognition",
    year: "2023",
    stack: "Python · TensorFlow · OpenCV",
    description:
      "Custom-trained optical character recognition model that detects and classifies handwritten characters using OpenCV-based image preprocessing and a TensorFlow CNN architecture.",
    tech: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    github: "https://github.com/MohamedZakaria9014/OCR-Project",
    images: ["/OCR_Preview.png"],
  },
];

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
      className={className}
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
  const muted = dark ? "text-white/45" : "text-black/40";
  const tagBg = dark ? "bg-white/8 text-white/65" : "bg-black/6 text-black/55";
  const navBtn = dark
    ? "bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm"
    : "bg-white/70 hover:bg-white/95 text-black backdrop-blur-sm";
  const ghBtn = dark
    ? "border border-white/20 text-white/55 hover:text-white hover:border-white/50 hover:bg-white/5"
    : "border border-black/20 text-black/45 hover:text-black hover:border-black/45 hover:bg-black/4";

  return (
    <div
      className={`rounded-xl border ${cardBorder} ${cardBg} overflow-hidden transition-all duration-300 hover:border-opacity-30`}
    >
      {/* Image carousel */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={project.images[imgIdx]}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
          unoptimized={project.images[imgIdx].endsWith(".gif")}
        />
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
            <span className={`text-xs font-mono ${muted}`}>{project.year}</span>
            <a
              id={`${project.id}-github`}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all font-mono ${ghBtn}`}
            >
              <GitHubIcon size={12} />
              Repo
              <ExternalIcon />
            </a>
          </div>
        </div>

        <p className={`text-xs font-mono mb-3 ${muted}`}>{project.stack}</p>
        <p
          className={`text-xs leading-[1.7] mb-4 ${dark ? "text-white/65" : "text-black/60"}`}
        >
          {project.description}
        </p>

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Tokens
  const pageBg = isDarkMode ? "bg-[#080808]" : "bg-[#f4f4f4]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const muted = isDarkMode ? "text-white/45" : "text-black/40";
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
      className={`min-h-screen font-mono ${pageBg} ${textColor} transition-colors duration-300`}
    >
      {/* ══════════════════════════════════════
          STICKY NAV
      ══════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span
            className="text-xs tracking-widest uppercase font-semibold truncate max-w-[140px] sm:max-w-none"
            style={{ opacity: scrolled ? 1 : 0, transition: "opacity 0.3s" }}
          >
            Mohamed Zakaria
          </span>
          <div className="flex items-center gap-2">
            <a
              id="nav-github"
              href="https://github.com/MohamedZakaria9014"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 text-xs px-2 sm:px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
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
              className={`flex items-center gap-1.5 text-xs px-2 sm:px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              id="nav-email"
              href="mailto:mohamed.zakariaa.dev@gmail.com"
              className={`flex items-center gap-1.5 text-xs px-2 sm:px-3 py-1.5 rounded-lg transition-all ${socialBtn}`}
              aria-label="Email"
            >
              <EmailIcon size={14} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <button
              id="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/8"}`}
              aria-label="Toggle theme"
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
        className="relative w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Shader fills the entire hero */}
        <div className="absolute inset-0">
          <Dithering
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
          />
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

        {/* Hero text — centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-6 text-center">
          {/* Label */}
          <p
            className="text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-mono"
            style={{
              color: isDarkMode ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.65)",
            }}
          >
            Mobile Software Engineer
          </p>

          {/* Name */}
          <h1
            className="font-bold leading-none mb-4 sm:mb-6 tracking-tight"
            style={{
              fontSize: "clamp(2rem, 8vw, 5.5rem)",
              color: isDarkMode ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.9)",
              textShadow: isDarkMode
                ? "0 0 80px rgba(150,80,255,0.3)"
                : "0 1px 12px rgba(255,255,255,0.8)",
            }}
          >
            Mohamed Zakaria
          </h1>

          {/* Brief */}
          <p
            className="max-w-xs sm:max-w-lg text-xs sm:text-sm leading-[1.8] mb-8 sm:mb-10 font-mono px-2 sm:px-0"
            style={{
              color: isDarkMode ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.7)",
            }}
          >
            Building production-quality mobile applications with clean
            architecture, offline-first patterns, and security at the core. CS
            Graduate · Cairo, Egypt · 2024.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-16 px-4">
            <button
              id="hero-scroll-btn"
              onClick={scrollToContent}
              className={`text-xs px-5 py-2.5 rounded-lg font-mono transition-all ${
                isDarkMode
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/85"
              }`}
            >
              View My Work
            </button>
            <a
              id="hero-github"
              href="https://github.com/MohamedZakaria9014"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 text-xs px-5 py-2.5 rounded-lg font-mono transition-all ${socialBtn}`}
            >
              <GitHubIcon size={12} />
              GitHub
            </a>
            <a
              id="hero-linkedin"
              href="https://www.linkedin.com/in/mohamedzakariaa"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 text-xs px-5 py-2.5 rounded-lg font-mono transition-all ${socialBtn}`}
            >
              <LinkedInIcon size={12} />
              LinkedIn
            </a>
            <a
              id="hero-email"
              href="mailto:mohamed.zakariaa.dev@gmail.com"
              className={`flex items-center gap-2 text-xs px-5 py-2.5 rounded-lg font-mono transition-all ${socialBtn}`}
            >
              <EmailIcon size={12} />
              Email
            </a>
          </div>

          {/* Scroll cue */}
          <button
            onClick={scrollToContent}
            className="hidden sm:flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown />
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTENT
      ══════════════════════════════════════ */}
      <div ref={contentRef} className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        {/* ─ ABOUT ─────────────────────────── */}
        <section id="about" className="pt-20 pb-16">
          <RevealOnScroll>
            <SectionLabel label="About" muted={muted} />
          </RevealOnScroll>

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
                  3.5 GPA · Ranked 9th in class out of 350 students
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
            <SectionLabel label="Projects" muted={muted} />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.id} delay={i * 120}>
                <ProjectCard project={project} dark={isDarkMode} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={`border-t ${divider}`} />

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
      <footer className={`border-t ${divider} py-8`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
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
