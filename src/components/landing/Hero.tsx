import Link from 'next/link';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Car Insurance That{' '}
              <span className="text-blue-200">Protects</span> What Matters
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-xl">
              Get comprehensive cover at competitive prices. Compare quotes in minutes
              and drive away with peace of mind.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  Get Your Quote
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold">4.8/5</div>
                <div className="text-blue-200 text-sm">Customer Rating</div>
              </div>
              <div className="h-12 w-px bg-blue-400" />
              <div>
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-blue-200 text-sm">Happy Drivers</div>
              </div>
              <div className="h-12 w-px bg-blue-400" />
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-blue-500/30 rounded-full absolute -top-10 -left-10 blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quick Quote</h3>
                  <p className="text-blue-200 mb-6">Get your quote in under 5 minutes</p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Instant coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
