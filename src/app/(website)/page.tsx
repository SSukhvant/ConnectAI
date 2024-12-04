import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/theme-toggle"
import { MessageSquare, Zap, GitBranch, BarChart3, Facebook, MessageCircle, ShoppingBag } from 'lucide-react'
import banner from "@/assets/Ig-creators.png"

export default function SaasLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <MessageSquare className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">ConnectAI</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#faq">FAQ</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <ThemeToggle />
            </div>
            <nav className="flex items-center">
              <Button variant="ghost" className="mr-2">Log in</Button>
              <Button>Sign up</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionize Your Customer Engagement
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Simplify your sales, support, and marketing workflows with our AI-powered chatbot solutions
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
            <div className="relative inline-block">
              <Image
                src={banner}
                alt="AI Chatbot Interface"
                width={1200}
                className="rounded-lg"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-primary rounded-full p-4 shadow-lg">
                <MessageSquare className="h-8 w-8 text-primary-foreground" />
              </div> */}
            </div>
            {/* <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="AI Chatbot Interface 1"
                  fill
                  className="object-cover rounded-tl-3xl rounded-br-3xl shadow-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="AI Chatbot Interface 2"
                  fill
                  className="object-cover rounded-tr-3xl rounded-bl-3xl shadow-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="AI Chatbot Interface 3"
                  fill
                  className="object-cover rounded-tl-[100px] shadow-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="AI Chatbot Interface 4"
                  fill
                  className="object-cover rounded-br-[100px] shadow-lg"
                />
              </div>
            </div> */}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Features to Boost Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <MessageSquare className="h-12 w-12 mb-4 text-primary" />, title: "Automated Conversations", description: "Engage customers 24/7 with AI-powered chat" },
                { icon: <Zap className="h-12 w-12 mb-4 text-primary" />, title: "Omnichannel Support", description: "Seamless integration across all platforms" },
                { icon: <GitBranch className="h-12 w-12 mb-4 text-primary" />, title: "Custom Workflows", description: "Tailor chatbots to your specific needs" },
                { icon: <BarChart3 className="h-12 w-12 mb-4 text-primary" />, title: "Advanced Analytics", description: "Gain insights from customer interactions" },
              ].map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-center">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", role: "Marketing Director, TechCorp", image: "/placeholder.svg?height=100&width=100", quote: "This chatbot platform has transformed our customer service. We've seen a 40% increase in customer satisfaction!" },
                { name: "Alex Chen", role: "E-commerce Manager, FashionHub", image: "/placeholder.svg?height=100&width=100", quote: "The AI-powered conversations have boosted our sales by 25%. It's like having a 24/7 sales team!" },
                { name: "Emily Brown", role: "Support Lead, SaaS Solutions", image: "/placeholder.svg?height=100&width=100", quote: "Our support team is now able to focus on complex issues while the chatbot handles routine queries. It's a game-changer!" },
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-muted-foreground">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 md:py-32 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Seamless Integrations</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { icon: <MessageCircle className="h-8 w-8" />, name: "WhatsApp" },
                { icon: <Facebook className="h-8 w-8" />, name: "Facebook Messenger" },
                { icon: <ShoppingBag className="h-8 w-8" />, name: "Shopify" },
              ].map((integration, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-md mb-2">
                    {React.cloneElement(integration.icon, { className: "text-primary" })}
                  </div>
                  <span className="text-sm">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Free", price: "$0", features: ["1,000 monthly conversations", "Basic bot builder", "Standard support"] },
                { name: "Pro", price: "$49", features: ["10,000 monthly conversations", "Advanced bot builder", "Priority support", "Custom integrations"] },
                { name: "Enterprise", price: "Custom", features: ["Unlimited conversations", "Dedicated account manager", "24/7 premium support", "Custom AI model training"] },
              ].map((plan) => (
                <Card key={plan.name} className={`flex flex-col hover:shadow-lg transition-shadow duration-300 ${plan.name === 'Pro' ? 'border-primary border-2' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold">{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="text-muted-foreground">{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Start Trial"}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {[
                { question: "How does the AI chatbot work?", answer: "Our AI chatbot uses advanced natural language processing to understand and respond to customer queries in real-time. It learns from interactions to continuously improve its responses." },
                { question: "Can I customize the chatbot's appearance?", answer: "Yes, you can fully customize the chatbot's appearance to match your brand, including colors, fonts, and even add your logo." },
                { question: "Is it difficult to set up?", answer: "Not at all! Our user-friendly interface allows you to set up your chatbot in minutes, with no coding required. We also offer templates to get you started quickly." },
                { question: "What kind of support do you offer?", answer: "We offer 24/7 customer support for all our plans. Our Pro and Enterprise plans include priority support with faster response times." },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
              <form className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center">
            <p>&copy; 2024 ConnectAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

