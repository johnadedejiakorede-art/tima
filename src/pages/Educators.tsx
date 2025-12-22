import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Users, ClipboardCheck, Heart, Briefcase, 
  Shield, Home, Sparkles, CheckCircle, ArrowRight, Star
} from "lucide-react";

const benefits = [
  { icon: GraduationCap, title: "Professional Onboarding", description: "Comprehensive training to set you up for success from day one." },
  { icon: Users, title: "Ongoing Support", description: "Regular monitoring and guidance from experienced agency staff." },
  { icon: ClipboardCheck, title: "Compliance Help", description: "Assistance with documentation, safety checks, and licensing requirements." },
  { icon: Heart, title: "Educator Community", description: "Connect with other educators for sharing, support, and professional growth." },
  { icon: Briefcase, title: "Run Your Business", description: "The flexibility of running your own day home with professional guidance." },
  { icon: Shield, title: "Licensing Support", description: "We help you through every step of the licensing process." },
];

const qualities = [
  "Warm, caring individuals who love working with children",
  "Passionate about early childhood development",
  "Organized and committed to safety",
  "Ready to create a nurturing home environment",
  "Open to learning and professional growth",
  "Committed to following licensing standards",
];

const steps = [
  { step: 1, title: "Express Interest", description: "Contact us to learn more about becoming an educator with our agency." },
  { step: 2, title: "Complete Screening", description: "Background checks, references, and initial orientation." },
  { step: 3, title: "Prepare Your Home", description: "We help you meet all licensing requirements for your space." },
  { step: 4, title: "Receive Training", description: "Comprehensive training in early childhood education and safety." },
  { step: 5, title: "Open Your Day Home", description: "Launch your day home with confidence and ongoing support." },
];

const Educators = () => {
  return (
    <>
      <Helmet>
        <title>Become an Educator | Join Tima Family Day Home Agency - Calgary</title>
        <meta 
          name="description" 
          content="Join Tima Family Day Home Agency as a licensed family day home educator in Calgary or Cochrane. Get training, support, and guidance to run your own child care business." 
        />
        <meta name="keywords" content="become day home educator, family day home provider Calgary, start day home business Alberta, child care career Calgary" />
        <link rel="canonical" href="https://timadayhome.ca/educators" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Sparkles size={16} />
                Join Our Team
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Become a Licensed Educator
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
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
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Why Join Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Educators Choose Tima
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need to run a successful family day home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Who We're Looking For
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Is This You?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're looking for dedicated individuals who share our passion for 
                  providing quality child care in a nurturing home environment.
                </p>
                <div className="space-y-3">
                  {qualities.map((quality, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{quality}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="p-10 rounded-3xl bg-card border border-border/50 shadow-card">
                  <div className="flex items-center gap-4 mb-6">
                    <Star className="w-8 h-8 text-accent fill-accent" />
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Make a Difference
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "The agency supports me so well. I never feel alone in my work. 
                    The training and resources have made me a better educator, and 
                    I love the flexibility of running my own day home."
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">Jennifer L.</p>
                    <p className="text-sm text-muted-foreground">Cochrane Educator</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                How to Get Started
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Your Path to Becoming an Educator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We support you every step of the way.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

                <div className="space-y-8">
                  {steps.map((item, index) => (
                    <div
                      key={item.step}
                      className="relative flex gap-6 md:pl-16"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold text-lg hidden md:flex">
                        {item.step}
                      </div>

                      <div className="flex-1 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4 mb-2 md:hidden">
                          <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2 hidden md:block">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing & Compliance */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Licensing & Compliance Support
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We follow all Alberta licensing standards and help you meet every requirement, 
                including safety inspections, home environment checks, first aid certification, 
                and ongoing documentation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {["Safety Inspections", "Home Checks", "First Aid", "Documentation", "Monitoring Visits"].map((item) => (
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
        <section id="apply" className="py-20 md:py-28 bg-gradient-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Join our team of dedicated educators and start your rewarding journey 
                in family day home child care.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Educators;
