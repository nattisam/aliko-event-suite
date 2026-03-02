import { Link } from "react-router-dom";

interface FooterProps {
  portal: "professional" | "social";
}

const Footer = ({ portal }: FooterProps) => {
  const otherPortal = portal === "professional" ? "social" : "professional";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Aliko Events</h3>
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
              Connect • Elevate • Inspire
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm mb-3 text-gold">Platform</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li><Link to={`/${portal}`} className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to={`/${portal}/events`} className="hover:text-primary-foreground transition-colors">Events</Link></li>
              <li><Link to={`/${portal}/help`} className="hover:text-primary-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm mb-3 text-gold">Company</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm mb-3 text-gold">Switch Experience</h4>
            <Link
              to={`/${otherPortal}`}
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground font-body transition-colors"
            >
              Go to {otherPortal === "professional" ? "Professional" : "Social"} Portal →
            </Link>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50 font-body">
          © {new Date().getFullYear()} Aliko Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
