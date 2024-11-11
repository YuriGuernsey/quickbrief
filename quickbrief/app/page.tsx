import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gray-900">QuickBrief</span>
          </div>
          <div>
            <Link href="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Streamline Your Client Briefs
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Create professional project briefs in minutes with our guided questionnaire and instant generation system.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/auth?action=signup">
                  <Button size="lg">Get Started</Button>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/auth?action=signin">
                  <Button variant="outline" size="lg">Sign In</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Key Features
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: 'Guided Questionnaire', description: 'Step-by-step process to capture all essential project details.' },
                { title: 'Instant Brief Generation', description: 'Automatically create professional briefs from your responses.' },
                { title: 'Customizable Templates', description: 'Tailor your briefs to fit your specific project needs.' },
              ].map((feature) => (
                <div key={feature.title} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {[
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
              { name: 'Privacy Policy', href: '/privacy' },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-400 hover:text-gray-500">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 QuickBrief. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}