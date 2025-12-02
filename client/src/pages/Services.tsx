import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  TrendingUp,
  Users,
  Shield,
  CheckCircle2,
  Package,
  FileCheck,
  Truck,
  BarChart3,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible, comprehensive solutions tailored to your supply chain needs
          </p>
        </div>
      </section>

      {/* Direct Supplier Section */}
      <section id="direct-supplier" className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Direct Supplier Model
              </h2>
              <p className="text-lg text-muted-foreground">
                KEMET acts as your official Vendor of Record, taking full
                responsibility for the entire supply chain from Egyptian
                factories to your distribution centers.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    We appear on purchase orders and invoices as the supplier
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Full quality control and compliance management
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    End-to-end logistics and customs clearance
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Single point of contact for all communications
                  </span>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg">Request a Quote</Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Package className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Product Sourcing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We identify and vet the best Egyptian factories for your
                    specific product requirements
                  </p>
                </CardContent>
              </Card>
              <Card className="mt-8">
                <CardHeader>
                  <FileCheck className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rigorous inspection and testing to meet your quality
                    standards and certifications
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Logistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Complete shipping, customs, and delivery coordination to
                    your warehouses
                  </p>
                </CardContent>
              </Card>
              <Card className="mt-8">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Transparent tracking and reporting throughout the supply
                    chain process
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage Section */}
      <section id="brokerage" className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/partnership-handshake.png"
                alt="Business partnership"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Brokerage Services
              </h2>
              <p className="text-lg text-muted-foreground">
                For clients who prefer to contract directly with manufacturers,
                we facilitate connections with our network of pre-vetted,
                certified Egyptian factories.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Access to 100+ certified Egyptian factories
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Factory vetting and certification verification
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Negotiation support and contract review
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Optional quality control and inspection services
                  </span>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg">Find a Factory</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Consulting Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert guidance to help you navigate the complexities of
                Egyptian sourcing, compliance, and supply chain optimization.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sourcing Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Market analysis, product identification, and factory
                      selection strategies tailored to your business
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">QIZ Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Navigate Qualifying Industrial Zone requirements to
                      maximize duty-free benefits
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quality Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Implement robust quality assurance processes and
                      certification pathways
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Supply Chain Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Streamline logistics, reduce costs, and improve delivery
                      times
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Link href="/contact">
                <Button size="lg">Schedule a Consultation</Button>
              </Link>
            </div>

            <div>
              <img
                src="/quality-control.png"
                alt="Quality control and consulting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Our team can help you determine the best approach for your specific
            needs and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
