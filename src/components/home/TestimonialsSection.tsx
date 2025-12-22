import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our educator feels like family. My child is excited every morning and comes home happy every day. We couldn't ask for better care.",
    author: "Sarah M.",
    location: "Calgary Parent",
    rating: 5,
  },
  {
    quote: "The agency supports me so well. I never feel alone in my work. The training and resources have made me a better educator.",
    author: "Jennifer L.",
    location: "Cochrane Educator",
    rating: 5,
  },
  {
    quote: "Finding quality childcare was stressful until we discovered Tima. The home environment has been perfect for our toddler's development.",
    author: "Michael & Lisa R.",
    location: "Calgary Parents",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from families and educators who are part of the Tima community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
