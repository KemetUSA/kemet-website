import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/logo.png" alt="KEMET - Egypt | USA" className="h-16" />
            <p className="text-sm text-muted-foreground">
              Your trusted gateway to Egyptian manufacturing excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="text-muted-foreground hover:text-primary">Industries</a>
                </Link>
              </li>
              <li>
                <Link href="/partnerships">
                  <a className="text-muted-foreground hover:text-primary">Partnerships</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - USA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">KEMET LLC (USA)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>United States</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:usa@kemet.com" className="hover:text-primary">
                  usa@kemet.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (XXX) XXX-XXXX</span>
              </li>
            </ul>
          </div>

          {/* Contact - Egypt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">KEMET Egypt LLC</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:egypt@kemet.com" className="hover:text-primary">
                  egypt@kemet.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+20 (XX) XXXX-XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KEMET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
