"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, User, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - replace with actual API calls
const featuredContent = {
  articles: [
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
    }
  ]
}

export function FeaturedContent() {
  return (
    <section className="py-24 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-12 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-12 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Latest Articles
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Insights, stories, and strategies from the world of journalism and e-commerce.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Articles */}
            {featuredContent.articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <article className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/articles/${article.id}`}>{article.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/articles">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
