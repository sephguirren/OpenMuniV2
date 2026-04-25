import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Globe } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Mission */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To serve the people of Bangued with integrity, transparency, and a commitment to sustainable development and community prosperity.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'News', href: '/#news' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Business Permits',
                'Barangay Certificates',
                'Building Permits',
                'Health Services',
                'Licensing & Registration',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  Capitol, Rizal Street<br />
                  Bangued, Abra 2800
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="tel:+63745550123" className="text-sm text-slate-300 hover:text-white transition-colors">
                  +63 (0) 74-555-0123
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="mailto:info@bangued.gov" className="text-sm text-slate-300 hover:text-white transition-colors">
                  info@bangued.gov
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Border */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/AsensoBangued2019/"
              className="p-2 bg-slate-800 hover:bg-blue-900 rounded-lg transition-colors text-slate-300 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors text-slate-300 hover:text-white"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Links */}
          <div className="text-center sm:text-right text-xs text-slate-400 space-y-1">
            <p>© {currentYear} Municipality of Bangued. All rights reserved.</p>
            <div className="flex gap-4 justify-center sm:justify-end">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
