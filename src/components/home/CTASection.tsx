import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import childrenCrafts from "@/assets/children-crafts.jpg";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* For Parents */}
          <div className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                Looking for Child Care?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Find a licensed family day home where your child will be safe, happy, and thriving.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/parents#contact" className="flex items-center gap-2">
                  Find a Day Home
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>

          {/* For Educators */}
          <div className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                Ready to Become an Educator?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Join a supportive agency that values your work and helps you succeed.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/educators#apply" className="flex items-center gap-2">
                  Become an Educator
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mt-8 rounded-2xl overflow-hidden shadow-card">
          <img 
            src={childrenCrafts} 
            alt="Toddlers doing arts and crafts painting activity" 
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
