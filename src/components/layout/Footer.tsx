import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-flex items-center w-fit">
              <Image src="/opsguard_logo_transparent.png" alt="OpsGuard Logo" width={150} height={40} className="object-contain h-10" style={{ width: "auto" }} />
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Protect. Monitor. Manage. 24x7 Managed IT Services and Cybersecurity Solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/managed-it" className="hover:text-primary transition-colors">Managed IT Services</Link></li>
              <li><Link href="/security-operations" className="hover:text-primary transition-colors">Security Operations (SOC)</Link></li>
              <li><Link href="/vulnerability-management" className="hover:text-primary transition-colors">Vulnerability Management</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.linkedin.com/in/opsguard-it-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com/opsguard" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OpsGuard IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
