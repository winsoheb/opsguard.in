import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getSortedPostsData } from "@/lib/markdown"

const categories = [
  "Linux", "Cybersecurity", "Cloud Computing", "Wazuh", "Oracle Cloud", "Infrastructure Monitoring", "Vulnerability Management"
]

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-24 md:py-32 relative overflow-hidden">
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              OpsGuard Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert articles, tutorials, and insights on Cybersecurity, Linux, Cloud Infrastructure, and IT Operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-3/4 space-y-8">
              {posts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No blog posts found. Check the CMS.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post: any) => (
                    <Card key={post.id} className="flex flex-col bg-card hover:bg-muted/50 transition-colors border-border/50">
                      <CardHeader>
                        <div className="text-sm font-medium text-primary mb-2">{post.category}</div>
                        <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                        <div className="text-sm text-muted-foreground mt-2">
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <CardDescription className="text-base">{post.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" className="px-0" asChild>
                          <Link href={`/blog/${post.id}`}>Read Article &rarr;</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.map((category, i) => (
                      <li key={i}>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center justify-between">
                          <span>{category}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Subscribe to Newsletter</CardTitle>
                  <CardDescription>Get the latest security alerts and IT guides delivered to your inbox.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <Button className="w-full">Subscribe</Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
