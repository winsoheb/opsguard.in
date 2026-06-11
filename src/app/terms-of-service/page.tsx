import { Shield } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24 relative overflow-hidden">
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
              <Shield className="mr-2 h-4 w-4" /> Legal
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Last Updated: June 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl prose prose-neutral dark:prose-invert">
            <p className="text-lg mb-8">
              Welcome to OpsGuard. By accessing or using our website, you agree to comply with these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Services</h2>
            <p className="mb-8">
              OpsGuard provides Managed IT Services, Cybersecurity Services, Infrastructure Monitoring, Vulnerability Management, Cloud Management, and related technology consulting services.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Website Usage</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Use the website lawfully</li>
              <li>Not attempt unauthorized access to systems or data</li>
              <li>Not distribute malicious software or harmful content</li>
              <li>Not interfere with website operations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Intellectual Property</h2>
            <p className="mb-8">
              All content on this website, including text, graphics, logos, and branding, is the property of OpsGuard unless otherwise stated.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Service Availability</h2>
            <p className="mb-8">
              We strive to maintain continuous availability of our website and services but do not guarantee uninterrupted access.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Limitation of Liability</h2>
            <p className="mb-8">
              OpsGuard shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or services.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">External Links</h2>
            <p className="mb-8">
              Our website may contain links to third-party websites. We are not responsible for the content or practices of those websites.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Termination</h2>
            <p className="mb-8">
              We reserve the right to restrict or terminate access to our website for violations of these terms.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Governing Law</h2>
            <p className="mb-8">
              These Terms shall be governed by and interpreted in accordance with the laws of India.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Information</h2>
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <p className="font-semibold">OpsGuard</p>
              <p>Email: <a href="mailto:support@opsguard.in" className="text-primary hover:underline">support@opsguard.in</a></p>
              <p>Website: <a href="https://opsguard.in" className="text-primary hover:underline">https://opsguard.in</a></p>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Changes to Terms</h2>
            <p className="mb-8">
              We may update these Terms of Service from time to time. Continued use of the website constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
