import { Shield, Home, Palette, MessageCircle, Users } from "lucide-react";
import daycareRoom from "@/assets/daycare-room.jpg";
import outdoorPlay from "@/assets/outdoor-play.jpg";

const features = [
  {
    icon: Shield,
    title: "Licensed & Regulated Care",
    description: "Fully licensed by the Government of Alberta with regular monitoring visits and safety checks.",
  },
  {
    icon: Home,
    title: "Warm, Home-Based Environment",
    description: "Children thrive in small, family-like settings with individualized attention.",
  },
  {
    icon: Palette,
    title: "Play-Based Early Learning",
    description: "Developmentally appropriate approaches supporting cognitive and social growth.",
  },
  {
    icon: MessageCircle,
    title: "Strong Family Partnerships",
    description: "Open communication with ongoing updates and guidance for families.",
  },
  {
    icon: Users,
    title: "Supportive Educator Community",
    description: "Training and professional development helping educators excel every day.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Our Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Families Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Tima Family Day Home Agency the trusted choice for Calgary families.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Features */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative p-5 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image column */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={daycareRoom} 
                alt="Clean organized home daycare classroom with educational toys" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={outdoorPlay} 
                alt="Children playing outdoors in a backyard playground" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
