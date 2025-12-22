import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Users, ClipboardCheck, Heart, Briefcase, 
  Shield, Sparkles, CheckCircle, ArrowRight, Star
} from "lucide-react";
import educatorReading from "@/assets/educator-reading.jpg";

const benefits = [
  { icon: GraduationCap, title: "Professional Onboarding", description: "Comprehensive training to set you up for success." },
  { icon: Users, title: "Ongoing Support", description: "Regular monitoring and guidance from experienced staff." },
  { icon: ClipboardCheck, title: "Compliance Help", description: "Assistance with documentation and licensing." },
  { icon: Heart, title: "Educator Community", description: "Connect with others for support and growth." },
  { icon: Briefcase, title: "Run Your Business", description: "Flexibility of your own day home with guidance." },
  { icon: Shield, title: "Licensing Support", description: "Help through every step of licensing." },
];

const qualities = [
  "Warm, caring individuals who love working with children",
  "Passionate about early childhood development",
  "Organized and committed to safety",
  "Ready to create a nurturing home environment",
  "Open to learning and professional growth",
];

const steps = [
  { step: 1, title: "Express Interest", description: "Contact us to learn more." },
  { step: 2, title: "Complete Screening", description: "Background checks and orientation." },
  { step: 3, title: "Prepare Your Home", description: "Meet licensing requirements." },
  { step: 4, title: "Receive Training", description: "Comprehensive early childhood training." },
  { step: 5, title: "Open Your Day Home", description: "Launch with ongoing support." },
];

const Educators = () => {
  return (
    <>
      <Helmet>
        <title>Become an Educator | Join Tima Family Day Home Agency - Calgary</title>
        <meta 
          name="description" 
          content="Join Tima Family Day Home Agency as a licensed family day home educator in Calgary or Cochrane. Get training, support, and guidance." 
        />
        <meta name="keywords" content="become day home educator, family day home provider Calgary, start day home business Alberta" />
        <link rel="canonical" href="https://timadayhome.ca/educators" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                  <Sparkles size={16} />
                  Join Our Team
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Become a Licensed Educator
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Join a supportive agency that values your work, respects your home, 
                  and helps you succeed in providing quality child care.
                </p>
                <Button variant="accent" size="xl" asChild>
                  <a href="#apply" className="flex items-center gap-2">
                    Apply Now
                    <ArrowRight size={20} />
                  </a>
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={educatorReading} 
                  alt="Educator reading to children" 
                  className="w-full h-72 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section id="benefits" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Why Join Us
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Why Educators Choose Tima
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We provide everything you need to run a successful family day home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section id="qualities" className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  Who We're Looking For
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Is This You?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  We're looking for dedicated individuals who share our passion for 
                  providing quality child care in a nurturing home environment.
                </p>
                <div className="space-y-2">
                  {qualities.map((quality, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{quality}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-accent fill-accent" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Make a Difference
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm italic">
                    "The agency supports me so well. I never feel alone in my work. 
                    The training and resources have made me a better educator."
                  </p>
                  <div className="border-t border-border/50 pt-3">
                    <p className="font-semibold text-foreground text-sm">Jennifer L.</p>
                    <p className="text-xs text-muted-foreground">Cochrane Educator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section id="steps" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                How to Get Started
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Your Path to Becoming an Educator
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="text-center p-4 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Licensing & Compliance */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Licensing & Compliance Support
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We follow all Alberta licensing standards and help you meet every requirement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Safety Inspections", "Home Checks", "First Aid", "Documentation", "Monitoring"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="py-12 md:py-16 bg-gradient-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-foreground/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Join our team of dedicated educators and start your rewarding journey.
              </p>
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
                asChild
              >
                <Link to="/parents#contact">Contact Us to Apply</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Educators;
