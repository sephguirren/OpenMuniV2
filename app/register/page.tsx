'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, User, Mail, Lock, AlertCircle, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("Registration is currently closed for new users. Please contact the administrator.")
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-8">
      
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2074&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Dark gradient overlay so the card pops */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-800/90"></div>
      </div>

      {/* Floating Form Container */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Top color bar */}
        <div className="h-2 bg-green-600 w-full"></div>

        <div className="p-8 sm:p-10">
          
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-green-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500">Register to access your digital services.</p>
          </div>

          {/* Error Message Box */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3 text-red-700 text-sm animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="font-medium">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Hardcoded style ensures the button never turns invisible again */}
            <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold shadow-lg mt-6 hover:opacity-90 transition-all" style={{ backgroundColor: '#16a34a', color: 'white' }}>
              Register Account
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-green-700 hover:text-green-800 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}