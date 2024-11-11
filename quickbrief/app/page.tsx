import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, FileText, Share2, Zap, Shield, Clock } from 'lucide-react'

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">QuickBrief</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          </nav>
          <Button>Sign In</Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                Say Goodbye to Project Chaos.<br />Say Hello to Clarity with QuickBrief.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                QuickBrief helps freelancers and small agencies create professional project briefs in minutes.<br />
                No more miscommunication, just clear, client-ready briefs.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Early Access
              </Button>
            </div>
            <div className="mt-16">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="QuickBrief Interface"
                className="rounded-lg shadow-xl mx-auto"
                width={800}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: FileText, title: "Input Details", description: "Answer a few key questions to capture project requirements." },
                { icon: Zap, title: "Generate the Brief", description: "QuickBrief organizes responses into a professional, ready-to-share document." },
                { icon: Share2, title: "Share with Clients", description: "Export as PDF or share a link to keep everyone on the same page." },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, title: "Guided Questionnaire", description: "Capture all client needs upfront with a step-by-step form." },
                { icon: Zap, title: "Instant Brief Generation", description: "Generate a polished, professional project brief instantly." },
                { icon: FileText, title: "Customizable Templates", description: "Adapt briefs to fit different project types and clients." },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why QuickBrief?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Clarity & Precision", description: "Minimize misunderstandings with clear, detailed briefs." },
                { icon: Clock, title: "Time-Saving", description: "Spend less time on back-and-forth emails and more time building." },
                { icon: FileText, title: "Professional Appearance", description: "Impress clients with polished, professional project briefs." },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", role: "Freelance Designer", quote: "QuickBrief has streamlined our client onboarding. Now we can start projects with confidence!" },
                { name: "Mike Chen", role: "Agency Owner", quote: "The time we save with QuickBrief allows us to focus more on creative work. It's a game-changer." },
                { name: "Emily Rodriguez", role: "Marketing Consultant", quote: "Professional briefs in minutes? QuickBrief delivers on its promise. My clients are impressed every time." },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">Annually</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "Free", price: "$0", features: ["Basic brief templates", "Up to 3 briefs/month", "Export as PDF"] },
                    { name: "Essential", price: "$19", features: ["All Free features", "Unlimited briefs", "Custom templates", "Client collaboration"] },
                    { name: "Pro", price: "$49", features: ["All Essential features", "Advanced analytics", "Priority support", "API access"] },
                  ].map((plan, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/month</span></p>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full">Choose Plan</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="annually">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "Free", price: "$0", features: ["Basic brief templates", "Up to 3 briefs/month", "Export as PDF"] },
                    { name: "Essential", price: "$190", features: ["All Free features", "Unlimited briefs", "Custom templates", "Client collaboration"] },
                    { name: "Pro", price: "$490", features: ["All Essential features", "Advanced analytics", "Priority support", "API access"] },
                  ].map((plan, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/year</span></p>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full">Choose Plan</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start creating project briefs in minutes</h2>
            <p className="text-xl mb-8">Join QuickBrief today and streamline your client onboarding process.</p>
            <Button size="lg" variant="secondary">Get Early Access</Button>
            <p className="mt-4 text-sm">Not ready to sign up? <a href="#" className="underline">Subscribe for updates</a></p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">QuickBrief</h3>
              <p className="text-sm text-gray-400">Streamlining client onboarding and project scoping for freelancers and small agencies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#features" className="text-sm text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-sm text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#testimonials" className="text-sm text-gray-400 hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700 text-white placeholder-gray-400 border-gray-600"
                />
                <Button type="submit" className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} QuickBrief. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}