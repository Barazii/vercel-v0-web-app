"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CreditCard, Shield, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Service } from "@/types/services"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  service: Service
}

export function CheckoutModal({ isOpen, onClose, service }: CheckoutModalProps) {
  const [step, setStep] = useState<'details' | 'payment'>('details')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    budget: service.price
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleContinueToPayment = () => {
    if (!formData.name || !formData.email || !formData.projectDetails) {
      alert('Please fill in all required fields')
      return
    }
    setStep('payment')
  }

  const handleStripeCheckout = async () => {
    setLoading(true)
    try {
      // Here you would integrate with Stripe
      const response = await fetch('/api/checkout/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: service.id,
          customerInfo: formData,
          priceId: service.stripePriceId
        })
      })
      
      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleMetaMaskPayment = async () => {
    setLoading(true)
    try {
      // Here you would integrate with MetaMask/Web3
      alert('MetaMask integration coming soon!')
    } catch (error) {
      console.error('MetaMask error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold">Get Started</h2>
              <p className="text-muted-foreground">{service.title}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress */}
          <div className="px-6 py-4 border-b">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step === 'details' ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  step === 'details' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium">Project Details</span>
              </div>
              <div className="flex-1 h-px bg-muted"></div>
              <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  step === 'payment' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {step === 'details' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tell me about your project</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectDetails">Project Details *</Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Please describe your project, goals, and any specific requirements..."
                    rows={4}
                    required
                  />
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">${service.price}</div>
                    <div className="text-sm text-muted-foreground">USD</div>
                  </div>
                </div>

                <Button onClick={handleContinueToPayment} className="w-full" size="lg">
                  Continue to Payment
                </Button>
              </div>
            )}

            {step === 'payment' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto p-6 flex flex-col items-center gap-3"
                      onClick={handleStripeCheckout}
                      disabled={loading}
                    >
                      <CreditCard className="w-8 h-8 text-primary" />
                      <div className="text-center">
                        <div className="font-semibold">Credit Card</div>
                        <div className="text-sm text-muted-foreground">Secure payment with Stripe</div>
                      </div>
                      {loading && <div className="text-xs">Processing...</div>}
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto p-6 flex flex-col items-center gap-3"
                      onClick={handleMetaMaskPayment}
                      disabled={loading}
                    >
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                        M
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">MetaMask</div>
                        <div className="text-sm text-muted-foreground">Pay with crypto</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
