"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Shield, Server, Lock, HelpCircle, Activity, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const allServices = [
  {
    title: "Security Operations Center",
    description: "24x7 monitoring, threat detection, log analysis, and incident response.",
    icon: Shield,
    href: "/security-operations"
  },
  {
    title: "Managed IT Services",
    description: "Complete management of your infrastructure, networks, and servers.",
    icon: Server,
    href: "/managed-it"
  },
  {
    title: "Vulnerability Management",
    description: "Continuous vulnerability assessments, CVE tracking, and patching.",
    icon: Lock,
    href: "/vulnerability-management"
  },
  {
    title: "Cloud Management",
    description: "Optimization and security for AWS, Azure, and Oracle Cloud environments.",
    icon: Cloud,
    href: "/contact"
  },
  {
    title: "Infrastructure Monitoring",
    description: "Proactive tracking of system health to ensure maximum uptime.",
    icon: Activity,
    href: "/managed-it"
  },
  {
    title: "Help Desk Support",
    description: "Fast, reliable technical support for your team's day-to-day IT issues.",
    icon: HelpCircle,
    href: "/managed-it"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-24 md:py-32 relative overflow-hidden">
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our comprehensive suite of managed IT and cybersecurity services designed to protect and optimize your business.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex justify-center relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(59,130,246,0.2)] dark:shadow-[0_0_60px_rgba(59,130,246,0.15)]"
              >
                {/* Light Mode Image */}
                <Image 
                  src="/services_crop_light.png" 
                  alt="Managed IT Services" 
                  fill
                  className="object-cover dark:hidden"
                  priority
                />
                {/* Dark Mode Image */}
                <Image 
                  src="/services_crop.png" 
                  alt="Managed IT Services" 
                  fill
                  className="object-cover hidden dark:block"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => (
              <Card key={i} className="flex flex-col bg-card hover:bg-muted/50 transition-colors border-border/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss a tailored IT and security strategy that fits your specific needs.
          </p>
          <Button size="lg" variant="default" className="h-12 px-8" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
