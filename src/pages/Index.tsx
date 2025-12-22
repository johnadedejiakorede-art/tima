import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PromiseSection from "@/components/home/PromiseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tima Family Day Home Agency | Licensed Child Care in Calgary & Cochrane</title>
        <meta 
          name="description" 
          content="Tima Family Day Home Agency provides licensed, nurturing, play-based family day home child care in Calgary, Cochrane, and surrounding areas. Find trusted care for your child today." 
        />
        <meta name="keywords" content="family day home, licensed child care, Calgary day home, Cochrane child care, early learning, play-based care, Alberta licensed" />
        <link rel="canonical" href="https://timadayhome.ca/" />
        <meta property="og:title" content="Tima Family Day Home Agency | Licensed Child Care in Calgary" />
        <meta property="og:description" content="Where quality meets home. Licensed, nurturing, play-based family day homes serving Calgary and Cochrane." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tima Family Day Home Agency",
            "description": "Licensed family day home agency providing nurturing child care in Calgary and Cochrane",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Calgary",
              "addressRegion": "Alberta",
              "addressCountry": "CA"
            },
            "areaServed": ["Calgary", "Cochrane", "Alberta"],
            "serviceType": "Family Day Home Child Care"
          })}
        </script>
      </Helmet>
      <Layout>
        <HeroSection />
        <WelcomeSection />
        <WhyChooseUs />
        <PromiseSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
