import { Link } from "@tanstack/react-router";

import logoImage from "@/assets/vridyna-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Vridyna — home"
      className={cn("group inline-flex items-center", className)}
    >
      <img
        src={logoImage}
        alt="Vridyna Technologies"
        width={726}
        height={276}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
