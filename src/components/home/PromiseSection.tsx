import { Heart } from "lucide-react";

const PromiseSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-6">
            <Heart className="w-7 h-7" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Our Promise
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90">
            To provide safe, loving, high-quality child care that supports the whole child, 
            strengthens families, and uplifts educators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
