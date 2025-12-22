import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, Eye, BookOpen, Heart, Phone, Mail, 
  MessageCircle, Home, CheckCircle, DollarSign, HelpCircle
} from "lucide-react";
import { useState } from "react";
import parentChild from "@/assets/parent-child.jpg";
import daycareRoom from "@/assets/daycare-room.jpg";

const trustReasons = [
  { icon: Shield, text: "Licensed by the Government of Alberta" },
  { icon: Eye, text: "Regular home visits and safety checks" },
  { icon: MessageCircle, text: "Transparent communication" },
  { icon: BookOpen, text: "Educators supported with training and guidance" },
  { icon: Home, text: "A nurturing, home-based environment" },
];

const expectations = [
  "A safe, loving day home",
  "Daily updates on your child's activities",
  "Developmentally appropriate learning",
  "A strong relationship with your educator",
  "Support from the agency whenever you need it",
];

const registrationSteps = [
  { step: 1, title: "Contact Us", description: "Reach out to discuss your child care needs." },
  { step: 2, title: "Get Matched", description: "We match you with a licensed educator." },
  { step: 3, title: "Visit the Day Home", description: "Tour the home and meet the educator." },
  { step: 4, title: "Complete Registration", description: "Fill out paperwork and orientation." },
  { step: 5, title: "Begin Care", description: "Your child starts with confidence." },
];

const faqs = [
  {
    question: "Is Tima Family Day Home Agency licensed?",
    answer: "Yes, we are fully licensed by the Government of Alberta. All our day homes meet or exceed provincial standards."
  },
  {
    question: "How do you monitor day homes?",
    answer: "We conduct regular visits, safety checks, and provide ongoing support to all our educators."
  },
  {
    question: "Do you help with subsidy?",
    answer: "Yes! We guide families through the Alberta Child Care Subsidy and Affordability Grants process."
  },
  {
    question: "What ages do you accept?",
    answer: "Each educator sets their own age range, typically from 0 to 12 years."
  },
];

const Parents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Helmet>
        <title>For Parents | Find Licensed Day Home Care - Tima Family Day Home Agency</title>
        <meta 
          name="description" 
          content="Find trusted, licensed family day home child care in Calgary and Cochrane. Learn about registration, subsidy options, and what to expect." 
        />
        <meta name="keywords" content="day home Calgary, child care registration, Alberta child care subsidy, licensed day home near me" />
        <link rel="canonical" href="https://timadayhome.ca/parents" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  For Parents
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Find the Perfect Day Home
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Discover a licensed family day home where your child will be safe, 
                  happy, and thriving in a nurturing environment.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Get Started Today</a>
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={parentChild} 
                  alt="Happy parent with their child at daycare" 
                  className="w-full h-72 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Parents Trust Us */}
        <section id="trust" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  Trust & Safety
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Parents Trust Us
                </h2>
                <div className="space-y-3">
                  {trustReasons.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <reason.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{reason.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-3">
                  What to Expect
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Your Experience With Us
                </h2>
                <div className="space-y-2">
                  {expectations.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={daycareRoom} 
                    alt="Clean organized daycare classroom" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section id="register" className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                How to Register
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Getting Started is Easy
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Follow these simple steps to find the perfect day home for your child.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {registrationSteps.map((item) => (
                  <div key={item.step} className="text-center p-4 rounded-2xl bg-card border border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subsidy Information */}
        <section id="subsidy" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 shadow-card">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                    <DollarSign className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                      Fee Subsidy Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      Families may qualify for Alberta Child Care Subsidy and Affordability Grants, 
                      which can significantly reduce child care costs. We guide families through 
                      the application process.
                    </p>
                    <Button variant="hero" asChild>
                      <a href="#contact">Contact Us About Subsidy</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                <HelpCircle className="w-4 h-4 inline mr-1" />
                FAQs
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-semibold text-foreground text-sm mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    Contact Us
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    We're Here to Help
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    Ready to find the perfect day home for your child? Have questions about 
                    our programs or registration? We'd love to hear from you.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a href="mailto:info@timadayhome.ca" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                          info@timadayhome.ca
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <a href="tel:+14035551234" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                          (403) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-card">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm"
                        placeholder="Tell us about your child care needs..."
                        required
                      />
                    </div>
                    <Button variant="hero" size="lg" type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Parents;
