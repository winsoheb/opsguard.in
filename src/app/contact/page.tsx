"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact OpsGuard</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our security experts to discuss your IT operations and cybersecurity needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Headquarters</h3>
                    <p className="text-muted-foreground">
                      Wadgaon Sheri<br />
                      Pune City, Maharashtra 411014<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">
                      Support: +91 80 1234 5678<br />
                      Sales: +91 80 8765 4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      opsguarditsolution@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-muted-foreground">
                      SOC & Support: 24/7/365<br />
                      Corporate Office: Mon - Fri, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
            <div className="aspect-video w-full rounded-xl bg-muted border border-border/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5" />
              <div className="text-center">
                <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-2 opacity-50" />
                <span className="text-sm font-medium text-muted-foreground">Google Maps Integration Placeholder</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-primary/20 shadow-xl shadow-primary/5">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting OpsGuard. One of our security experts will get back to you shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-8">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                        <Input id="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="company">Company</label>
                        <Input id="company" required placeholder="Acme Corp" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">Work Email</label>
                        <Input id="email" type="email" required placeholder="john@acmecorp.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="service">Service Required</label>
                      <select 
                        id="service" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Select a service...</option>
                        <option value="managed-it">Managed IT Services</option>
                        <option value="soc">Security Operations (SOC)</option>
                        <option value="vulnerability">Vulnerability Management</option>
                        <option value="cloud">Cloud Management</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="message">Message</label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Please describe your requirements or challenges..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
