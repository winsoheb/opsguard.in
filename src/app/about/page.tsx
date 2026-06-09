"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Shield, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-24 md:py-32 relative overflow-hidden">
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              About OpsGuard
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We provide reliable, secure, and proactive IT operations and cybersecurity services that help businesses focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                <Target className="mr-2 h-4 w-4" /> Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Securing Your Future</h2>
              <p className="text-lg text-muted-foreground">
                To provide reliable, secure, and proactive IT operations and cybersecurity services that help businesses focus on growth without worrying about technology failures or cyber threats.
              </p>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                <Shield className="mr-2 h-4 w-4" /> Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Enterprise IT For All</h2>
              <p className="text-lg text-muted-foreground">
                We believe that every business, regardless of size, deserves enterprise-grade IT management and military-grade cybersecurity protection against the evolving threat landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our team of engineers, analysts, and security experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Security First</h3>
                <p className="text-muted-foreground">Security isn't an afterthought; it is built into everything we design, deploy, and manage.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Proactive Partnership</h3>
                <p className="text-muted-foreground">We act as an extension of your team, fixing problems before you even notice them.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">We hold ourselves to the highest standards, employing certified experts and proven frameworks.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
