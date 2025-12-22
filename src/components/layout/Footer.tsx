import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Tima Family Day Home Agency" className="h-16 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Licensed family day home child care serving Calgary, Cochrane, and surrounding communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/parents" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  For Parents
                </Link>
              </li>
              <li>
                <Link to="/educators" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  For Educators
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span className="text-primary-foreground/70">Calgary, Alberta</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@timadayhome.ca" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  info@timadayhome.ca
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+14035551234" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (403) 555-1234
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Calgary</li>
              <li>Cochrane</li>
              <li>Surrounding Communities</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Tima Family Day Home Agency. Licensed by the Government of Alberta.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <p className="text-center mt-6 text-primary-foreground/40 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={14} className="text-primary fill-primary" /> for families
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
