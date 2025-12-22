import { Heart, Users, GraduationCap } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome to Tima Family Day Home Agency
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Tima Family Day Home Agency, we believe every child deserves a safe, loving, 
            and enriching place to grow. As a licensed agency serving Calgary, Cochrane, and 
            surrounding areas, we partner with dedicated educators to provide high-quality, 
            home-based child care rooted in warmth, professionalism, and early learning excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Supporting Families</h3>
            <p className="text-muted-foreground leading-relaxed">
              Helping parents find trusted, licensed day homes that feel like an extension of their own family.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Uplifting Educators</h3>
            <p className="text-muted-foreground leading-relaxed">
              Providing training, resources, and ongoing support to help educators deliver exceptional care.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Every Child Matters</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ensuring every child receives the care, attention, and learning opportunities they deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
