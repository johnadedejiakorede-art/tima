import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Parents */}
          <div className="relative p-10 md:p-12 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Looking for Child Care?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Find a licensed family day home where your child will be safe, happy, and thriving in a nurturing environment.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/parents" className="flex items-center gap-2">
                  Find a Day Home
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>

          {/* For Educators */}
          <div className="relative p-10 md:p-12 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Become an Educator?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join a supportive agency that values your work, respects your home, and provides the training you need to succeed.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/educators" className="flex items-center gap-2">
                  Become an Educator
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
