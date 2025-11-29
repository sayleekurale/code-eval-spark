import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TaskCard } from "@/components/TaskCard";
import { Upload } from "lucide-react";

const mockReports = [
  { id: 1, title: "Binary Search Algorithm", date: "2024-01-15", score: 85, status: "completed" as const },
  { id: 2, title: "React Component Optimization", date: "2024-01-14", score: 72, status: "completed" as const },
  { id: 3, title: "Database Query Performance", date: "2024-01-12", score: 91, status: "unlocked" as const },
  { id: 4, title: "REST API Implementation", date: "2024-01-10", score: 68, status: "completed" as const },
  { id: 5, title: "State Management Pattern", date: "2024-01-08", score: 88, status: "unlocked" as const },
  { id: 6, title: "Async/Await Error Handling", date: "2024-01-05", score: 76, status: "completed" as const },
];

const Reports = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">All Reports</h1>
          <p className="text-muted-foreground">
            View and manage your task evaluation history
          </p>
        </div>
        <Button onClick={() => navigate("/upload-task")} className="gradient-primary">
          <Upload className="w-4 h-4 mr-2" />
          New Evaluation
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

      {mockReports.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No reports yet</h3>
          <p className="text-muted-foreground mb-6">
            Upload your first task to get started
          </p>
          <Button onClick={() => navigate("/upload-task")} className="gradient-primary">
            Upload Task
          </Button>
        </div>
      )}
    </div>
  );
};

export default Reports;
