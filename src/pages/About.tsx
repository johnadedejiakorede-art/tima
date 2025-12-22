import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Heart, Target, Eye, Shield, Home, Palette, Users, Globe, Sparkles } from "lucide-react";

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
        <section className="py-20 md:py-28 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tima Family Day Home Agency was founded on a simple belief: every child deserves 
                a place where they feel safe, valued, and inspired.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Building a Better Future for Children
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                <div className="aspect-square rounded-3xl bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-3xl bg-secondary/50 flex items-center justify-center">
                    <Sparkles className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="p-10 md:p-12 rounded-3xl bg-card border border-border/50 shadow-card">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide high-quality, licensed family day home child care that nurtures 
                  children, supports educators, and strengthens families.
                </p>
              </div>

              {/* Vision */}
              <div className="p-10 md:p-12 rounded-3xl bg-card border border-border/50 shadow-card">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A community where every child has access to safe, loving, and enriching 
                  early learning experiences in a home environment supported by professional guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Proudly Serving Our Community
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {["Calgary", "Cochrane", "Surrounding Communities"].map((area) => (
                  <span
                    key={area}
                    className="px-6 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium"
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
