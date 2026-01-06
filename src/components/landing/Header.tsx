'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-purple-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">NS</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              NatSouth
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-purple-700 transition-colors text-sm font-medium">
              Why NatSouth
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors text-sm font-medium">
              Cover Options
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors text-sm font-medium">
              Help & Support
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden sm:inline-flex bg-purple-700 text-white px-5 py-2.5 rounded-full font-medium hover:bg-purple-800 transition-colors text-sm"
            >
              Get a Quote
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-1">
              <Link
                href="#features"
                className="px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why NatSouth
              </Link>
              <Link
                href="#"
                className="px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cover Options
              </Link>
              <Link
                href="#"
                className="px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Help & Support
              </Link>
              <Link
                href="/quote"
                className="mx-4 mt-3 bg-purple-700 text-white px-5 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
