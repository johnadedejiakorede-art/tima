import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { 
  Users, Leaf, FlaskConical, BookOpen, Palette, Apple, 
  Home, Sun, Clock, Coffee, Moon, Heart
} from "lucide-react";

const offerings = [
  { icon: Users, text: "Small group sizes" },
  { icon: Heart, text: "Daily routines supporting emotional and physical well-being" },
  { icon: Leaf, text: "Outdoor play and nature exploration" },
  { icon: FlaskConical, text: "STEM, literacy, and creative activities" },
  { icon: BookOpen, text: "Culturally responsive and inclusive environments" },
  { icon: Apple, text: "Nutritious meals and snacks" },
  { icon: Palette, text: "Art, music, and sensory activities" },
  { icon: Home, text: "Safe, clean, and welcoming home environments" },
];

const dailySchedule = [
  { time: "7:30 - 9:00 AM", activity: "Warm Welcome & Free Play", icon: Coffee, description: "Children arrive and settle in with self-directed activities" },
  { time: "9:00 - 9:30 AM", activity: "Morning Circle", icon: Sun, description: "Songs, stories, calendar, and setting intentions for the day" },
  { time: "9:30 - 11:30 AM", activity: "Learning Centers", icon: FlaskConical, description: "STEM, art, literacy, sensory, and dramatic play activities" },
  { time: "11:30 AM - 12:30 PM", activity: "Outdoor Play", icon: Leaf, description: "Physical activity, nature exploration, and fresh air" },
  { time: "12:30 - 1:30 PM", activity: "Lunch & Rest Time", icon: Apple, description: "Nutritious meal followed by quiet time or nap" },
  { time: "1:30 - 3:30 PM", activity: "Afternoon Exploration", icon: Palette, description: "Creative activities, small group learning, and free play" },
  { time: "3:30 - 5:30 PM", activity: "Family Pick-Up", icon: Moon, description: "Daily communication with families and calm transitions home" },
];

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs & Philosophy | Tima Family Day Home Agency - Play-Based Learning</title>
        <meta 
          name="description" 
          content="Discover our play-based early learning philosophy. Tima Family Day Home Agency offers developmentally appropriate programs that support the whole child in Calgary and Cochrane." 
        />
        <meta name="keywords" content="play-based learning, early childhood education, day home programs, Calgary child development, STEM activities for kids" />
        <link rel="canonical" href="https://timadayhome.ca/programs" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Programs
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Learning Through Play
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe children learn best through play. Our educators create environments 
                where children explore, imagine, problem-solve, and build confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Approach
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Developmentally Appropriate Practices
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Every day home in our network follows developmentally appropriate practices 
                    that support the whole child – cognitively, socially, emotionally, and physically.
                  </p>
                  <p>
                    Our educators understand that each child is unique, with their own interests, 
                    strengths, and pace of development. Learning happens naturally through play, 
                    exploration, and meaningful interactions.
                  </p>
                  <p>
                    From building blocks to outdoor adventures, from story time to sensory activities, 
                    every experience is designed to nurture curiosity and foster growth.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FlaskConical, label: "STEM Learning", color: "bg-primary/10 text-primary" },
                    { icon: Palette, label: "Creative Arts", color: "bg-accent/20 text-accent" },
                    { icon: Leaf, label: "Nature Play", color: "bg-green-100 text-green-600" },
                    { icon: BookOpen, label: "Early Literacy", color: "bg-blue-100 text-blue-600" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-6 rounded-2xl bg-card border border-border/50 shadow-card text-center"
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                What We Offer
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                A Complete Learning Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our day homes provide everything your child needs to thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerings.map((offering, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <offering.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium leading-snug">{offering.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A Typical Day */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                A Typical Day
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Daily Rhythm & Routine
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A balanced day with routines that help children feel secure and engaged.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                <div className="space-y-6">
                  {dailySchedule.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex gap-6 md:pl-16"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" style={{ top: "1.5rem" }} />

                      <div className="flex-1 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-wrap items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <span className="text-sm font-medium text-primary">{item.time}</span>
                            </div>
                            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                              {item.activity}
                            </h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ages Served
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Each educator sets their own age range, typically serving children from 0 to 12 years old.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {["Infants", "Toddlers", "Preschool", "School-Age"].map((age) => (
                  <span
                    key={age}
                    className="px-6 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium"
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
