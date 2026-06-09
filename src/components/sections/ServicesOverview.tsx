"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Shield, Server, Network, Activity, Lock, Cloud } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Managed IT Services",
    description: "End-to-end management of your IT infrastructure, ensuring maximum uptime and performance.",
    icon: Server,
  },
  {
    title: "Security Operations Center",
    description: "24x7 monitoring, threat detection, and incident response to protect your critical assets.",
    icon: Shield,
  },
  {
    title: "Infrastructure Monitoring",
    description: "Proactive monitoring of networks, servers, and applications to prevent downtime.",
    icon: Activity,
  },
  {
    title: "Vulnerability Management",
    description: "Continuous assessment and patching to secure vulnerabilities before they are exploited.",
    icon: Lock,
  },
  {
    title: "Cloud Management",
    description: "Optimization, security, and management of your AWS, Azure, and Oracle Cloud environments.",
    icon: Cloud,
  },
  {
    title: "Network Security",
    description: "Advanced firewall management, VPN configuration, and network traffic analysis.",
    icon: Network,
  }
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Comprehensive IT & Security Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We provide a full spectrum of managed services designed to secure your operations and optimize your infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card hover:bg-muted/50 transition-colors group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
