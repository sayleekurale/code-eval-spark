import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard } from "lucide-react";
import { toast } from "sonner";

const Payments = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      toast.success("Payment successful!");
      
      setTimeout(() => {
        navigate("/evaluation/1");
      }, 2000);
    }, 2000);
  };

  if (paymentComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Your full evaluation report has been unlocked. Redirecting...
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Unlock Full Report</h1>
        <p className="text-muted-foreground">
          Get comprehensive analysis and detailed recommendations
        </p>
      </div>

      <Card className="p-8 gradient-card border-2 border-primary/20">
        <div className="space-y-6">
          <div className="text-center pb-6 border-b border-border">
            <div className="text-4xl font-bold text-primary mb-2">$4.99</div>
            <p className="text-muted-foreground">One-time payment</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">What's included:</h3>
            <ul className="space-y-3">
              {[
                "Complete code analysis report",
                "Line-by-line suggestions",
                "Performance optimization tips",
                "Security best practices",
                "Personalized learning resources",
                "Downloadable PDF report",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Button
              size="lg"
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full gradient-primary text-base"
            >
              {isProcessing ? (
                "Processing Payment..."
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay $4.99 & Unlock Report
                </>
              )}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Secure payment processing. No subscription required.
          </p>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <p className="text-sm text-center text-muted-foreground">
          💡 <strong>Money-back guarantee:</strong> Not satisfied? Get a full refund within 24 hours.
        </p>
      </Card>
    </div>
  );
};

export default Payments;
