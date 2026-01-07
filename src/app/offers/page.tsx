'use client';

import Link from 'next/link';
import { Header } from '@/components/landing/Header';

interface Offer {
  id: string;
  providerName: string;
  providerLogo: string;
  monthlyPrice: number;
  annualPrice: number;
  coverType: 'comprehensive' | 'third-party' | 'third-party-fire-theft';
  excess: number;
  rating: number;
  reviewCount: number;
  underwriter: string;
  claimsSettled: number;
  features: string[];
  badge?: string;
  isWellKnown: boolean;
}

const mockOffers: Offer[] = [
  {
    id: '1',
    providerName: 'CoverSure',
    providerLogo: 'CS',
    monthlyPrice: 32.50,
    annualPrice: 365,
    coverType: 'comprehensive',
    excess: 250,
    rating: 4.6,
    reviewCount: 2847,
    underwriter: 'Allianz Insurance',
    claimsSettled: 97,
    features: ['Courtesy car', '24/7 claims', 'Windscreen cover', 'Personal belongings'],
    badge: 'Best Value',
    isWellKnown: false,
  },
  {
    id: '2',
    providerName: 'QuickProtect',
    providerLogo: 'QP',
    monthlyPrice: 35.99,
    annualPrice: 399,
    coverType: 'comprehensive',
    excess: 300,
    rating: 4.4,
    reviewCount: 1523,
    underwriter: 'AXA UK',
    claimsSettled: 95,
    features: ['Courtesy car', '24/7 claims', 'Legal cover', 'Breakdown assist'],
    badge: 'Top Rated',
    isWellKnown: false,
  },
  {
    id: '3',
    providerName: 'Admiral',
    providerLogo: 'AD',
    monthlyPrice: 45.00,
    annualPrice: 499,
    coverType: 'comprehensive',
    excess: 350,
    rating: 4.3,
    reviewCount: 15420,
    underwriter: 'Admiral Insurance',
    claimsSettled: 94,
    features: ['Courtesy car', '24/7 claims', 'Multi-car discount'],
    isWellKnown: true,
  },
  {
    id: '4',
    providerName: 'SafeDrive UK',
    providerLogo: 'SD',
    monthlyPrice: 29.99,
    annualPrice: 329,
    coverType: 'comprehensive',
    excess: 275,
    rating: 4.7,
    reviewCount: 892,
    underwriter: 'Aviva Insurance',
    claimsSettled: 98,
    features: ['Courtesy car', '24/7 claims', 'Windscreen cover', 'Key cover', 'Motor legal'],
    badge: 'Lowest Price',
    isWellKnown: false,
  },
  {
    id: '5',
    providerName: 'Direct Line',
    providerLogo: 'DL',
    monthlyPrice: 52.00,
    annualPrice: 575,
    coverType: 'comprehensive',
    excess: 300,
    rating: 4.2,
    reviewCount: 28900,
    underwriter: 'Direct Line Insurance',
    claimsSettled: 93,
    features: ['Courtesy car', '24/7 claims', 'Guaranteed repairs'],
    isWellKnown: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

function TrustBadge({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  const savingsVsWellKnown = offer.isWellKnown ? 0 : Math.round(((499 - offer.annualPrice) / 499) * 100);

  return (
    <div className={`bg-white rounded-2xl border ${offer.badge ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-200'} overflow-hidden transition-shadow hover:shadow-lg`}>
      {/* Badge */}
      {offer.badge && (
        <div className="bg-purple-700 text-white text-xs font-semibold px-4 py-1.5 text-center">
          {offer.badge}
        </div>
      )}

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 font-bold text-lg">
              {offer.providerLogo}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{offer.providerName}</h3>
              <StarRating rating={offer.rating} />
              <p className="text-xs text-gray-500">{offer.reviewCount.toLocaleString()} reviews</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">£{offer.monthlyPrice.toFixed(2)}</p>
            <p className="text-xs text-gray-500">per month</p>
            <p className="text-sm text-gray-600">£{offer.annualPrice}/year</p>
          </div>
        </div>

        {/* Savings callout for lesser-known providers */}
        {!offer.isWellKnown && savingsVsWellKnown > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
            <p className="text-sm text-green-800 font-medium">
              Save {savingsVsWellKnown}% vs. major brands
            </p>
          </div>
        )}

        {/* Trust signals for lesser-known providers */}
        {!offer.isWellKnown && (
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
            <p className="text-xs font-semibold text-blue-900 mb-2 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Why you can trust this provider
            </p>
            <div className="space-y-1.5 text-xs text-blue-800">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Underwritten by <strong>{offer.underwriter}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>{offer.claimsSettled}%</strong> of claims settled</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>FCA regulated & FSCS protected</span>
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {offer.features.map((feature) => (
            <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>

        {/* Cover details */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="capitalize">{offer.coverType.replace(/-/g, ' ')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>£{offer.excess} excess</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Link
            href={`/offers/${offer.id}`}
            className="flex-1 bg-white text-purple-700 border border-purple-200 font-semibold py-3 rounded-full hover:bg-purple-50 transition-colors text-center"
          >
            View details
          </Link>
          <button className="flex-1 bg-purple-700 text-white font-semibold py-3 rounded-full hover:bg-purple-800 transition-colors">
            Select quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OffersPage() {
  const lessKnownOffers = mockOffers.filter((o) => !o.isWellKnown);
  const wellKnownOffers = mockOffers.filter((o) => o.isWellKnown);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-800 via-purple-900 to-gray-900 text-white py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Your personalised quotes
          </h1>
          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto">
            We&apos;ve found {mockOffers.length} quotes for your 2019 Ford Fiesta. All providers are FCA regulated and backed by trusted underwriters.
          </p>
        </div>
      </section>

      {/* Trust banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <TrustBadge
              label="All FCA regulated"
              icon={
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <TrustBadge
              label="FSCS protected"
              icon={
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
            <TrustBadge
              label="Verified reviews"
              icon={
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              }
            />
            <TrustBadge
              label="NatSouth curated"
              icon={
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Recommended / lesser-known section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recommended for you</h2>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                Best value
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              These providers offer great value with the same protection as major brands. All are backed by leading underwriters.
            </p>
            <div className="space-y-4">
              {lessKnownOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>

          {/* Well-known brands section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Major brands</h2>
            <p className="text-sm text-gray-600 mb-6">
              Household names you may already know.
            </p>
            <div className="space-y-4">
              {wellKnownOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help section */}
      <section className="bg-white border-t border-gray-200 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-purple-50 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Not sure which to choose?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  All our providers are carefully vetted by NatSouth. The cheaper options offer the same level of protection &ndash; they just have lower marketing costs.
                </p>
                <Link
                  href="#"
                  className="text-purple-700 hover:text-purple-800 font-medium text-sm inline-flex items-center gap-1"
                >
                  Learn how we select providers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} NatSouth Group plc. All rights reserved.</p>
            <p>NatSouth Insurance is authorised and regulated by the FCA.</p>
          </div>

          {/* Demo Navigation */}
          <div className="border-t border-gray-800 mt-6 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="text-gray-500">Demo pages:</span>
              <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">Home</a>
              <span className="text-gray-700">|</span>
              <a href="/quote" className="text-purple-400 hover:text-purple-300 transition-colors">Quote Flow</a>
              <span className="text-gray-700">|</span>
              <a href="/quote?prefill=natsouth" className="text-purple-400 hover:text-purple-300 transition-colors">Quote (Prefilled)</a>
              <span className="text-gray-700">|</span>
              <a href="/offers" className="text-purple-400 hover:text-purple-300 transition-colors">Offers Page</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
