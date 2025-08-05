"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, User, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

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
  ],
  videos: [
    {
      id: "1",
      title: "E-commerce Analytics Deep Dive",
      description: "Understanding key metrics and KPIs that drive successful online businesses.",
      duration: "12:45",
      views: 3420,
      publishedAt: "2024-01-12",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Analytics"
    },
    {
      id: "2",
      title: "Interview: Tech Startup CEO",
      description: "Exclusive conversation about scaling a tech startup from idea to IPO.",
      duration: "28:30",
      views: 1890,
      publishedAt: "2024-01-09",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      category: "Interview"
    },
    {
      id: "3",
      title: "Content Marketing Masterclass",
      description: "Step-by-step guide to creating content that engages and converts your audience.",
      duration: "18:22",
      views: 5670,
      publishedAt: "2024-01-05",
      thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      category: "Education"
    }
  ],
  podcasts: [
    {
      id: "1",
      title: "The Business of Journalism",
      description: "Exploring how traditional journalism is adapting to the digital age and new revenue models.",
      duration: "45:20",
      publishedAt: "2024-01-14",
      plays: 2340,
      category: "Industry",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop"
    },
    {
      id: "2",
      title: "E-commerce Growth Strategies",
      description: "Proven tactics and strategies for scaling your online business in competitive markets.",
      duration: "38:15",
      publishedAt: "2024-01-11",
      plays: 1870,
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
    },
    {
      id: "3",
      title: "Digital Transformation Stories",
      description: "Real stories from companies that successfully navigated digital transformation.",
      duration: "52:08",
      publishedAt: "2024-01-07",
      plays: 3120,
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    }
  ]
}

export function FeaturedContent() {
  const [activeTab, setActiveTab] = useState("articles")

  return (
    <section className="py-24 bg-background">
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
              Latest Content
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Insights, stories, and strategies from the world of journalism and e-commerce.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-muted p-1 rounded-lg">
              {["articles", "videos", "podcasts"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Articles */}
            {activeTab === "articles" && featuredContent.articles.map((article, index) => (
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

            {/* Videos */}
            {activeTab === "videos" && featuredContent.videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <article className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {video.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/videos/${video.id}`}>{video.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{formatDate(video.publishedAt)}</span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {video.views}
                      </span>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}

            {/* Podcasts */}
            {activeTab === "podcasts" && featuredContent.podcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <article className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {podcast.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/podcasts/${podcast.id}`}>{podcast.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {podcast.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {podcast.duration}
                      </span>
                      <span>{podcast.plays} plays</span>
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
              <Link href={`/${activeTab}`}>
                View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
