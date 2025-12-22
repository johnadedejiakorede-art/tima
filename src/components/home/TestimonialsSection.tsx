import { Star, Quote } from "lucide-react";
import parentChild from "@/assets/parent-child.jpg";

const testimonials = [
  {
    quote: "Our educator feels like family. My child is excited every morning and comes home happy every day.",
    author: "Sarah M.",
    location: "Calgary Parent",
    rating: 5,
  },
  {
    quote: "The agency supports me so well. I never feel alone. The training has made me a better educator.",
    author: "Jennifer L.",
    location: "Cochrane Educator",
    rating: 5,
  },
  {
    quote: "Finding quality childcare was stressful until we discovered Tima. Perfect for our toddler.",
    author: "Michael & Lisa R.",
    location: "Calgary Parents",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={parentChild} 
                alt="Happy parent hugging their child at daycare pickup" 
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Testimonials side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Community Says
            </h2>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative p-5 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/90 text-sm leading-relaxed mb-3 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
