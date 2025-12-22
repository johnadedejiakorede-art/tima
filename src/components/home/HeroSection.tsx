import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Happy children playing and learning together in a nurturing day home environment" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-up">
            <Shield size={16} />
            <span className="text-sm font-medium">Licensed by the Government of Alberta</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Where Quality Meets{" "}
            <span className="text-gradient">Home</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Licensed, nurturing, play-based family day homes where children grow, explore, and belong. 
            We support families with trusted child care options and empower educators with professional guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/parents#contact" className="flex items-center gap-2">
                <Heart size={20} />
                Find a Day Home
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/educators#apply" className="flex items-center gap-2">
                <Sparkles size={20} />
                Become an Educator
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Calgary</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Cochrane</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
