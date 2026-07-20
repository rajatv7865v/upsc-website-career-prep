import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

type AnimatedIconProps = {
  icon: IconComponent;
  variant?: "float" | "spin" | "bob" | "pulse" | "wiggle" | "orbit";
  tone?: "light" | "dark" | "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  delay?: number;
};

export default function AnimatedIcon({
  icon: Icon,
  variant = "float",
  tone = "light",
  size = "md",
  className = "",
  delay = 0,
}: AnimatedIconProps) {
  return (
    <span
      className={`ai-wrap ai-${tone} ai-${size} ai-${variant} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="ai-ring" aria-hidden />
      <Icon className="ai-svg" />
    </span>
  );
}
