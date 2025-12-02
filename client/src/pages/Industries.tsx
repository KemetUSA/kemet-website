import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Shirt, Apple, Home, Package } from "lucide-react";

export default function Industries() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Industries We Serve
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting major US retailers with Egypt's finest manufacturers
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {/* Textiles & Home Goods */}
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Shirt className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Textiles & Home Goods
              </h2>
              <p className="text-lg text-muted-foreground">
                Egyptian cotton is world-renowned for its exceptional quality,
                softness, and durability. Our network includes certified
                factories producing premium textiles for major retailers.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold">Product Categories:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Bed linens & sheets</div>
                  <div>• Bath towels</div>
                  <div>• Table linens</div>
                  <div>• Kitchen textiles</div>
                  <div>• Cotton apparel</div>
                  <div>• Home décor fabrics</div>
                </div>
              </div>

              <Card className="bg-muted/30 border-0">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Advantages:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• QIZ duty-free status for qualifying products</li>
                    <li>• GOTS and OEKO-TEX certified factories</li>
                    <li>• Premium extra-long staple Egyptian cotton</li>
                    <li>• Competitive pricing vs. traditional sources</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <img
                src="/egyptian-textiles.png"
                alt="Premium Egyptian cotton textiles"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Food & Beverage */}
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/quality-control.png"
                alt="Food quality control"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Apple className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Food & Beverage
              </h2>
              <p className="text-lg text-muted-foreground">
                Egypt produces exceptional agricultural products that meet the
                highest international food safety standards. All partner
                factories hold GFSI certifications (BRC, SQF, FSSC 22000).
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold">Product Categories:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Dates (Medjool, Deglet Noor)</div>
                  <div>• Olive oil</div>
                  <div>• Dried fruits</div>
                  <div>• Nuts & seeds</div>
                  <div>• Spices & herbs</div>
                  <div>• Processed foods</div>
                </div>
              </div>

              <Card className="bg-muted/30 border-0">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Compliance & Certifications:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• FDA registered facilities</li>
                    <li>• GFSI certified (BRC, SQF, FSSC 22000)</li>
                    <li>• HACCP and GMP compliant</li>
                    <li>• Full FSVP support for US importers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Home Décor & Furniture */}
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Home Décor & Furniture
              </h2>
              <p className="text-lg text-muted-foreground">
                Egyptian craftsmanship in home décor and furniture combines
                traditional artistry with modern manufacturing capabilities.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold">Product Categories:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Decorative accessories</div>
                  <div>• Lighting fixtures</div>
                  <div>• Furniture pieces</div>
                  <div>• Rugs & carpets</div>
                  <div>• Wall art</div>
                  <div>• Outdoor furniture</div>
                </div>
              </div>

              <Card className="bg-muted/30 border-0">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Why Choose Egyptian Décor:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Unique designs with cultural authenticity</li>
                    <li>• Skilled artisans and craftspeople</li>
                    <li>• Competitive pricing for quality products</li>
                    <li>• Customization capabilities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <img
                src="/hero-bridge.png"
                alt="Home décor products"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Retailers */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Target Retail Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in serving major US retailers with high-volume,
              high-quality product needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Warehouse Clubs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Costco, Sam's Club, and other membership-based retailers
                  seeking private label products
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specialty Grocers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Trader Joe's, Whole Foods, and premium food retailers looking
                  for unique products
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Department Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Major retailers needing premium textiles and home goods for
                  their private labels
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">E-commerce Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Online retailers seeking direct-from-manufacturer pricing and
                  quality
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
                Ready to Source from Egypt?
              </h2>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Let's discuss how KEMET can provide the products your customers
                want at prices that improve your margins.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Request Product Information
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
