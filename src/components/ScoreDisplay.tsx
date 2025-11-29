import { cn } from "@/lib/utils";
import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  className?: string;
}

export const ScoreDisplay = ({ score, className }: ScoreDisplayProps) => {
  const getScoreData = (score: number) => {
    if (score >= 80) {
      return {
        color: "text-success",
        bg: "bg-success/10",
        border: "border-success/20",
        icon: CheckCircle,
        label: "Excellent",
      };
    }
    if (score >= 60) {
      return {
        color: "text-warning",
        bg: "bg-warning/10",
        border: "border-warning/20",
        icon: TrendingUp,
        label: "Good",
      };
    }
    return {
      color: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/20",
      icon: AlertTriangle,
      label: "Needs Improvement",
    };
  };

  const { color, bg, border, icon: Icon, label } = getScoreData(score);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border-2", border, bg, className)}>
      <div className="p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-4">
          <Icon className={cn("w-8 h-8", color)} />
        </div>
        <div className={cn("text-6xl font-bold mb-2", color)}>{score}</div>
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-card">
        <div
          className={cn("h-full transition-all duration-1000", color.replace("text-", "bg-"))}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
};
