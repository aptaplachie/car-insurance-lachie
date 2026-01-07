'use client';

import { useParams } from 'next/navigation';
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
  avgClaimTime: string;
  yearsInBusiness: number;
  features: string[];
  includedCover: string[];
  optionalExtras: { name: string; price: number }[];
  badge?: string;
  isWellKnown: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  claimType?: string;
  verified: boolean;
}

const mockOffers: Record<string, Offer> = {
  '1': {
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
    avgClaimTime: '3 days',
    yearsInBusiness: 12,
    features: ['Courtesy car', '24/7 claims', 'Windscreen cover', 'Personal belongings'],
    includedCover: [
      'Unlimited third party cover',
      'Fire and theft protection',
      'Courtesy car while yours is repaired',
      'Windscreen repair and replacement',
      'Personal belongings up to £500',
      '24/7 UK-based claims team',
      'Vandalism and malicious damage',
      'New car replacement (first year)',
    ],
    optionalExtras: [
      { name: 'Breakdown cover', price: 4.99 },
      { name: 'Legal expenses', price: 2.49 },
      { name: 'Key cover', price: 1.99 },
      { name: 'Excess protection', price: 3.99 },
    ],
    badge: 'Best Value',
    isWellKnown: false,
  },
  '2': {
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
    avgClaimTime: '4 days',
    yearsInBusiness: 8,
    features: ['Courtesy car', '24/7 claims', 'Legal cover', 'Breakdown assist'],
    includedCover: [
      'Unlimited third party cover',
      'Fire and theft protection',
      'Courtesy car for up to 14 days',
      'Legal expenses cover included',
      'Breakdown assistance included',
      '24/7 claims helpline',
      'Vandalism protection',
    ],
    optionalExtras: [
      { name: 'Windscreen cover', price: 2.99 },
      { name: 'Key cover', price: 1.99 },
      { name: 'Excess protection', price: 4.49 },
    ],
    badge: 'Top Rated',
    isWellKnown: false,
  },
  '4': {
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
    avgClaimTime: '2 days',
    yearsInBusiness: 6,
    features: ['Courtesy car', '24/7 claims', 'Windscreen cover', 'Key cover', 'Motor legal'],
    includedCover: [
      'Unlimited third party cover',
      'Fire and theft protection',
      'Courtesy car guaranteed',
      'Windscreen cover with no excess',
      'Key cover up to £1,500',
      'Motor legal protection',
      '24/7 emergency helpline',
      'Uninsured driver protection',
    ],
    optionalExtras: [
      { name: 'Breakdown cover', price: 3.99 },
      { name: 'Excess protection', price: 2.99 },
      { name: 'Personal accident', price: 1.49 },
    ],
    badge: 'Lowest Price',
    isWellKnown: false,
  },
};

const testimonialsByProvider: Record<string, Testimonial[]> = {
  '1': [
    {
      id: 't1',
      name: 'Sarah M.',
      location: 'Manchester',
      rating: 5,
      date: '2 weeks ago',
      title: 'Brilliant service when I needed it most',
      content: 'I was nervous about going with a company I hadn\'t heard of before, but CoverSure has been fantastic. When someone hit my parked car, they handled everything. The claim was settled in just 3 days and I had a courtesy car the next morning. The Allianz backing gave me confidence, and now I\'d recommend them to anyone.',
      claimType: 'Accident claim',
      verified: true,
    },
    {
      id: 't2',
      name: 'James T.',
      location: 'Birmingham',
      rating: 5,
      date: '1 month ago',
      title: 'Half the price of my previous insurer',
      content: 'Switched from Admiral and saved over £200 a year with the same level of cover. I did my research and saw they\'re backed by Allianz which reassured me. Six months in and no complaints - the app is easy to use and when I had a question about my policy, someone answered within minutes.',
      verified: true,
    },
    {
      id: 't3',
      name: 'Emma L.',
      location: 'London',
      rating: 4,
      date: '3 weeks ago',
      title: 'Great value, genuinely helpful team',
      content: 'Had a minor bump in a car park and was dreading the claims process. Called CoverSure expecting the worst but they made it so simple. The person I spoke to was patient and explained everything clearly. Claim sorted, car fixed, no drama. Would definitely use again.',
      claimType: 'Minor accident',
      verified: true,
    },
    {
      id: 't4',
      name: 'David R.',
      location: 'Leeds',
      rating: 5,
      date: '2 months ago',
      title: 'Finally, insurance that doesn\'t feel like a rip-off',
      content: 'Been driving 20 years and this is the first time I\'ve felt like I\'m getting fair value. The price was significantly lower than the big names but the cover is comprehensive. Had to use the windscreen repair service - they came to my work and sorted it in an hour. No excess to pay either.',
      claimType: 'Windscreen repair',
      verified: true,
    },
    {
      id: 't5',
      name: 'Rachel K.',
      location: 'Bristol',
      rating: 5,
      date: '1 week ago',
      title: 'Exceeded my expectations',
      content: 'I\'ll be honest, I chose CoverSure purely on price. But the service has been exceptional. When my car was stolen, I was devastated. They were so supportive throughout the whole process, kept me updated daily, and the payout was fair and quick. Turned a horrible experience into something manageable.',
      claimType: 'Theft claim',
      verified: true,
    },
  ],
  '2': [
    {
      id: 't1',
      name: 'Michael B.',
      location: 'Sheffield',
      rating: 5,
      date: '1 week ago',
      title: 'Quick and painless claim',
      content: 'First time claiming on insurance and QuickProtect made it stress-free. The AXA backing meant I knew my claim would be handled properly. Courtesy car arrived same day and my car was back within a week. Really impressed.',
      claimType: 'Accident claim',
      verified: true,
    },
    {
      id: 't2',
      name: 'Lisa H.',
      location: 'Newcastle',
      rating: 4,
      date: '3 weeks ago',
      title: 'Good value with breakdown included',
      content: 'The fact that breakdown cover is included sold it for me. Used it twice already when my battery died - both times someone was there within 40 minutes. The legal cover also came in handy when I had a dispute with a garage.',
      verified: true,
    },
    {
      id: 't3',
      name: 'Chris P.',
      location: 'Edinburgh',
      rating: 5,
      date: '2 months ago',
      title: 'Saved £180 switching from Direct Line',
      content: 'Same cover, much better price. I was skeptical at first but they\'re backed by AXA which is one of the biggest insurers in the world. Eight months in and the one time I needed them (minor scrape), they were helpful and efficient.',
      claimType: 'Minor damage',
      verified: true,
    },
  ],
  '4': [
    {
      id: 't1',
      name: 'Tom W.',
      location: 'Cardiff',
      rating: 5,
      date: '3 days ago',
      title: 'Unbelievable claim experience',
      content: 'Someone reversed into me at Tesco. Called SafeDrive expecting a fight but they were amazing. Claim approved same day, courtesy car delivered to my house the next morning, and my car was fixed and returned in 48 hours. I\'ve never experienced anything like it. The Aviva backing clearly means something.',
      claimType: 'Accident claim',
      verified: true,
    },
    {
      id: 't2',
      name: 'Jenny S.',
      location: 'Oxford',
      rating: 5,
      date: '2 weeks ago',
      title: 'Key cover saved me £400',
      content: 'Lost my car keys on holiday (nightmare!). Remembered key cover was included with SafeDrive. One call and they arranged a locksmith and new keys. Would have cost me over £400 otherwise. The cover basically paid for itself.',
      claimType: 'Key replacement',
      verified: true,
    },
    {
      id: 't3',
      name: 'Andrew M.',
      location: 'Glasgow',
      rating: 5,
      date: '1 month ago',
      title: 'Best insurance decision I\'ve made',
      content: 'Cheapest quote AND the best service. I did loads of research before choosing - they\'re backed by Aviva and have a 98% claims settlement rate. Had a windscreen crack last month, fixed the next day with zero excess. Can\'t fault them.',
      claimType: 'Windscreen',
      verified: true,
    },
    {
      id: 't4',
      name: 'Sophie D.',
      location: 'Liverpool',
      rating: 4,
      date: '6 weeks ago',
      title: 'Simple, affordable, reliable',
      content: 'Young driver so insurance quotes were mental. SafeDrive was hundreds cheaper than everyone else. Mum was worried about going with someone she hadn\'t heard of, but when she saw Aviva underwrites them she was happy. Touch wood haven\'t needed to claim yet but the app and customer service have been great.',
      verified: true,
    },
  ],
};

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const starSize = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${starSize} ${star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <StarRating rating={testimonial.rating} />
            {testimonial.verified && (
              <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Verified
              </span>
            )}
          </div>
          <h4 className="font-semibold text-gray-900">{testimonial.title}</h4>
        </div>
        {testimonial.claimType && (
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full whitespace-nowrap">
            {testimonial.claimType}
          </span>
        )}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium text-xs">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-medium text-gray-900">{testimonial.name}</p>
            <p className="text-gray-500 text-xs">{testimonial.location}</p>
          </div>
        </div>
        <p className="text-gray-400 text-xs">{testimonial.date}</p>
      </div>
    </div>
  );
}

export default function OfferDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const offer = mockOffers[id];
  const testimonials = testimonialsByProvider[id] || [];

  if (!offer) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Offer not found</h1>
          <Link href="/offers" className="text-purple-700 hover:text-purple-800 font-medium">
            ← Back to offers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back link */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <Link href="/offers" className="text-purple-700 hover:text-purple-800 text-sm font-medium inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all quotes
          </Link>
        </div>
      </div>

      {/* Offer Header */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Provider info */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 font-bold text-xl flex-shrink-0">
                {offer.providerLogo}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{offer.providerName}</h1>
                  {offer.badge && (
                    <span className="bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {offer.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <StarRating rating={offer.rating} size="lg" />
                  <span className="text-sm text-gray-600">{offer.rating.toFixed(1)}</span>
                  <span className="text-sm text-gray-400">({offer.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Underwritten by <span className="font-medium text-gray-700">{offer.underwriter}</span>
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-xl p-4 sm:text-right">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">£{offer.monthlyPrice.toFixed(2)}</p>
              <p className="text-sm text-gray-500">per month</p>
              <p className="text-sm text-gray-600 mt-1">£{offer.annualPrice} annually</p>
            </div>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-700">{offer.claimsSettled}%</p>
              <p className="text-xs text-green-800">Claims settled</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-blue-700">{offer.avgClaimTime}</p>
              <p className="text-xs text-blue-800">Avg. claim time</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-purple-700">{offer.yearsInBusiness}</p>
              <p className="text-xs text-purple-800">Years in business</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-gray-700">£{offer.excess}</p>
              <p className="text-xs text-gray-600">Excess</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* What's included */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                What&apos;s included
              </h2>
              <ul className="space-y-3">
                {offer.includedCover.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional extras */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Optional extras
              </h2>
              <ul className="space-y-3">
                {offer.optionalExtras.map((extra) => (
                  <li key={extra.name} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{extra.name}</span>
                    <span className="text-gray-900 font-medium">+£{extra.price.toFixed(2)}/mo</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  Add extras during checkout or anytime through your account.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-purple-700 rounded-xl p-6 text-center">
            <h3 className="text-white font-semibold text-lg mb-2">Ready to get covered?</h3>
            <p className="text-purple-200 text-sm mb-4">
              You&apos;re protected by our 14-day money-back guarantee.
            </p>
            <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors">
              Choose this quote
            </button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-8 sm:py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              What customers say about {offer.providerName}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Real reviews from verified customers
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                <StarRating rating={offer.rating} size="lg" />
                <span className="font-semibold text-gray-900">{offer.rating.toFixed(1)}</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">{offer.reviewCount.toLocaleString()} reviews</span>
            </div>
          </div>

          {/* Rating breakdown */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Claims handling</p>
                <div className="flex items-center justify-center gap-1">
                  <StarRating rating={4.7} />
                  <span className="text-sm font-medium">4.7</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Value for money</p>
                <div className="flex items-center justify-center gap-1">
                  <StarRating rating={4.8} />
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Customer service</p>
                <div className="flex items-center justify-center gap-1">
                  <StarRating rating={4.5} />
                  <span className="text-sm font-medium">4.5</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Would recommend</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-lg font-bold text-green-600">94%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials grid */}
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-8">
            <button className="text-purple-700 hover:text-purple-800 font-medium text-sm inline-flex items-center gap-1">
              View all {offer.reviewCount.toLocaleString()} reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Trust footer */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              FCA Regulated
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              FSCS Protected
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Underwritten by {offer.underwriter}
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
