import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { 
  Users, Leaf, FlaskConical, BookOpen, Palette, Apple, 
  Home, Sun, Clock, Coffee, Moon, Heart
} from "lucide-react";
import childrenCrafts from "@/assets/children-crafts.jpg";
import outdoorPlay from "@/assets/outdoor-play.jpg";

const offerings = [
  { icon: Users, text: "Small group sizes" },
  { icon: Heart, text: "Daily routines for well-being" },
  { icon: Leaf, text: "Outdoor play and nature" },
  { icon: FlaskConical, text: "STEM and literacy activities" },
  { icon: BookOpen, text: "Culturally inclusive environments" },
  { icon: Apple, text: "Nutritious meals and snacks" },
  { icon: Palette, text: "Art, music, and sensory play" },
  { icon: Home, text: "Safe, welcoming home settings" },
];

const dailySchedule = [
  { time: "7:30 - 9:00 AM", activity: "Warm Welcome & Free Play", icon: Coffee, description: "Arrival and self-directed activities" },
  { time: "9:00 - 9:30 AM", activity: "Morning Circle", icon: Sun, description: "Songs, stories, and daily intentions" },
  { time: "9:30 - 11:30 AM", activity: "Learning Centers", icon: FlaskConical, description: "STEM, art, literacy, and play" },
  { time: "11:30 AM - 12:30 PM", activity: "Outdoor Play", icon: Leaf, description: "Physical activity and exploration" },
  { time: "12:30 - 1:30 PM", activity: "Lunch & Rest", icon: Apple, description: "Nutritious meal and quiet time" },
  { time: "1:30 - 3:30 PM", activity: "Afternoon Exploration", icon: Palette, description: "Creative activities and free play" },
  { time: "3:30 - 5:30 PM", activity: "Family Pick-Up", icon: Moon, description: "Daily communication and transition" },
];

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs & Philosophy | Tima Family Day Home Agency - Play-Based Learning</title>
        <meta 
          name="description" 
          content="Discover our play-based early learning philosophy. Developmentally appropriate programs that support the whole child." 
        />
        <meta name="keywords" content="play-based learning, early childhood education, day home programs, Calgary child development" />
        <link rel="canonical" href="https://timadayhome.ca/programs" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Programs
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Learning Through Play
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe children learn best through play. Our educators create environments 
                  where children explore, imagine, problem-solve, and build confidence.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={childrenCrafts} 
                  alt="Children doing arts and crafts activities" 
                  className="w-full h-72 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  Our Approach
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Developmentally Appropriate Practices
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Every day home in our network follows developmentally appropriate practices 
                    that support the whole child – cognitively, socially, emotionally, and physically.
                  </p>
                  <p>
                    Our educators understand that each child is unique, with their own interests, 
                    strengths, and pace of development. Learning happens naturally through play.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FlaskConical, label: "STEM Learning", color: "bg-primary/10 text-primary" },
                  { icon: Palette, label: "Creative Arts", color: "bg-accent/20 text-accent" },
                  { icon: Leaf, label: "Nature Play", color: "bg-green-100 text-green-600" },
                  { icon: BookOpen, label: "Early Literacy", color: "bg-blue-100 text-blue-600" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-2xl bg-card border border-border/50 shadow-card text-center"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-2`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section id="offerings" className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  What We Offer
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  A Complete Learning Experience
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {offerings.map((offering, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <offering.icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground text-xs font-medium">{offering.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={outdoorPlay} 
                  alt="Children playing outdoors in nature" 
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* A Typical Day */}
        <section id="schedule" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                A Typical Day
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Daily Rhythm & Routine
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A balanced day with routines that help children feel secure and engaged.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {dailySchedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary">{item.time}</span>
                      <h3 className="font-semibold text-foreground text-sm">{item.activity}</h3>
                      <p className="text-muted-foreground text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="py-12 md:py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ages Served
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Each educator sets their own age range, typically serving children from 0 to 12 years old.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Infants", "Toddlers", "Preschool", "School-Age"].map((age) => (
                  <span
                    key={age}
                    className="px-5 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium"
                  >
                    {age}
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

export default Programs;
