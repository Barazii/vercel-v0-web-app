import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import { NewsletterSignup } from "@/components/ui/newsletter-signup"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/yourusername", icon: Instagram },
  { name: "Email", href: "mailto:contact@yourdomain.com", icon: Mail },
]

const navigationSections = {
  Content: [
    { name: "Articles", href: "/articles" },
  ],
  Work: [
    { name: "Services", href: "/services" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Your Name</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Journalist and E-commerce Consultant helping brands tell their stories 
              and grow their digital presence.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigationSections).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold">{section}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get the latest articles and insights delivered to your inbox.
            </p>
            <NewsletterSignup className="mt-4" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
