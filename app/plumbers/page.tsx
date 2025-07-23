"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  CreditCard,
  MessageSquareText,
  Phone,
} from "lucide-react";
import ChatWidget from "../components/ChatWidget";

export default function LandingPage() {
  // Theme toggle hook
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b bg-background">
      </header>

      <main className="flex-1">
        {/* Hero (using tokens with dark: variants) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/10 to-background dark:from-background dark:to-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  AI‐Powered Solutions for Modern Plumbers
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Transform your plumbing business with our intelligent platform that automates
                  bookings, alerts you to new leads, and streamlines payments—all while you focus on
                  what you do best.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <Link href="https://calendly.com/barnyswebbuilders/free-consultation">
                      Book Your Free 15‐Min Consultation
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[400px]">
                <Image
                  src="/plumber-hero.png"
                  alt="Plumber using PlumbTech AI"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    Streamline Your Plumbing Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Our AI platform helps local plumbers grow their business with powerful automation tools.
                </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-12">
                {/* Left–side bullet points remain unchanged */}
                <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                        <h3 className="text-xl font-semibold">24/7 Automated Booking</h3>
                        <p className="text-muted-foreground">
                        Never miss a job—customers can book service calls anytime without conflicts.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <MessageSquareText className="h-8 w-8 text-primary" />
                    <div>
                        <h3 className="text-xl font-semibold">Real‐Time Lead Alerts</h3>
                        <p className="text-muted-foreground">
                        Get instant SMS/email notifications when new customers need plumbing services.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                        <h3 className="text-xl font-semibold">Integrated Payments & Invoicing</h3>
                        <p className="text-muted-foreground">
                        Accept payments on‐site or online and send automated invoices—no more chasing checks.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <div>
                        <h3 className="text-xl font-semibold">Local Expertise Showcase</h3>
                        <p className="text-muted-foreground">
                        Our local case studies show a 20–30% bump in service calls for plumbers like you.
                        </p>
                    </div>
                    </div>
                </div>

                {/* Right–side image: use object-contain so the entire dashboard is visible */}
                <div className="relative w-full rounded-lg overflow-hidden">
                    <Image
                    src="/plumber-features.png"
                    alt="PlumbTech AI Dashboard"
                    fill
                    className="object-cover"
                    />
                </div>
                </div>
            </div>
        </section>

        {/* Results */}
        <section id="results" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  Real Results for Real Plumbers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  See how plumbers like you have transformed their businesses with our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
              <Card className="bg-background dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-secondary/10 p-2">
                      <Image
                        src="/plumber-avatar-male.png"
                        alt="Mike's Plumbing"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Mike’s Plumbing</h3>
                      <p className="text-sm text-muted-foreground">Portland, OR</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    “Since using PlumbTech AI, we saw a{" "}
                    <span className="font-bold text-primary">28% increase</span> in service calls. Automated
                    booking keeps us busy without lifting a finger.”
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-secondary/10 p-2">
                      <Image
                        src="/plumber-avatar-female.png"
                        alt="Sarah’s Plumbing Solutions"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sarah’s Plumbing Solutions</h3>
                      <p className="text-sm text-muted-foreground">Austin, TX</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    “Real‐time lead alerts boosted our growth by{" "}
                    <span className="font-bold text-primary">32%</span>. Now we’re
                    booking more jobs without extra staff.”
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  Ready to Grow Your Plumbing Business?
                </h2>
                <p className="text-lg">
                  Join the community of successful plumbers who’ve revolutionized their operations with our AI platform.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-background text-foreground p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Book Your Free Consultation</h3>
                    <p className="text-muted-foreground">15 minutes that can change everything</p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full">
                  <Link href="https://calendly.com/barnyswebbuilders/free-consultation">
                    Schedule Now
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  No obligation. Reschedule or cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background text-muted-foreground">
        <div className="container mx-auto flex flex-col gap-2 py-6 px-4 md:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/BWB-logo-alt.png"
                alt="PlumbTech AI Logo"
                width={30}
                height={30}
                className="rounded"
              />
              <span className="text-lg font-semibold">Barny's Web Builders</span>
            </div>
            <p className="text-xs">© {new Date().getFullYear()} BWB. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}
