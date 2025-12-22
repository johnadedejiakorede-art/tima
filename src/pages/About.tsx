import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Heart, Target, Eye, Shield, Home, Palette, Users, Globe, Sparkles } from "lucide-react";
import educatorReading from "@/assets/educator-reading.jpg";
import heroChildren from "@/assets/hero-children.jpg";

const values = [
  { icon: Shield, title: "Safety First", description: "We uphold the highest standards of licensing and monitoring." },
  { icon: Home, title: "Warmth & Belonging", description: "Every child deserves a place that feels like home." },
  { icon: Palette, title: "Learning Through Play", description: "Play is the foundation of early learning." },
  { icon: Users, title: "Partnership", description: "Families and educators thrive when supported." },
  { icon: Heart, title: "Community", description: "We build connections that last." },
  { icon: Globe, title: "Diversity & Inclusion", description: "We welcome all families, cultures, and backgrounds." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Tima Family Day Home Agency - Calgary Child Care</title>
        <meta 
          name="description" 
          content="Learn about Tima Family Day Home Agency's mission to provide high-quality, licensed family day home child care in Calgary and Cochrane, Alberta." 
        />
        <meta name="keywords" content="about Tima, family day home agency, Calgary child care mission, licensed day home Alberta" />
        <link rel="canonical" href="https://timadayhome.ca/about" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tima Family Day Home Agency was founded on a simple belief: every child deserves 
                a place where they feel safe, valued, and inspired.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Building a Better Future for Children
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    With a strong background in early childhood education and a deep commitment 
                    to community, we created an agency that blends professional standards with 
                    family-centered care.
                  </p>
                  <p>
                    We support educators, empower families, and ensure that every child in our 
                    program receives the highest quality of care in a warm, home-based environment.
                  </p>
                  <p>
                    Our approach is simple: treat every child as if they were our own, support 
                    every educator with the tools they need to succeed, and partner with every 
                    family to create lasting relationships built on trust.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={heroChildren} 
                    alt="Happy children playing and learning together" 
                    className="w-full h-72 md:h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-card">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality, licensed family day home child care that nurtures 
                  children, supports educators, and strengthens families.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-card">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A community where every child has access to safe, loving, and enriching 
                  early learning experiences in a home environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  Our Values
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  What We Stand For
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="group p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      <value.icon className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
                      <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={educatorReading} 
                  alt="Educator reading to children in a nurturing environment" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 md:py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Proudly Serving Our Community
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Calgary", "Cochrane", "Surrounding Communities"].map((area) => (
                  <span
                    key={area}
                    className="px-5 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
