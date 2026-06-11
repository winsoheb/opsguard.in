"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Activity, Server, Lock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48">
      {/* Background Grid & Gradients */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
      
      {/* Animated Logo Watermark */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.06, 0.03],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <Image src="/opsguard_logo_transparent.png" alt="OpsGuard Background Logo" width={800} height={800} className="object-contain scale-150 md:scale-100 opacity-50 dark:opacity-100" priority fetchPriority="high" />
      </motion.div>

      <div className="absolute top-0 right-0 -mr-32 mt-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -ml-32 mb-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6 mb-4"
          >
            <span className="text-primary font-semibold tracking-wide text-xl md:text-3xl drop-shadow-sm text-center">
              OpsGuard IT Solutions
            </span>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Enterprise-Grade Security & IT Operations
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
          >
            Protect. Monitor. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Manage.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            24×7 Managed IT Services and Cybersecurity Solutions. We secure your infrastructure so you can focus on growing your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base font-semibold" asChild>
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold border-primary/50 hover:bg-primary/10" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 mx-auto max-w-5xl rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          <div className="flex items-center space-x-2 pb-4 border-b border-border/50">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 opacity-80">
            {[ 
              { icon: Activity, title: "System Health", value: "99.99%", color: "text-green-500" },
              { icon: Lock, title: "Threats Blocked", value: "14,231", color: "text-blue-500" },
              { icon: Server, title: "Active Nodes", value: "342", color: "text-purple-500" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col space-y-2 p-4 rounded-lg bg-muted/50 border border-border/50">
                <div className="flex items-center text-muted-foreground mb-2">
                  <stat.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{stat.title}</span>
                </div>
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
