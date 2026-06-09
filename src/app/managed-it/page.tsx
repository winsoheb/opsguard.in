"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Server, Network, Zap, Headset, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Server Management",
    description: "Comprehensive administration of Windows and Linux servers, ensuring high availability, security, and optimal performance.",
    icon: Server,
  },
  {
    title: "Network Monitoring",
    description: "24x7 tracking of network traffic, bandwidth utilization, and device health to prevent bottlenecks and outages.",
    icon: Network,
  },
  {
    title: "Performance Optimization",
    description: "Continuous tuning of your IT infrastructure to guarantee applications and databases run efficiently.",
    icon: Zap,
  },
  {
    title: "Remote Support",
    description: "Fast, reliable help desk services to assist your team with technical issues, minimizing downtime.",
    icon: Headset,
  },
  {
    title: "Preventive Maintenance",
    description: "Routine health checks, updates, and backups to prevent critical failures before they occur.",
    icon: Wrench,
  }
]

export default function ManagedITPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Managed IT Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reliable, proactive IT operations that let you focus on your business while we handle the technology.
            </p>
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="/contact">Get IT Support Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Complete Infrastructure Management</h2>
            <p className="text-lg text-muted-foreground">
              From servers to endpoints, our managed IT services cover every aspect of your technological ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="bg-card hover:bg-muted/50 transition-colors border-border/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Tired of IT Headaches?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts take over the management of your infrastructure so you can focus on driving revenue.
          </p>
          <Button size="lg" variant="default" className="h-12 px-8" asChild>
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
