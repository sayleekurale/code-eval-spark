import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  date: string;
  score: number;
  status: "completed" | "pending" | "unlocked";
  onView: () => void;
}

export const TaskCard = ({ title, date, score, status, onView }: TaskCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-success/10";
    if (score >= 60) return "bg-warning/10";
    return "bg-destructive/10";
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-smooth cursor-pointer group" onClick={onView}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{title}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className={cn("px-3 py-1 rounded-full text-sm font-semibold", getScoreBg(score), getScoreColor(score))}>
          {score}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="w-4 h-4" />
          <span className="capitalize">{status}</span>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
          View Report →
        </Button>
      </div>
    </Card>
  );
};
