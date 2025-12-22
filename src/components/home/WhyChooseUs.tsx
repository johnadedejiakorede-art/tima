import { Shield, Home, Palette, MessageCircle, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed & Regulated Care",
    description: "Fully licensed by the Government of Alberta with regular monitoring visits, safety checks, and ongoing support to ensure the highest standards.",
  },
  {
    icon: Home,
    title: "Warm, Home-Based Environment",
    description: "Children thrive in small, family-like settings where they build strong relationships, feel secure, and receive individualized attention.",
  },
  {
    icon: Palette,
    title: "Play-Based Early Learning",
    description: "Developmentally appropriate, play-based approaches supporting cognitive, social, emotional, and physical growth through exploration and creativity.",
  },
  {
    icon: MessageCircle,
    title: "Strong Family Partnerships",
    description: "Open communication, transparency, and collaboration. Families receive ongoing updates, support, and guidance from educators and the agency.",
  },
  {
    icon: Users,
    title: "Supportive Educator Community",
    description: "Training, resources, compliance support, and professional development helping educators deliver exceptional care every day.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Families Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Tima Family Day Home Agency the trusted choice for Calgary families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/30 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
