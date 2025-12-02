import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Target, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About KEMET
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging continents, building partnerships, delivering excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/partnership-handshake.png"
                alt="KEMET team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground">
                KEMET is a dual-company enterprise designed to connect US
                retailers with Egypt's world-class manufacturing capabilities.
                With operations in both the United States and Egypt, we provide
                seamless, end-to-end supply chain solutions.
              </p>
              <p className="text-muted-foreground">
                Our unique structure combines the trust and convenience of a
                US-based Vendor of Record with the on-the-ground expertise of
                our Egyptian operations team. This allows us to deliver
                unparalleled quality, compliance, and cost advantages to our
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Company Structure */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Dual-Company Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two companies, one seamless operation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">KEMET LLC (USA)</h3>
                <p className="text-muted-foreground">
                  Our US-based entity serves as the official Vendor of Record
                  for all client contracts. We handle:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Client relationship management</li>
                  <li>• Contract negotiation and execution</li>
                  <li>• Invoicing and payment processing</li>
                  <li>• US regulatory compliance</li>
                  <li>• Strategic planning and consulting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">KEMET Egypt LLC</h3>
                <p className="text-muted-foreground">
                  Our Egyptian subsidiary manages all on-the-ground operations,
                  including:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Factory sourcing and vetting</li>
                  <li>• Quality control and inspections</li>
                  <li>• Production oversight</li>
                  <li>• Logistics coordination</li>
                  <li>• Local government liaison</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To be the premier gateway for US companies seeking to access
                  Egypt's exceptional manufacturing capabilities, delivering
                  quality, compliance, and value at every step.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To establish Egypt as a top-tier sourcing destination for US
                  retailers, recognized for quality, reliability, and
                  competitive advantage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Values</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Integrity in all partnerships</li>
                  <li>• Excellence in execution</li>
                  <li>• Transparency in communication</li>
                  <li>• Commitment to quality</li>
                  <li>• Respect for all stakeholders</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Egypt Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Egypt?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Egypt offers unique advantages for US retailers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">QIZ Duty-Free Access</h3>
                <p className="text-sm text-muted-foreground">
                  Qualifying Industrial Zone status provides 0% import duties
                  on eligible products to the US market
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">World-Class Textiles</h3>
                <p className="text-sm text-muted-foreground">
                  Egyptian cotton is globally renowned for its exceptional
                  quality, softness, and durability
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Premium Food Products</h3>
                <p className="text-sm text-muted-foreground">
                  Dates, olive oil, and other agricultural products meet the
                  highest international standards
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Competitive Costs</h3>
                <p className="text-sm text-muted-foreground">
                  Lower manufacturing costs compared to many alternatives,
                  without compromising quality
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Strategic Location</h3>
                <p className="text-sm text-muted-foreground">
                  Proximity to Europe and access to major shipping routes
                  ensures efficient logistics
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Skilled Workforce</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced manufacturers with expertise in textiles, food
                  processing, and more
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
