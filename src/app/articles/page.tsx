"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, User, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock articles data - replace with actual API calls
const articles = [
  {
    id: "1",
    title: "The Future of E-commerce: Trends Shaping 2024",
    excerpt: "Exploring emerging technologies and consumer behaviors that will define the next generation of online shopping experiences.",
    author: "Your Name",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    views: 1250,
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "Investigative Report: Supply Chain Transparency",
    excerpt: "A deep dive into how major retailers are addressing supply chain transparency and ethical sourcing concerns.",
    author: "Your Name",
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    views: 892,
    category: "Journalism",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: "3",
    title: "Content Strategy That Converts: A Case Study",
    excerpt: "How a strategic content overhaul increased conversion rates by 150% for a mid-size e-commerce brand.",
    author: "Your Name",
    publishedAt: "2024-01-08",
    readTime: "6 min read",
    views: 2100,
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: "4",
    title: "Digital Marketing ROI: Measuring What Matters",
    excerpt: "Understanding the key metrics and KPIs that actually drive business growth in digital marketing campaigns.",
    author: "Your Name",
    publishedAt: "2024-01-05",
    readTime: "7 min read",
    views: 1680,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: "5",
    title: "The Rise of Social Commerce",
    excerpt: "How social media platforms are transforming into powerful sales channels and what it means for brands.",
    author: "Your Name",
    publishedAt: "2024-01-02",
    readTime: "6 min read",
    views: 950,
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: "6",
    title: "Sustainable Business Practices in Tech",
    excerpt: "Examining how technology companies are implementing sustainable practices and the impact on their bottom line.",
    author: "Your Name",
    publishedAt: "2023-12-28",
    readTime: "9 min read",
    views: 1420,
    category: "Journalism",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    featured: false
  }
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Articles
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, stories, and strategies from the world of journalism and e-commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">
            All Articles
            <span className="text-muted-foreground font-normal ml-2">
              ({articles.length} article{articles.length !== 1 ? 's' : ''})
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="h-full"
                >
                  <article className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">
                          {article.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        <Link href={`/articles/${article.id}`}>{article.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <Button asChild size="lg">
              <Link href="/#newsletter">Subscribe to Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
