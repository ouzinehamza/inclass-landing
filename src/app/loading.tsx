import { LogoLockup } from "@/components/icons";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream/90 backdrop-blur-md dark:bg-ink-950/90">
      <div className="relative flex flex-col items-center">
        {/* Pulsing ring */}
        <div className="absolute -inset-4 animate-ping rounded-full bg-student-400/20 duration-1000" />

        {/* Animated Brand Logo */}
        <div className="relative animate-pulse">
          <LogoLockup markClassName="h-14 w-14" textClassName="text-2xl font-extrabold tracking-tight" />
        </div>

        {/* Loading Spinner Bar */}
        <div className="mt-8 h-1.5 w-36 overflow-hidden rounded-full bg-line/80 dark:bg-white/10">
          <div className="h-full w-full origin-left animate-[marquee_1.5s_infinite_linear] rounded-full bg-gradient-to-r from-student-500 via-tutor-500 to-parent-500" />
        </div>

        <p className="mt-3 text-xs font-semibold text-ink-soft dark:text-white/50">
          Chargement de l&apos;espace INCLASS...
        </p>
      </div>
    </div>
  );
}
