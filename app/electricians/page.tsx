"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Star,
  MessageCircle,
  Calendar,
  Bell,
  CreditCard,
  Zap,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import ChatWidget from "../components/ChatWidget"

export default function ElectricianLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Transform Your Electrical Business with{" "}
            <span className="text-blue-600 dark:text-blue-400">AI-Powered Tools</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Streamline operations, boost customer satisfaction, and increase revenue with our intelligent platform
            designed specifically for electrical contractors.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link
                href="https://calendly.com/barnyswebbuilders/10-discount-1month-free"
                target="_blank"
                rel="noopener noreferrer"
            >
              Limited Offer: 10% Off + Free Month
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Card className="mx-auto max-w-4xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold">Instant Customer Support 24/7</CardTitle>
              <CardDescription className="text-lg">
                Never miss a customer inquiry with our AI-powered chatbot that handles scheduling, quotes, and common
                questions automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-gray-50 dark:bg-gray-800 p-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-600">AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-white dark:bg-gray-700 p-3 shadow-sm">
                      <p className="text-sm">
                        Hi! I'm here to help with your electrical needs. What can I assist you with today?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="rounded-lg bg-blue-600 p-3 text-white">
                      <p className="text-sm">I need an electrician for outlet installation</p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-600">AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-white dark:bg-gray-700 p-3 shadow-sm">
                      <p className="text-sm">
                        Perfect! I can schedule that for you. What's your preferred date and time?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 dark:bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">What Our Customers Say</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Mike Rodriguez",
                company: "Rodriguez Electric",
                rating: 5,
                review:
                  "This platform doubled our booking rate in just 3 months. The AI chatbot handles customer inquiries perfectly!",
              },
              {
                name: "Sarah Chen",
                company: "Chen Electrical Services",
                rating: 5,
                review:
                  "The automated scheduling feature saved us 10 hours per week. Our customers love the instant responses.",
              },
              {
                name: "David Thompson",
                company: "Thompson Electric Co.",
                rating: 5,
                review:
                  "Best investment we've made for our business. The lead notifications help us respond faster than competitors.",
              },
            ].map((review, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">"{review.review}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{review.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              See how electrical contractors are growing their businesses with our platforms
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Johnson Electric Co.",
                summary: "300% increase in booking requests",
                image: "/Johnson-Elec-co.png",
                description:
                  "By implementing our AI chatbot and automated scheduling, Johnson Electric saw a dramatic increase in customer inquiries and bookings.",
              },
              {
                title: "Metro Electrical Services",
                summary: "50% reduction in response time",
                image: "/Metro-Elec-Serv.png",
                description:
                  "Real-time lead notifications helped Metro Electrical respond to customer inquiries 50% faster than before.",
              },
              {
                title: "PowerTech Solutions",
                summary: "40% increase in revenue",
                image: "/Powertech-Sol.png",
                description:
                  "Seamless payment integration and automated follow-ups resulted in a significant boost in overall revenue.",
              },
            ].map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {study.summary}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Powerful Features for Electrical Contractors
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Automated Scheduling",
                description:
                  "Let customers book appointments 24/7 with intelligent scheduling that prevents conflicts and optimizes your route.",
              },
              {
                icon: Bell,
                title: "Real-time Lead Notifications",
                description:
                  "Get instant alerts for new leads via SMS, email, or push notifications so you never miss an opportunity.",
              },
              {
                icon: CreditCard,
                title: "Seamless Payment Integration",
                description:
                  "Accept payments on-site or online with integrated payment processing and automated invoicing.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Grow Your Electrical Business?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Join hundreds of electrical contractors who are already transforming their businesses with our AI-powered
            platform.
          </p>
          <div className="mt-8">
            
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <Link
                href="https://calendly.com/barnyswebbuilders/10-discount-1month-free"
                target="_blank"
                rel="noopener noreferrer"
            >
              Limited Offer: 10% Off + Free Month
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 dark:bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">Barny's Web Builder's</span>
              </div>
              <p className="text-gray-400">Empowering electrical contractors with AI-powered business solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>info@barnyswebbuilders.com</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  )
}
