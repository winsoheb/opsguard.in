"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg("")

    const formData = new FormData(e.currentTarget)

    try {
      // Cast the entries explicitly to handle TypeScript typings for URLSearchParams
      const data = new URLSearchParams()
      for (const [key, value] of formData.entries()) {
        data.append(key, value.toString())
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setErrorMsg("Oops! There was a problem submitting your form.")
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact OpsGuard</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our security experts to discuss your IT operations and cybersecurity needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4 hover:translate-x-1 transition-transform">
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
                
                <div className="flex items-start space-x-4 hover:translate-x-1 transition-transform">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">
                      Support: +91 80 1234 5678<br />
                      Sales: +91 80 8765 4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 hover:translate-x-1 transition-transform">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      opsguarditsolution@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-1 transition-transform">
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

            {/* Google Maps Embed */}
            <div className="aspect-video w-full rounded-xl bg-muted border border-border/50 relative overflow-hidden shadow-lg group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1643039879793!2d73.92383567604313!3d18.56661918253634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14092bba7bd%3A0xdb69fc9e3c907a9b!2sWadgaon%20Sheri%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-primary/20 shadow-xl shadow-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <CardContent className="p-8 relative z-10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-16 space-y-4"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting OpsGuard. One of our security experts will get back to you shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-8" variant="outline">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    {errorMsg && (
                      <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-md text-sm font-medium">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                        <Input id="name" name="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="company">Company</label>
                        <Input id="company" name="company" required placeholder="Acme Corp" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">Work Email</label>
                        <Input id="email" name="email" type="email" required placeholder="john@acmecorp.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="service">Service Required</label>
                      <select 
                        id="service" 
                        name="service"
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
                        name="message"
                        required 
                        placeholder="Please describe your requirements or challenges..."
                        className="min-h-[150px] resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
