import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TaskCard } from "@/components/TaskCard";
import { Upload, TrendingUp, Clock, CheckCircle } from "lucide-react";

const mockReports = [
  { id: 1, title: "Binary Search Algorithm", date: "2024-01-15", score: 85, status: "completed" as const },
  { id: 2, title: "React Component Optimization", date: "2024-01-14", score: 72, status: "completed" as const },
  { id: 3, title: "Database Query Performance", date: "2024-01-12", score: 91, status: "unlocked" as const },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Banner */}
      <Card className="p-8 gradient-hero text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Developer!</h1>
          <p className="text-white/90 mb-6 max-w-2xl">
            Ready to level up your coding skills? Upload a new task to get AI-powered evaluation and insights.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/upload-task")}
            className="bg-white text-primary hover:bg-white/90"
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload New Task
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Evaluations</p>
              <p className="text-2xl font-bold">{mockReports.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Average Score</p>
              <p className="text-2xl font-bold">83</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Reports */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recent Reports</h2>
          <Button variant="ghost" onClick={() => navigate("/reports")}>
            View all →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReports.map((report) => (
            <TaskCard
              key={report.id}
              title={report.title}
              date={report.date}
              score={report.score}
              status={report.status}
              onView={() => navigate(`/evaluation/${report.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
