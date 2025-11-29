import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { UploadZone } from "@/components/UploadZone";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const UploadTask = () => {
  const navigate = useNavigate();
  const [taskCode, setTaskCode] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluate = async () => {
    if (!taskCode.trim() && !selectedFile) {
      toast.error("Please provide task code or upload a file");
      return;
    }

    setIsEvaluating(true);
    
    // Simulate AI evaluation
    setTimeout(() => {
      setIsEvaluating(false);
      toast.success("Evaluation completed!");
      navigate("/evaluation/new");
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Submit Your Task</h1>
        <p className="text-muted-foreground">
          Paste your code or upload a file to get AI-powered evaluation
        </p>
      </div>

      <Card className="p-8 space-y-6">
        <div className="space-y-3">
          <Label htmlFor="task-code" className="text-base font-semibold">
            Paste Your Code
          </Label>
          <Textarea
            id="task-code"
            placeholder="// Paste your code here...
function example() {
  // Your implementation
}"
            className="min-h-[300px] font-mono text-sm"
            value={taskCode}
            onChange={(e) => setTaskCode(e.target.value)}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-card px-4 text-muted-foreground">OR</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold">Upload File</Label>
          <UploadZone onFileSelect={setSelectedFile} />
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            onClick={handleEvaluate}
            disabled={isEvaluating}
            className="w-full gradient-primary text-base"
          >
            {isEvaluating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Evaluating with AI...
              </>
            ) : (
              "Run AI Evaluation"
            )}
          </Button>
        </div>

        {isEvaluating && (
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary">AI is analyzing your code...</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-muted-foreground">Checking syntax and structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
                  <span className="text-sm text-muted-foreground">Evaluating logic and efficiency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
                  <span className="text-sm text-muted-foreground">Generating improvement suggestions</span>
                </div>
              </div>
            </div>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default UploadTask;
