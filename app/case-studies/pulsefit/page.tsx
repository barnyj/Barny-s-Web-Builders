import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CaseStudy() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                PulseFit — Wellness Tracking
              </h1>
              <p className="text-muted-foreground md:text-xl">
                A comprehensive wellness tracking application designed to help users monitor their health journey with
                ease.
              </p>
            </div>
            <div className="rounded-lg border bg-background shadow-lg overflow-hidden">
              <Image
                src="/pulsefit-logo.png"
                alt="PulseFit Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">TIMEFRAME</h3>
                <p className="text-xl font-semibold">Jan–Feb 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">FOCUS</h3>
                <p className="text-xl font-semibold">UX/UI</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">TECHNOLOGIES</h3>
                <p className="text-xl font-semibold">Shadcn UI, V0</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              PulseFit is a comprehensive wellness tracking application that enables users to log and monitor their
              workouts, meals, and sleep patterns. The application's primary goal is to provide users with clear
              progress tracking, helping them stay motivated and achieve their health and fitness goals.
            </p>
            <p className="text-lg text-muted-foreground">
              With an intuitive interface and powerful analytics, PulseFit stands out as a holistic solution for
              individuals seeking to improve their overall well-being through data-driven insights and personalized
              recommendations.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Challenges Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">Challenges</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">High Drop-off Rate During Onboarding</h3>
                  <p className="text-muted-foreground">
                    The initial onboarding process consisted of 8 screens, leading to a significant 52% drop-off rate
                    before users could even start using the application.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Complex Workout Logging</h3>
                  <p className="text-muted-foreground">
                    Users had to navigate through 5 separate taps to log a single workout, creating friction in the user
                    experience and discouraging regular tracking.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Absence of Clear Progress View</h3>
                  <p className="text-muted-foreground">
                    The application lacked a comprehensive dashboard that would allow users to visualize their progress
                    over time, making it difficult for them to stay motivated.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Approach Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">Approach</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Project Specifications & Rationale</h3>
              <p className="text-muted-foreground mb-4">
                Our approach was guided by data-driven insights and user-centered design principles. Each decision was
                made with the goal of increasing user engagement, reducing friction, and creating a more intuitive
                experience.
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">User Research</h3>
                  <p className="text-muted-foreground mb-4">
                    Conducted 10 in-depth user interviews to understand pain points and expectations from a wellness
                    tracking application.
                  </p>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">WHY THIS APPROACH:</h4>
                  <p className="text-muted-foreground">
                    Direct user feedback was essential to identify the actual pain points rather than assumed ones. Our
                    interviews revealed that users valued simplicity and immediate feedback over comprehensive feature
                    sets. This insight directly influenced our decision to streamline the entire user journey.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Streamlined Onboarding</h3>
                  <p className="text-muted-foreground mb-4">
                    Reduced the onboarding process from 8 screens to just 3 essential screens, focusing on gathering
                    only the most critical information.
                  </p>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">WHY THIS APPROACH:</h4>
                  <p className="text-muted-foreground">
                    Analysis of drop-off points showed that users abandoned the app primarily during the lengthy
                    onboarding. By applying progressive disclosure principles, we collected only essential information
                    upfront (basic profile, primary goals, and notification preferences) and deferred secondary data
                    collection to contextually relevant moments during the user journey.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">One-Tap Logging</h3>
                  <p className="text-muted-foreground mb-4">
                    Implemented a Floating Action Button (FAB) that enables users to log workouts, meals, and sleep with
                    just one tap, significantly reducing friction.
                  </p>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">WHY THIS APPROACH:</h4>
                  <p className="text-muted-foreground">
                    User session recordings revealed that the multi-step logging process was the primary reason for
                    abandoned tracking attempts. The FAB implementation was inspired by the "path of least resistance"
                    design principle. We created smart defaults based on user patterns and time of day, allowing for
                    quick logging with the option to edit details later, rather than requiring all information upfront.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Consistent Design System</h3>
                  <p className="text-muted-foreground mb-4">
                    Utilized an 8pt grid UI kit to ensure consistency across the application, making the interface more
                    intuitive and visually appealing.
                  </p>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">WHY THIS APPROACH:</h4>
                  <p className="text-muted-foreground">
                    The previous interface lacked visual hierarchy and consistent spacing, creating cognitive load for
                    users. We chose an 8pt grid system because it provides mathematical harmony while working well
                    across device sizes. This system allowed us to create a component library that ensured visual
                    consistency, reduced design decision fatigue, and accelerated development time by 40%.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Data Visualization Overhaul</h3>
                  <p className="text-muted-foreground mb-4">
                    Redesigned the progress dashboard with intuitive charts and visual indicators that highlight trends
                    and achievements.
                  </p>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">WHY THIS APPROACH:</h4>
                  <p className="text-muted-foreground">
                    User interviews revealed that motivation was directly tied to visible progress. We implemented a
                    combination of immediate feedback (confetti animations for achievements) and long-term visualization
                    (trend lines and heat maps) to satisfy both immediate gratification and long-term motivation needs.
                    Color psychology principles were applied to create intuitive understanding of data (green for
                    improvement, red for areas needing attention).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Results Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">Results</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400">85%</h3>
                  <p className="font-medium">Onboarding completion rate (up from 48%)</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400">1 tap</h3>
                  <p className="font-medium">Required for workout logging (down from 5)</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400">+70%</h3>
                  <p className="font-medium">Increase in weekly active users (WAU)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-8">Gallery</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">New: Pulsefit Dash</h3>
                  <div className="rounded-lg border overflow-hidden">
                    <Image
                      src="/pulsefit-dash.jpeg"
                      alt="streamline intuitive dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">New: 3-Step Logging</h3>
                  <div className="rounded-lg border overflow-hidden gap-4">
                    <Image
                      src="/pulsefit-nav.jpeg"
                      alt="step 1 logging"
                      width={600}
                      height={400}
                      className="w-full h-auto mb-4 rounded-tl-lg rounded-tr-lg rounded-br-lg "
                    />
                    <Image
                      src="/pulsefit-quicklog1.jpeg"
                      alt="step 2 logging"
                      width={600}
                      height={400}
                      className="w-full h-auto mb-4 rounded-tl-lg rounded-tr-lg rounded-br-lg "
                    />
                    <Image
                      src="/pulsefit-quicklog2.jpeg"
                      alt="step 3 logging"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-tl-lg rounded-tr-lg rounded-br-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2"> New: Streamlined analytics </h3>
                  <div className="rounded-lg border overflow-hidden">
                    <Image
                      src="/pulsefit-analytics.jpeg"
                      alt="After: Streamlined Onboarding"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">New: Easy Profile Editing</h3>
                  <div className="rounded-lg border overflow-hidden">
                    <Image
                      src="/pulsefit-profile.jpeg"
                      alt="After: One-Tap Logging"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
