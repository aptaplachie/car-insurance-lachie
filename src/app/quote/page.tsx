import Link from 'next/link';
import { QuoteForm } from '@/components/quote/QuoteForm';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-purple-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NS</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                NatSouth
              </span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-purple-700 transition-colors text-sm font-medium flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Quote Form Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Get your car insurance quote
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Complete the form below and we&apos;ll provide your personalised quote in minutes.
            </p>
          </div>

          <QuoteForm />
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Bank-level security</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No obligation quote</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Takes about 5 minutes</span>
          </div>
        </div>

        {/* FCA Notice */}
        <p className="mt-6 text-center text-xs text-gray-400">
          NatSouth Insurance is authorised and regulated by the Financial Conduct Authority.
        </p>
      </main>
    </div>
  );
}
