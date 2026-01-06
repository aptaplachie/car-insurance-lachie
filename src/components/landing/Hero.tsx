import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-800 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-200">Trusted by 500,000+ customers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Car insurance you can{' '}
              <span className="text-purple-300">rely on</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-purple-100 max-w-xl mx-auto lg:mx-0">
              As your bank, we understand what matters to you. Get comprehensive car cover with the service you&apos;d expect from NatSouth.
            </p>

            {/* Quote Options */}
            <div className="mt-8 space-y-3 max-w-lg mx-auto lg:mx-0">
              <p className="text-sm text-purple-200 mb-4">How would you like to get started?</p>

              {/* Option 1: Use NatSouth details */}
              <Link
                href="/quote?prefill=natsouth"
                className="flex items-center gap-4 bg-white text-gray-900 p-4 rounded-xl hover:bg-purple-50 transition-colors shadow-lg group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900">Use my NatSouth details</p>
                  <p className="text-sm text-gray-500">Speed up your quote with your saved information</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Option 2: Start fresh */}
              <Link
                href="/quote"
                className="flex items-center gap-4 bg-white/10 text-white p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold">Start with a clean slate</p>
                  <p className="text-sm text-purple-200">Enter your details manually</p>
                </div>
                <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile-optimized stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold">4.8/5</div>
                <div className="text-purple-300 text-xs sm:text-sm">Trustpilot</div>
              </div>
              <div className="text-center lg:text-left border-l border-purple-600 pl-4">
                <div className="text-2xl sm:text-3xl font-bold">500k+</div>
                <div className="text-purple-300 text-xs sm:text-sm">Customers</div>
              </div>
              <div className="text-center lg:text-left border-l border-purple-600 pl-4">
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                <div className="text-purple-300 text-xs sm:text-sm">UK Support</div>
              </div>
            </div>
          </div>

          {/* Card - hidden on mobile, simplified on tablet */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="w-64 h-64 bg-purple-500/20 rounded-full absolute -top-8 -right-8 blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">Quick Quote</h3>
                  <p className="text-purple-200 mb-6 text-sm">Get covered in under 5 minutes</p>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Instant coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Manage in your banking app</span>
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
