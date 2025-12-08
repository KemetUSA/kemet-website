import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Building2, Shield, Award, CheckCircle2 } from "lucide-react";

export default function Partnerships() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Partnerships
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backed by government agencies and official organizations in both the
            US and Egypt
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div>
              <img
                src="/partnership-handshake.png"
                alt="International partnerships"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Official Government Support
              </h2>
              <p className="text-lg text-muted-foreground">
                KEMET's operations are supported by key government and trade
                organizations in both the United States and Egypt, ensuring
                compliance, credibility, and access to resources.
              </p>
              <p className="text-muted-foreground">
                These partnerships provide our clients with confidence that
                their supply chain is backed by official oversight and support
                at every level.
              </p>
            </div>
          </div>

          {/* Partnership Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* AmCham Egypt */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>American Chamber of Commerce in Egypt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  AmCham Egypt is the largest American chamber outside the
                  United States, facilitating US-Egypt trade and investment.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Access to verified Egyptian exporters
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Trade advocacy and support
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Networking with key stakeholders
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GOEIC */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>General Organization for Export & Import Control (GOEIC)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Egypt's official export control authority, ensuring quality
                  and compliance of all exported goods.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Pre-shipment inspection services
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Export certification and documentation
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Quality assurance verification
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* US Commercial Service */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>US Commercial Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  The trade promotion arm of the US Department of Commerce,
                  supporting US companies in international trade.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Market intelligence and research
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Trade compliance guidance
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Export promotion support
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Egyptian Ministry of Trade */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Egyptian Ministry of Trade and Industry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Egypt's government body overseeing trade policy, export
                  promotion, and industrial development.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      QIZ program administration
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Export incentive programs
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Trade policy support
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* US Customs */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>US Customs and Border Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Federal agency managing imports, ensuring compliance with US
                  trade laws and regulations.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      QIZ duty-free verification
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Import compliance oversight
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Trade facilitation programs
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FDA */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>US Food and Drug Administration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Regulatory authority for food safety and compliance in the
                  United States.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      FSVP compliance support
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Food facility registration
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Import safety verification
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              What These Partnerships Mean for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Official backing translates to tangible benefits for our clients
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Verified Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  All factories and products meet US and international
                  regulatory requirements
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Reduced Risk</h3>
                <p className="text-sm text-muted-foreground">
                  Government oversight minimizes the risk of non-compliance or
                  quality issues
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Faster Resolution</h3>
                <p className="text-sm text-muted-foreground">
                  Direct channels to government agencies expedite problem-solving
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Cost Savings</h3>
                <p className="text-sm text-muted-foreground">
                  QIZ duty-free status and export incentives reduce your total
                  landed costs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Partner with a Trusted, Government-Backed Supplier
              </h2>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                KEMET's official partnerships ensure your supply chain is
                compliant, reliable, and cost-effective.
              </p>
              <Link href="/contact">
                <a>
                  <Button size="lg" variant="secondary">
                    Get Started Today
                  </Button>
                </a>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
