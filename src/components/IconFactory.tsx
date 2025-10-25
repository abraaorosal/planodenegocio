import {
  BriefcaseBusiness,
  Cpu,
  LineChart,
  Rocket,
  Sparkles,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  LineChart,
  BriefcaseBusiness,
  Cpu,
  Rocket
};

type IconFactoryProps = {
  name: string;
  className?: string;
};

export function IconFactory({ name, className }: IconFactoryProps) {
  const Icon = iconMap[name] ?? Rocket;
  return <Icon className={className} />;
}
