import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  CheckCircle2,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                Connecting USA & Egypt
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Your Gateway to{" "}
                <span className="text-primary">Egyptian Manufacturing</span>{" "}
                Excellence
              </h1>
              <p className="text-lg text-muted-foreground">
                KEMET bridges US retailers with certified Egyptian manufacturers,
                offering direct supply, brokerage, and consulting services backed
                by government partnerships and QIZ duty-free advantages.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero-bridge.png"
                alt="Global trade connection between USA and Egypt"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Certified Factories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">0%</div>
              <div className="text-sm text-muted-foreground">QIZ Duty Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Countries, 1 Team</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Supply Chain Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From direct supply to consulting, we offer flexible services
              tailored to your business needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Direct Supplier</h3>
                <p className="text-muted-foreground">
                  We act as your Vendor of Record, managing the entire supply
                  chain from Egyptian factories to your distribution centers.
                </p>
                <Link href="/services#direct-supplier" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Brokerage Services</h3>
                <p className="text-muted-foreground">
                  Connect directly with our network of pre-vetted, certified
                  Egyptian manufacturers for specialized products.
                </p>
                <Link href="/services#brokerage" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Consulting</h3>
                <p className="text-muted-foreground">
                  Expert guidance on Egyptian sourcing, QIZ compliance, quality
                  assurance, and supply chain optimization.
                </p>
                <Link href="/services#consulting" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose KEMET */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why Choose KEMET?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Dual-Company Structure</h3>
                    <p className="text-muted-foreground">
                      KEMET LLC (USA) and KEMET Egypt LLC work seamlessly to
                      provide local expertise in both markets.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">QIZ Duty-Free Access</h3>
                    <p className="text-muted-foreground">
                      Leverage Egypt's Qualifying Industrial Zone status for 0%
                      import duties on qualifying products.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Government Partnerships</h3>
                    <p className="text-muted-foreground">
                      Official partnerships with AmCham Egypt, GOEIC, and US
                      Commercial Service ensure compliance and support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Certified Factory Network</h3>
                    <p className="text-muted-foreground">
                      All partner factories hold GFSI, ISO, and other
                      international certifications required by major retailers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/egyptian-textiles.png"
                alt="Premium Egyptian cotton textiles"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/quality-control.png"
                alt="Quality control inspection"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Source from Egypt?
              </h2>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Let's discuss how KEMET can optimize your supply chain and
                connect you with world-class Egyptian manufacturers.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Request a Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
