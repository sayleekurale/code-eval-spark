import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScoreDisplay } from "@/components/ScoreDisplay";
import { CheckCircle, AlertTriangle, TrendingUp, Lock } from "lucide-react";

const Evaluation = () => {
  const navigate = useNavigate();
  
  const mockEvaluation = {
    score: 78,
    strengths: [
      "Clean code structure with proper naming conventions",
      "Efficient algorithm implementation",
      "Good error handling practices",
    ],
    weaknesses: [
      "Missing input validation for edge cases",
      "Lack of comprehensive comments",
    ],
    improvements: [
      "Add unit tests for core functions",
      "Implement better error messages",
      "Consider using design patterns for scalability",
    ],
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Evaluation Results</h1>
          <p className="text-muted-foreground">Binary Search Algorithm - Jan 15, 2024</p>
        </div>
        <Button variant="outline" onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </Button>
      </div>

      {/* Score Display */}
      <ScoreDisplay score={mockEvaluation.score} />

      {/* Strengths */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-success" />
          </div>
          <h2 className="text-xl font-semibold">Strengths</h2>
        </div>
        <ul className="space-y-3">
          {mockEvaluation.strengths.map((strength, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-success" />
              </div>
              <span className="text-muted-foreground">{strength}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Weaknesses */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <h2 className="text-xl font-semibold">Areas for Improvement</h2>
        </div>
        <ul className="space-y-3">
          {mockEvaluation.weaknesses.map((weakness, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-warning" />
              </div>
              <span className="text-muted-foreground">{weakness}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Locked Full Report */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Unlock Full Detailed Report</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Get comprehensive analysis, code suggestions, and personalized learning paths
            </p>
          </div>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => navigate("/payments/1")}
              className="gradient-primary"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Unlock Full Report - $4.99
            </Button>
          </div>
        </div>
      </Card>

      {/* Improvements Preview (Blurred) */}
      <Card className="p-6 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Detailed Recommendations</h2>
        </div>
        <div className="relative">
          <ul className="space-y-3 blur-sm select-none">
            {mockEvaluation.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{improvement}</span>
              </li>
            ))}
          </ul>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
        </div>
      </Card>
    </div>
  );
};

export default Evaluation;
