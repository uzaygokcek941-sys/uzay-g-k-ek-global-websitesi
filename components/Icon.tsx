import {
  Workflow,
  Bot,
  Globe,
  LayoutDashboard,
  Smartphone,
  Gamepad2,
  Home,
  Stethoscope,
  Scale,
  Building2,
  UtensilsCrossed,
  Apple,
  Dumbbell,
  HardHat,
  Boxes,
  BedDouble,
  Calculator,
  Ticket,
  ShoppingBag,
  Scissors,
  Truck,
  Tag,
  Zap,
  MessageSquare,
  KeyRound,
  ShieldCheck,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Workflow,
  Bot,
  Globe,
  LayoutDashboard,
  Smartphone,
  Gamepad2,
  Home,
  Stethoscope,
  Scale,
  Building2,
  UtensilsCrossed,
  Apple,
  Dumbbell,
  HardHat,
  Boxes,
  BedDouble,
  Calculator,
  Ticket,
  ShoppingBag,
  Scissors,
  Truck,
  Tag,
  Zap,
  MessageSquare,
  KeyRound,
  ShieldCheck,
  Puzzle,
};

export function Icon({
  name,
  className,
  size = 20,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = MAP[name] ?? Puzzle;
  return <Cmp className={className} size={size} strokeWidth={1.6} />;
}
