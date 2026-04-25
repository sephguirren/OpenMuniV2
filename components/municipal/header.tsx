'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // 1. Imported Image from Next.js
import { Menu, X, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import type { NavLink } from '@/lib/types'

const navLinks: NavLink[] = [
  { label: 'Home', href: '/home' },
  { label: 'About Us', href: '/about' },
  { label: 'Tourism', href: '/tourism' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Services', href: '/services' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            {/* 2. Replaced the "L" box with a circular Image placeholder */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shadow-sm flex-shrink-0">
              <Image 
                // Replace this URL with your actual logo path, e.g., src="/logo.png"
                src="/logo.png" 
                alt="Bangued Logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="hidden sm:block font-bold text-blue-900 text-sm tracking-wide">
              Municipality Of Bangued
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Desktop Login Button */}
            <Link href="/login" passHref>
              <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-1">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  <h2 className="font-bold text-lg text-blue-900">Menu</h2>
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-4 border-t border-slate-200">
                    <Button className="w-full flex items-center justify-center space-x-1 bg-blue-900 hover:bg-blue-800">
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}