import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesOverview } from "@/components/sections/ServicesOverview"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OpsGuard",
  "image": "https://opsguard.in/opsguard_logo_transparent.png",
  "url": "https://opsguard.in",
  "telephone": "+91 80 1234 5678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wadgaon Sheri",
    "addressLocality": "Pune City",
    "addressRegion": "Maharashtra",
    "postalCode": "411014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5527193,
    "longitude": 73.920817
  },
  "priceRange": "$$$",
  "description": "24x7 Managed IT Services and Cybersecurity Solutions in Pune, India."
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesOverview />
      
      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose OpsGuard?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine industry-leading cybersecurity practices with robust IT management to deliver unmatched reliability and protection.
              </p>
              <ul className="space-y-4">
                {[
                  "24x7x365 Proactive Monitoring & Support",
                  "Advanced Threat Detection and Incident Response",
                  "Certified Experts in Linux, Windows & Cloud",
                  "Compliance-driven Security Practices",
                  "Predictable IT Costs and Scalable Solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
              <div className="border border-border/50 bg-card/50 backdrop-blur rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="border-b border-border/50 pb-6">
                    <h3 className="text-2xl font-semibold mb-2">Technologies We Support</h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Linux", "Windows Server", "AWS", "Azure", "Oracle Cloud", "Docker", "Kubernetes", "Wazuh", "Grafana"].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Industries Served</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /><span>Finance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /><span>Healthcare</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /><span>E-Commerce</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /><span>Manufacturing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5 border-t border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Secure Your Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free assessment of your current IT infrastructure and security posture. Our experts are ready to help.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
