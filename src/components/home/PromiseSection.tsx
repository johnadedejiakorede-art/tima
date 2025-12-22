import { Heart } from "lucide-react";

const PromiseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-8">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Promise
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90">
            To provide safe, loving, high-quality child care that supports the whole child, 
            strengthens families, and uplifts educators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
