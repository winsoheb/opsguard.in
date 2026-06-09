import { getPostData, getAllPostIds } from "@/lib/markdown"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const ids = getAllPostIds()
  return ids.map((id) => ({
    slug: id.params.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  if (!resolvedParams.slug) {
    notFound()
  }

  let postData
  try {
    postData = await getPostData(resolvedParams.slug)
  } catch (e) {
    notFound()
  }

  return (
    <article className="min-h-screen py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
        </Link>
        
        <header className="mb-12">
          <div className="text-primary font-medium mb-4">{postData.category}</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {postData.title}
          </h1>
          <div className="text-muted-foreground">
            {new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div 
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </div>
    </article>
  )
}
