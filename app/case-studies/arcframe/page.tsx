"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, LineChart, Smartphone, Zap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 text-sm font-medium rounded-md">
            Case Study
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">ArcFrame Website Redesign</h1>
          <p className="text-xl text-muted-foreground">
            Performance improvements and user experience enhancements for an architecture portfolio
          </p>
        </div>

        {/* Overview */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Image
              src="/arcframe-logo.png"
              alt="ArcFrame website redesign"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p className="text-muted-foreground">
              ArcFrame, an architectural design firm, approached us to redesign their outdated website that was
              suffering from performance issues and poor user experience. The project focused on improving load times,
              enhancing mobile usability, and creating a more effective showcase for their architectural portfolio.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-muted-foreground">Timeline</p>
                <p className="font-medium">12 weeks</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium">Lead Designer & Developer</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-medium">ArcFrame Architecture</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-medium">2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Challenges</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-4">
                  <Clock className="h-8 w-8 text-teal-600" />
                  <div>
                    <h3 className="font-bold">Slow Load Times</h3>
                    <p className="text-sm text-muted-foreground">
                      The legacy site took 3-4 seconds to load, causing high bounce rates and user frustration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-4">
                  <Smartphone className="h-8 w-8 text-teal-600" />
                  <div>
                    <h3 className="font-bold">Poor Mobile Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      The site was not responsive, resulting in poor readability and navigation on mobile devices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-4">
                  <LineChart className="h-8 w-8 text-teal-600" />
                  <div>
                    <h3 className="font-bold">Overwhelming Galleries</h3>
                    <p className="text-sm text-muted-foreground">
                      Project galleries lacked hierarchy and organization, making it difficult for users to find
                      relevant work.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Goals */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Project Goals</h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">Sub-1 Second First-Paint</h3>
                <p className="text-muted-foreground">
                  Dramatically improve initial load performance to under 1 second.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">Fully Responsive Mobile UI</h3>
                <p className="text-muted-foreground">Create a seamless experience across all device sizes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">Improved Gallery Flow</h3>
                <p className="text-muted-foreground">
                  Implement a 'Featured → All → Detail' gallery flow for better user navigation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">Maintainable Design System</h3>
                <p className="text-muted-foreground">
                  Establish a consistent and scalable design system for future updates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">98+ Lighthouse Score</h3>
                <p className="text-muted-foreground">Achieve excellent performance, accessibility, and SEO metrics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Analysis */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Research & Analysis</h2>
          <Tabs defaultValue="user-interviews">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="user-interviews">User Interviews</TabsTrigger>
              <TabsTrigger value="competitive">Competitive Analysis</TabsTrigger>
              <TabsTrigger value="technical">Technical Audit</TabsTrigger>
            </TabsList>
            <TabsContent value="user-interviews" className="space-y-4 pt-4">
              <p>
                We conducted in-depth interviews with 6 users representing different stakeholder groups to understand
                their needs and pain points.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Key Findings:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Users were frustrated by slow image loading in project galleries</li>
                    <li>Mobile users struggled with navigation and reading text</li>
                    <li>Clients wanted an easier way to browse projects by type</li>
                    <li>Users expected to see featured projects immediately</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="competitive" className="space-y-4 pt-4">
              <p>
                We analyzed 8 competitor websites to identify industry standards and opportunities for differentiation.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Benchmarks:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Average load time across competitors: 2.7 seconds</li>
                    <li>60% of competitors had responsive designs</li>
                    <li>Top performers used progressive image loading</li>
                    <li>Most successful sites featured project categorization</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="technical" className="space-y-4 pt-4">
              <p>
                We performed a comprehensive technical audit of the existing site to identify performance bottlenecks.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Issues Identified:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Unoptimized images (average size: 1.2MB per image)</li>
                    <li>Render-blocking JavaScript (85KB)</li>
                    <li>No caching strategy implemented</li>
                    <li>Multiple unnecessary HTTP requests</li>
                    <li>Non-minified CSS and JavaScript files</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* User Personas */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">User Personas</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-800 font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Architect</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional architects looking for inspiration or potential collaboration opportunities.
                      Interested in technical details and innovative approaches.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-800 font-bold">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Enthusiast</h3>
                    <p className="text-sm text-muted-foreground">
                      Design enthusiasts and potential clients browsing for ideas and to assess ArcFrame's style and
                      capabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-800 font-bold">D</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Developer</h3>
                    <p className="text-sm text-muted-foreground">
                      Real estate developers seeking to evaluate ArcFrame's portfolio for potential commercial projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Architecture */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Information Architecture</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-teal-100 p-4 rounded-lg text-center font-medium text-teal-800">Home</div>
                <div className="bg-teal-100 p-4 rounded-lg text-center font-medium text-teal-800">Projects</div>
                <div className="bg-teal-100 p-4 rounded-lg text-center font-medium text-teal-800">Process</div>
                <div className="bg-teal-100 p-4 rounded-lg text-center font-medium text-teal-800">About</div>
                <div className="bg-teal-100 p-4 rounded-lg text-center font-medium text-teal-800">Contact</div>
              </div>
              <div className="grid grid-cols-5 gap-4 mt-4">
                <div className="space-y-2">
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Hero</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Featured Projects</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Services</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Testimonials</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Featured</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">All Projects</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Project Detail</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Related Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Approach</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Methodology</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Timeline</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Collaboration</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Team</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">History</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Values</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Awards</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Form</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Location</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Social Media</div>
                  <div className="bg-gray-100 p-2 rounded text-sm text-center text-muted-foreground">Newsletter</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design System */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Design System</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-bold">Grid System</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="grid grid-cols-12 gap-1 h-16">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-teal-200 rounded"></div>
                  ))}
                </div>
                <p className="text-sm text-center mt-2 text-muted-foreground">12-column responsive grid</p>
              </div>
              <h3 className="font-bold mt-6">Spacing</h3>
              <div className="flex gap-2 items-end">
                <div className="h-4 w-4 bg-teal-200 rounded"></div>
                <div className="h-8 w-8 bg-teal-200 rounded"></div>
                <div className="h-12 w-12 bg-teal-200 rounded"></div>
                <div className="h-16 w-16 bg-teal-200 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground">1rem base with 0.5x, 1x, 2x, and 4x multipliers</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Typography</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold">Heading 2</div>
                <div className="text-xl font-bold">Heading 3</div>
                <div className="text-lg font-medium">Subheading</div>
                <div>Body text</div>
                <div className="text-sm">Small text</div>
              </div>
              <p className="text-sm text-muted-foreground">Two-step typographic scale</p>

              <h3 className="font-bold mt-6">Color Palette</h3>
              <div className="flex gap-2">
                <div className="h-12 w-12 bg-[#2D3436] rounded"></div>
                <div className="h-12 w-12 bg-white border rounded"></div>
                <div className="h-12 w-12 bg-teal-500 rounded"></div>
                <div className="h-12 w-12 bg-teal-200 rounded"></div>
                <div className="h-12 w-12 bg-gray-200 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground">Charcoal, white, teal primary colors</p>
            </div>
          </div>
        </div>

        {/* Performance Optimization */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Performance Optimization</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-bold">Image Optimization</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>WebP format with fallbacks</li>
                <li>Lazy loading for off-screen images</li>
                <li>Responsive image sizes</li>
                <li>Image compression without quality loss</li>
              </ul>

              <h3 className="font-bold mt-4">CSS Optimization</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Inlined critical CSS</li>
                <li>Deferred non-critical styles</li>
                <li>Minimized CSS bundle size</li>
                <li>Removed unused CSS</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">JavaScript Optimization</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Bundle size under 20KB</li>
                <li>Code splitting for route-based loading</li>
                <li>Deferred non-critical scripts</li>
                <li>Minimal third-party dependencies</li>
              </ul>

              <h3 className="font-bold mt-4">Server Optimization</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>CDN for global asset delivery</li>
                <li>Browser caching with long expiry</li>
                <li>Gzip/Brotli compression</li>
                <li>HTTP/2 for parallel loading</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Results</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">First-Paint Time</h3>
                    <span className="text-teal-600 font-bold">0.9s</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Before: 3.4s</span>
                      <span>After: 0.9s</span>
                    </div>
                    <Progress value={26} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Achieved sub-1 second first-paint time, a 74% improvement over the original site.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Mobile Bounce Rate</h3>
                    <span className="text-teal-600 font-bold">-42%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Before: 68%</span>
                      <span>After: 26%</span>
                    </div>
                    <Progress value={38} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Significant reduction in mobile bounce rate due to improved responsiveness and load times.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Inbound RFPs</h3>
                    <span className="text-teal-600 font-bold">+25%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Before: 8/month</span>
                      <span>After: 10/month</span>
                    </div>
                    <Progress value={125} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Increase in qualified leads and requests for proposals after the redesign.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Page Build Speed</h3>
                    <span className="text-teal-600 font-bold">+40%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Before: 5 days</span>
                      <span>After: 3 days</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Improved efficiency in creating new pages thanks to the component-based design system.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <div className="flex items-center gap-4">
              <Zap className="h-8 w-8 text-teal-600" />
              <div>
                <h3 className="font-bold text-lg">Lighthouse Score: 98/100</h3>
                <p className="text-muted-foreground">
                  The redesigned site achieved excellent scores across all Lighthouse metrics.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900 font-bold text-xl">
                  98
                </div>
                <p className="mt-2 text-sm font-medium">Performance</p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900 font-bold text-xl">
                  100
                </div>
                <p className="mt-2 text-sm font-medium">Accessibility</p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900 font-bold text-xl">
                  97
                </div>
                <p className="mt-2 text-sm font-medium">Best Practices</p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900 font-bold text-xl">
                  99
                </div>
                <p className="mt-2 text-sm font-medium">SEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">Project Filters</h3>
                <p className="text-muted-foreground">Add advanced filtering options to the project gallery.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">Downloadable PDFs</h3>
                <p className="text-muted-foreground">Create downloadable project sheets for offline viewing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h3 className="font-bold">Automated Lighthouse Monitoring</h3>
                <p className="text-muted-foreground">
                  Implement continuous performance monitoring to maintain high scores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold text-muted-foreground">Conclusion</h2>
          <p className="mt-4 text-muted-foreground">
            The ArcFrame website redesign successfully transformed an outdated, slow-loading site into a
            high-performance, user-friendly platform that effectively showcases the firm's architectural portfolio. By
            focusing on performance optimization, responsive design, and intuitive information architecture, we were
            able to significantly improve user engagement metrics and business outcomes.
          </p>
          <p className="mt-4 text-muted-foreground">
            The established design system provides a solid foundation for future growth, enabling the ArcFrame team to
            maintain consistency while easily expanding their online presence as their portfolio grows.
          </p>
        </div>
      </div>
    </div>
  )
}
