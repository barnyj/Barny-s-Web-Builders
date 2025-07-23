"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z
  .object({
    // Business & Branding Information
    businessName: z.string().min(2, { message: "Business name must be at least 2 characters." }),
    targetAudience: z.string().min(10, { message: "Please describe your target audience in at least 10 characters." }),
    brandColors: z.string().min(2, { message: "Please specify your brand colors." }),
    brandVoice: z.string().min(2, { message: "Please describe your brand voice." }),
    logoAssets: z.string().min(10, { message: "Please provide details about your logo and brand assets." }),
    preferredFonts: z.string().min(2, { message: "Please specify your preferred fonts." }),
    companyTagline: z.string().min(2, { message: "Please provide your company tagline." }),

    // Website Goals & Features
    websiteGoals: z.string().min(10, { message: "Please describe your website goals in at least 10 characters." }),
    websitePages: z.string().min(2, { message: "Please list the pages you need." }),
    inspiration: z.string().min(10, { message: "Please share your inspiration or reference sites." }),
    mustHaveFeatures: z.string().min(2, { message: "Please list your must-have features." }),
    ecommerceNeeds: z.enum(["Yes", "No"], { required_error: "Please select if you need eCommerce functionality." }),
    productCount: z.string().optional(),

    // Content & Assets
    websiteContent: z.enum(["Yes", "No", "Partially"], {
      required_error: "Please select your content readiness status.",
    }),
    contentAccess: z.string().min(2, { message: "Please provide content access details." }),
    imagesMedia: z.string().min(10, { message: "Please describe your images and media needs." }),
    copywriting: z.enum(["Yes", "No"], { required_error: "Please select if you need copywriting services." }),

    // Domain & Technical Information
    domainName: z.string().min(2, { message: "Please provide your domain name or preference." }),
    domainAccess: z.enum(["Yes", "No"], { required_error: "Please select if you have domain access." }),
    contactEmail: z.string().email({ message: "Please enter a valid email address." }),
    analyticsTracking: z.enum(["Google Analytics", "Facebook Pixel", "None"], {
      required_error: "Please select your analytics preference.",
    }),

    // Project Scope & Timeline
    timeline: z.string().min(2, { message: "Please specify your desired timeline." }),
    budget: z.string().min(2, { message: "Please provide your budget range." }),
    additionalInfo: z.string().min(10, { message: "Please provide any additional information." }),

    // Contact Information
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
    emailAddress: z.string().email({ message: "Please enter a valid email address." }),
    phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  })
  .refine(
    (data) => {
      if (data.ecommerceNeeds === "Yes" && !data.productCount) {
        return false
      }
      return true
    },
    {
      message: "Please specify how many products you need for eCommerce.",
      path: ["productCount"],
    },
  )

export default function OnboardingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      targetAudience: "",
      brandColors: "",
      brandVoice: "",
      logoAssets: "",
      preferredFonts: "",
      companyTagline: "",
      websiteGoals: "",
      websitePages: "",
      inspiration: "",
      mustHaveFeatures: "",
      ecommerceNeeds: undefined,
      productCount: "",
      websiteContent: undefined,
      contentAccess: "",
      imagesMedia: "",
      copywriting: undefined,
      domainName: "",
      domainAccess: undefined,
      contactEmail: "",
      analyticsTracking: undefined,
      timeline: "",
      budget: "",
      additionalInfo: "",
      fullName: "",
      companyName: "",
      emailAddress: "",
      phoneNumber: "",
    },
  })

  const watchEcommerceNeeds = form.watch("ecommerceNeeds")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      
      // 1) send to Notion
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      // Redirect to Calendly
      router.push("https://calendly.com/barnyswebbuilders/project-kick-off-call")
    } catch (err) {
      console.error(err)
      alert("Submission failed, please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">Client Project Onboarding Form</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Help us understand your project requirements so we can create the perfect website for your business.
          </p>
        </motion.div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
            {/* Section 1: Business & Branding Information */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={sectionVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                variants={sectionVariants}
              >
                🗂️ Business & Branding Information
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariants}>
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>🏢 Business Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your business name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brandColors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>🎨 Brand Colors</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Blue, White, Gold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brandVoice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>📝 Brand Voice</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Professional, Friendly, Modern" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredFonts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>🔤 Preferred Fonts</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Arial, Helvetica, Custom fonts" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyTagline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>💫 Company Tagline</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company tagline or slogan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>🎯 Target Audience</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your target audience, demographics, and customer personas"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="logoAssets"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>🖼️ Logo & Brand Assets</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your existing logo, brand assets, or if you need new ones created"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </motion.section>

            {/* Section 2: Website Goals & Features */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={sectionVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                variants={sectionVariants}
              >
                🧱 Website Goals & Features
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariants}>
                <FormField
                  control={form.control}
                  name="websitePages"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>📄 Website Pages</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Home, About, Services, Contact" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mustHaveFeatures"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>⚙️ Must-have Features</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Contact forms, Booking system, Blog" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ecommerceNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>🛒 eCommerce Needs</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Do you need eCommerce functionality?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {watchEcommerceNeeds === "Yes" && (
                  <FormField
                    control={form.control}
                    name="productCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How many products?</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 10-50 products" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <FormField
                  control={form.control}
                  name="websiteGoals"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>🎯 Website Goals</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What do you want to achieve with your website? (e.g., generate leads, sell products, build brand awareness)"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="inspiration"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>💡 Inspiration</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share any websites you like or want to use as inspiration (include URLs if possible)"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </motion.section>

            {/* Section 3: Content & Assets */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={sectionVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                variants={sectionVariants}
              >
                📝 Content & Assets
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariants}>
                <FormField
                  control={form.control}
                  name="websiteContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>📄 Website Content</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Do you have content ready?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes, content is ready</SelectItem>
                          <SelectItem value="No">No, need help creating content</SelectItem>
                          <SelectItem value="Partially">Partially ready</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="copywriting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>✍️ Copywriting</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Do you need copywriting services?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes, need copywriting help</SelectItem>
                          <SelectItem value="No">No, I'll provide the copy</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contentAccess"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>🔗 Content Access</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How will you provide content? (Google Drive, email, existing website, etc.)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imagesMedia"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>📸 Images & Media</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your image and media needs. Do you have professional photos? Need stock images? Video content?"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </motion.section>

            {/* Section 4: Domain & Technical Information */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={sectionVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                variants={sectionVariants}
              >
                🌐 Domain & Technical Information
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariants}>
                <FormField
                  control={form.control}
                  name="domainName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>🔗 Domain Name</FormLabel>
                      <FormControl>
                        <Input placeholder="yourwebsite.com or preferred domain" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="domainAccess"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>🔐 Domain Access</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Do you have domain access?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes, I have access</SelectItem>
                          <SelectItem value="No">No, need help with domain</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>📧 Contact Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="analyticsTracking"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>📊 Analytics & Tracking</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select analytics preference" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Google Analytics">Google Analytics</SelectItem>
                          <SelectItem value="Facebook Pixel">Facebook Pixel</SelectItem>
                          <SelectItem value="None">None</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </motion.section>

            {/* Section 5: Project Scope & Timeline */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={sectionVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                variants={sectionVariants}
              >
                ✅ Project Scope & Timeline
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariants}>
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>⏱️ Timeline</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2-4 weeks, ASAP, flexible" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>💰 Budget</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., $2,000-$5,000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>📝 Additional Information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any additional information, special requirements, or questions you'd like to share"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </motion.section>

            {/* Section 6: Contact Information */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              variants={sectionVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                variants={sectionVariants}
              >
                📞 Contact Information
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariants}>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>👤 Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>🏢 Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>📧 Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>📱 Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </motion.section>

            {/* Submit Button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={sectionVariants}
              className="text-center pt-8"
            >
              <Button type="submit" size="lg" className="px-12 py-4 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Schedule Your Kick-off Call"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                After submitting, you'll be redirected to schedule your project kick-off call.
              </p>
            </motion.div>
          </form>
        </Form>
      </div>
    </div>
  )
}
