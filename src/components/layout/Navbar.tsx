"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/security-operations", label: "Security Operations" },
  { href: "/managed-it", label: "Managed IT" },
  { href: "/vulnerability-management", label: "Vulnerability Management" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image src="/opsguard_logo_transparent.png" alt="OpsGuard Logo" width={150} height={40} className="object-contain h-8 md:h-10" style={{ width: "auto" }} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === route.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-muted-foreground hover:text-foreground ml-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full border-b border-border bg-background shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex justify-end mb-2">
              <ThemeToggle />
            </div>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary block",
                  pathname === route.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Support</Link>
              </Button>
              <Button asChild className="w-full justify-start">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Request Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
