"use client";

import React from "react";

/* =========================================================
   ICON PROPS
   ========================================================= */

export type IconProps = {
  className?: string;
  size?: number;
};

/* =========================================================
   ICONS8 CONFIG
   ========================================================= */

const ICONS8_BASE = "https://img.icons8.com/claude-hand-drawn";

/* =========================================================
   SHARED ICON COMPONENT
   ========================================================= */

type Icons8IconProps = IconProps & {
  name: string;
  alt?: string;
};

function Icons8Icon({
  name,
  className = "",
  size = 40,
  alt = "",
}: Icons8IconProps) {
  // Never allow icons to become larger than 40px
  const safeSize = Math.min(Math.max(size, 16), 40);

  return (
    <img
      src={`${ICONS8_BASE}/${safeSize}/${name}.png`}
      alt={alt}
      width={safeSize}
      height={safeSize}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`subject-icon ${className}`}
      aria-hidden={alt ? undefined : true}
    />
  );
}

/* =========================================================
   ICON CSS
   ========================================================= */

export const ICONS8_CLAUDE_STYLES = `
  .subject-icon {
    display: inline-block;
    width: min(40px, 100%);
    height: auto;
    max-width: 40px;
    max-height: 40px;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
    flex: 0 0 auto;
    vertical-align: middle;
    user-select: none;
    -webkit-user-drag: none;
  }

  @media (max-width: 768px) {
    .subject-icon {
      width: 36px;
      max-width: 36px;
      max-height: 36px;
    }
  }

  @media (max-width: 480px) {
    .subject-icon {
      width: 32px;
      max-width: 32px;
      max-height: 32px;
    }
  }

  @media (max-width: 360px) {
    .subject-icon {
      width: 30px;
      max-width: 30px;
      max-height: 30px;
    }
  }
`;

/* =========================================================
   1. MATH
   ========================================================= */

export function MathAnimatedIcon({
  className = "",
  size = 240,
}: IconProps) {
  return (
    <Icons8Icon
      name="calculator"
      size={size}
      className={className}
      alt="Mathématiques"
    />
  );
}

/* =========================================================
   2. PHYSICS
   ========================================================= */

export function PhysicsAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="atom"
      size={size}
      className={className}
      alt="Physique"
    />
  );
}

/* =========================================================
   3. CHEMISTRY
   ========================================================= */

export function ChemistryAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="chemistry"
      size={size}
      className={className}
      alt="Chimie"
    />
  );
}

/* =========================================================
   4. FRENCH
   ========================================================= */

export function FrenchAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="pen"
      size={size}
      className={className}
      alt="Français"
    />
  );
}

/* =========================================================
   5. ENGLISH
   ========================================================= */

export function EnglishAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="chat"
      size={size}
      className={className}
      alt="Anglais"
    />
  );
}

/* =========================================================
   6. ARABIC
   ========================================================= */

export function ArabicAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="language"
      size={size}
      className={className}
      alt="Arabe et langues"
    />
  );
}

/* =========================================================
   7. BIOLOGY
   ========================================================= */

export function BiologyAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="dna"
      size={size}
      className={className}
      alt="Biologie"
    />
  );
}

/* =========================================================
   8. CODE
   ========================================================= */

export function CodeAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="code"
      size={size}
      className={className}
      alt="Informatique"
    />
  );
}

/* =========================================================
   9. ECONOMICS
   ========================================================= */

export function EconomicsAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="bar-chart"
      size={size}
      className={className}
      alt="Économie"
    />
  );
}

/* =========================================================
   10. PRIMARY
   ========================================================= */

export function PrimaryAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="backpack"
      size={size}
      className={className}
      alt="Primaire"
    />
  );
}

/* =========================================================
   11. ACADEMIC CAP
   ========================================================= */

export function AcademicCapAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="graduation-cap"
      size={size}
      className={className}
      alt="Études supérieures"
    />
  );
}

/* =========================================================
   12. PHILOSOPHY
   ========================================================= */

export function PhilosophyAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="brain"
      size={size}
      className={className}
      alt="Philosophie"
    />
  );
}

/* =========================================================
   13. HISTORY
   ========================================================= */

export function HistoryAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="landmark"
      size={size}
      className={className}
      alt="Histoire et géographie"
    />
  );
}

/* =========================================================
   14. SEARCH
   ========================================================= */

export function SearchAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="search"
      size={size}
      className={className}
      alt="Rechercher"
    />
  );
}

/* =========================================================
   15. CALENDAR
   ========================================================= */

export function CalendarAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="calendar"
      size={size}
      className={className}
      alt="Calendrier"
    />
  );
}

/* =========================================================
   16. TRENDING
   ========================================================= */

export function TrendingAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="combo-chart"
      size={size}
      className={className}
      alt="Croissance"
    />
  );
}

/* =========================================================
   17. SHIELD
   ========================================================= */

export function ShieldAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="shield"
      size={size}
      className={className}
      alt="Protection"
    />
  );
}

/* =========================================================
   18. WALLET
   ========================================================= */

export function WalletAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="wallet"
      size={size}
      className={className}
      alt="Paiement"
    />
  );
}

/* =========================================================
   19. INBOX
   ========================================================= */

export function InboxAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="mail"
      size={size}
      className={className}
      alt="Messages"
    />
  );
}

/* =========================================================
   20. USERS
   ========================================================= */

export function UsersAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="users"
      size={size}
      className={className}
      alt="Utilisateurs"
    />
  );
}

/* =========================================================
   21. PROFILE
   ========================================================= */

export function ProfileAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="user"
      size={size}
      className={className}
      alt="Profil"
    />
  );
}

/* =========================================================
   22. ROCKET
   ========================================================= */

export function RocketAnimatedIcon({
  className = "",
  size = 40,
}: IconProps) {
  return (
    <Icons8Icon
      name="rocket"
      size={size}
      className={className}
      alt="Lancement"
    />
  );
}

/* =========================================================
   DYNAMIC SUBJECT ICON MAP
   ========================================================= */

export const ANIMATED_SUBJECT_ICONS: Record<
  string,
  React.ComponentType<IconProps>
> = {
  /* Math */
  math: MathAnimatedIcon,
  calculator: MathAnimatedIcon,

  /* Physics */
  physics: PhysicsAnimatedIcon,
  atom: PhysicsAnimatedIcon,

  /* Chemistry */
  chemistry: ChemistryAnimatedIcon,
  beaker: ChemistryAnimatedIcon,

  /* Languages */
  french: FrenchAnimatedIcon,
  english: EnglishAnimatedIcon,
  spanish: EnglishAnimatedIcon,
  arabic: ArabicAnimatedIcon,
  translate: ArabicAnimatedIcon,

  /* Biology */
  biology: BiologyAnimatedIcon,
  dna: BiologyAnimatedIcon,

  /* Computer */
  code: CodeAnimatedIcon,
  "desktop-computer": CodeAnimatedIcon,

  /* Economics */
  economics: EconomicsAnimatedIcon,
  "chart-bar": EconomicsAnimatedIcon,

  /* School */
  primary: PrimaryAnimatedIcon,

  /* Higher education */
  "academic-cap": AcademicCapAnimatedIcon,
  cap: AcademicCapAnimatedIcon,

  /* Philosophy */
  philosophy: PhilosophyAnimatedIcon,

  /* History */
  history: HistoryAnimatedIcon,
  landmark: HistoryAnimatedIcon,

  /* Utility */
  search: SearchAnimatedIcon,
  users: UsersAnimatedIcon,
  calendar: CalendarAnimatedIcon,
  trending: TrendingAnimatedIcon,
  shield: ShieldAnimatedIcon,
  wallet: WalletAnimatedIcon,
  inbox: InboxAnimatedIcon,
  profile: ProfileAnimatedIcon,
  rocket: RocketAnimatedIcon,
};

/* =========================================================
   DEFAULT EXPORT
   ========================================================= */

export default ANIMATED_SUBJECT_ICONS;