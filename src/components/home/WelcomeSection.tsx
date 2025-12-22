import { Heart, Users, GraduationCap } from "lucide-react";
import educatorImage from "@/assets/educator-reading.jpg";

const WelcomeSection = () => {
  return (
    <section id="welcome" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Welcome to Tima Family Day Home Agency
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Tima Family Day Home Agency, we believe every child deserves a safe, loving, 
              and enriching place to grow. As a licensed agency serving Calgary, Cochrane, and 
              surrounding areas, we partner with dedicated educators to provide high-quality, 
              home-based child care rooted in warmth, professionalism, and early learning excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to supporting families, uplifting educators, and ensuring every child 
              receives the care, attention, and learning opportunities they deserve.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={educatorImage} 
                alt="Educator reading to children in a warm home daycare setting" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Supporting Families</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping parents find trusted, licensed day homes that feel like an extension of their own family.
            </p>
          </div>

          <div className="group p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Uplifting Educators</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing training, resources, and ongoing support to help educators deliver exceptional care.
            </p>
          </div>

          <div className="group p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Every Child Matters</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ensuring every child receives the care, attention, and learning opportunities they deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
