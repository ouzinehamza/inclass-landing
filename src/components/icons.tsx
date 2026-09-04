import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  Atom,
  Backpack,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Calculator,
  Camera,
  ChartNoAxesCombined,
  ChartPie,
  Clock,
  Code2,
  Coins,
  Cpu,
  Database,
  Dna,
  FileText,
  Film,
  FlaskConical,
  Globe,
  Globe2,
  GraduationCap,
  Heart,
  Languages,
  Landmark,
  Lightbulb,
  Map,
  Megaphone,
  Mic,
  Mic2,
  Monitor,
  Music4,
  Palette,
  PenLine,
  PenTool,
  Pencil,
  Scale,
  Scissors,
  Settings,
  ShieldCheck,
  Sigma,
  Smartphone,
  Smile,
  Sparkles,
  Speech,
  Star,
  Truck,
  Users,
  Video,
  Zap,
} from "lucide-react";

import { ANIMATED_SUBJECT_ICONS } from "./animated-icons";

export * from "./animated-icons";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const SUBJECT_ICONS: Record<string, IconType> = {
  math: Sigma,
  calculator: Calculator,
  physics: Atom,
  atom: Atom,
  chemistry: FlaskConical,
  beaker: FlaskConical,
  biology: Dna,
  dna: Dna,
  french: PenLine,
  arabic: Languages,
  english: Speech,
  spanish: Globe2,
  translate: Languages,
  history: Landmark,
  clock: Clock,
  philosophy: Brain,
  code: Code2,
  "desktop-computer": Monitor,
  economics: ChartNoAxesCombined,
  "currency-dollar": Coins,
  cash: Coins,
  accounting: FileText,
  "document-text": FileText,
  briefcase: Briefcase,
  megaphone: Megaphone,
  scale: Scale,
  music: Music4,
  "music-note": Music4,
  art: Palette,
  "color-swatch": Palette,
  pencil: Pencil,
  "pencil-alt": PenTool,
  camera: Camera,
  "office-building": Building2,
  "lightning-bolt": Zap,
  cog: Settings,
  truck: Truck,
  heart: Heart,
  "emoji-happy": Smile,
  "device-mobile": Smartphone,
  "chart-pie": ChartPie,
  "chart-bar": BarChart3,
  chip: Cpu,
  database: Database,
  "shield-check": ShieldCheck,
  template: Palette,
  film: Film,
  cube: Sparkles,
  "academic-cap": GraduationCap,
  "light-bulb": Lightbulb,
  map: Map,
  globe: Globe,
  users: Users,
  "user-group": Users,
  primary: Backpack,
  book: BookOpen,
  "book-open": BookOpen,
  cap: GraduationCap,
  microphone: Mic2,
  star: Star,
};

export function SubjectIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const normalized = (name || "").toLowerCase();
  const Animated = ANIMATED_SUBJECT_ICONS[normalized];
  if (Animated) {
    return <Animated className={className} />;
  }
  const Icon = SUBJECT_ICONS[normalized] ?? BookOpen;
  return <Icon className={className} aria-hidden="true" />;
}

/**
 * INCLASS brand mark — from /logo-inclass.svg.
 * Single source of truth for the logo.
 */
export function Logo({
  className = "h-9 w-9",
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}) {
  return (
    <img
      src="/logo-inclass.svg"
      alt="INCLASS"
      className={`object-contain shrink-0 ${className}`}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-brand ${className}`}>
      IN<span className="text-student-500">CLASS</span>
    </span>
  );
}

/** Logo + wordmark lockup, shared across header, footer and dark surfaces. */
export function LogoLockup({
  className = "",
  markClassName = "h-9 w-9",
  textClassName = "text-[22px] font-extrabold tracking-tight font-brand",
  onDark = false,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Logo className={markClassName} />
      <span className={`font-brand ${textClassName} ${onDark ? "text-cream" : "text-ink dark:text-cream"}`}>
        IN<span className="text-student-500">CLASS</span>
      </span>
    </span>
  );
}

/** Hand-drawn underline used under highlighted words. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 14" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 9.5C40 3.5 78 2.4 116 4.2c38 1.8 76 5.4 121 2.1"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1.8c.9 5.2 3.1 7.4 8.3 8.3-5.2.9-7.4 3.1-8.3 8.3-.9-5.2-3.1-7.4-8.3-8.3 5.2-.9 7.4-3.1 8.3-8.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 7c18 20 40 27 70 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <path
        d="M62 24c5 3.7 9 6 12 8-4 1.5-8 4-11.5 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Moroccan zellige-inspired star, used as a decorative pattern tile. */
export function ZelligeStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 2 39 17l16-7-7 16 15 6-15 6 7 16-16-7-7 15-7-15-16 7 7-16-15-6 15-6-7-16 16 7 7-15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MoroccoFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#C1272D" />
      <path
        d="m12 4.6 1.9 3.9 4.2.4-3.2 2.6 1 4-3.9-2.2-3.9 2.2 1-4L5.9 8.9l4.2-.4L12 4.6Z"
        fill="none"
        stroke="#006233"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
