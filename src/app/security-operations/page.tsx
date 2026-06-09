"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShieldAlert, Search, Database, AlertOctagon, FileText, ActivitySquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const capabilities = [
  {
    title: "Threat Monitoring",
    description: "24x7x365 surveillance of your networks, endpoints, and cloud environments to detect anomalous behavior.",
    icon: ShieldAlert,
  },
  {
    title: "Log Analysis",
    description: "Deep inspection and correlation of system and application logs to uncover hidden security events.",
    icon: Search,
  },
  {
    title: "SIEM Integration",
    description: "Deployment and management of Security Information and Event Management systems for centralized visibility.",
    icon: Database,
  },
  {
    title: "Incident Response",
    description: "Rapid containment, eradication, and recovery services when a security breach or cyber attack occurs.",
    icon: AlertOctagon,
  },
  {
    title: "Security Reporting",
    description: "Actionable intelligence and compliance-ready reports detailing your security posture and threat landscape.",
    icon: FileText,
  },
  {
    title: "Wazuh Monitoring Services",
    description: "Expert configuration and management of Wazuh for robust open-source endpoint security and threat detection.",
    icon: ActivitySquare,
  }
]

export default function SecurityOperationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-destructive/10 via-background to-background"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Security Operations Center (SOC)
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Advanced threat detection, continuous monitoring, and rapid incident response to safeguard your critical data and operations.
              </p>
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Talk to a Security Expert</Link>
              </Button>
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
                  src="/soc_team_vector_light.png" 
                  alt="Security Operations Center Team" 
                  fill
                  className="object-cover dark:hidden"
                  priority
                />
                {/* Dark Mode Image */}
                <Image 
                  src="/soc_team_vector.png" 
                  alt="Security Operations Center Team" 
                  fill
                  className="object-cover hidden dark:block"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Enterprise-Grade Security Operations</h2>
            <p className="text-lg text-muted-foreground">
              Our SOC team acts as an extension of your organization, providing unparalleled visibility and protection against modern cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, i) => (
              <Card key={i} className="bg-card hover:bg-muted/50 transition-colors border-border/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Don't Wait Until It's Too Late</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Proactive security is the only way to defend against sophisticated cyber attacks. Secure your business with OpsGuard today.
          </p>
          <Button size="lg" variant="default" className="h-12 px-8" asChild>
            <Link href="/contact">Request a Security Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
