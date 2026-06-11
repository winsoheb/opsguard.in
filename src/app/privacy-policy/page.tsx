import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              Welcome to OpsGuard ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following information when you use our website:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Contact Form Submissions</li>
              <li>Technical information such as IP address, browser type, and device information</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Respond to inquiries and support requests</li>
              <li>Provide Managed IT and Cybersecurity services</li>
              <li>Improve our website and services</li>
              <li>Send service-related communications</li>
              <li>Maintain security and prevent unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Data Protection</h2>
            <p className="mb-8">
              We implement reasonable security measures to protect your information from unauthorized access, disclosure, or misuse.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Third-Party Services</h2>
            <p className="mb-8">
              Our website may use third-party services such as analytics providers, hosting providers, and communication tools. These providers may process information as necessary to deliver their services.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Cookies</h2>
            <p className="mb-8">
              Our website may use cookies to improve user experience and analyze website traffic.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Information Sharing</h2>
            <p className="mb-8">
              We do not sell, rent, or trade your personal information to third parties.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Your Rights</h2>
            <p className="mb-8">
              You may request access to, correction of, or deletion of your personal information by contacting us.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
            <p className="mb-4">If you have questions regarding this Privacy Policy, please contact:</p>
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <p className="font-semibold">OpsGuard</p>
              <p>Email: <a href="mailto:support@opsguard.in" className="text-primary hover:underline">support@opsguard.in</a></p>
              <p>Website: <a href="https://opsguard.in" className="text-primary hover:underline">https://opsguard.in</a></p>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Changes to this Policy</h2>
            <p className="mb-8">
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
