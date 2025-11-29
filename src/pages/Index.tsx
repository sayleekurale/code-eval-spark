import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, CheckCircle, TrendingUp, Shield, Zap, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Smart Task Evaluator</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Sign in
            </Button>
            <Button onClick={() => navigate("/signup")} className="gradient-primary">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              AI-Powered Code Evaluation
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Level Up Your Coding Skills with{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                AI Feedback
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get instant, detailed AI-powered evaluation of your coding tasks.
              Receive comprehensive feedback, scoring, and personalized improvement suggestions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="gradient-primary text-base px-8"
              >
                Start Free Evaluation
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/login")}
                className="text-base"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Smart Task Evaluator?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets developer needs for comprehensive code analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "Instant Feedback",
                description: "Get AI-powered evaluation results in seconds, not hours",
              },
              {
                icon: TrendingUp,
                title: "Detailed Scoring",
                description: "Comprehensive scoring with strengths and improvement areas",
              },
              {
                icon: Shield,
                title: "Best Practices",
                description: "Learn industry standards and secure coding patterns",
              },
              {
                icon: Code,
                title: "Multi-Language",
                description: "Support for Python, JavaScript, TypeScript, Java, C++, and more",
              },
              {
                icon: Zap,
                title: "Fast & Efficient",
                description: "Advanced AI algorithms for quick and accurate analysis",
              },
              {
                icon: Users,
                title: "Track Progress",
                description: "Monitor your improvement over time with detailed history",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Improve Your Code?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join developers who are leveling up their skills with AI-powered feedback
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="bg-white text-primary hover:bg-white/90 text-base px-8"
              >
                Get Started for Free
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">Smart Task Evaluator</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Smart Task Evaluator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
