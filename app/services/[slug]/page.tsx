import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin, Clock, FileCheck, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

// We include a simplified mock data array here so it knows what to load based on the URL.
// In a real app, you would fetch this from a database.
const servicesData = [
  { slug: 'birth-certificate-registration', title: 'Birth Certificate Registration', category: 'Civil Registry', location: 'Ground Floor, Main Building', time: '1-2 Working Days' },
  { slug: 'business-permit-issuance', title: 'Business Permit Issuance', category: 'Business & Licensing', location: '2nd Floor, Licensing Office', time: '3 Working Days' },
  { slug: 'building-construction-permit', title: 'Building & Construction Permit', category: 'Business & Licensing', location: 'Engineering Department', time: '5-7 Working Days' },
  { slug: 'health-consultations', title: 'Health Consultations', category: 'Health & Welfare', location: 'Municipal Health Center', time: 'Walk-in' },
  { slug: 'senior-citizen-osca-id', title: 'Senior Citizen OSCA ID', category: 'Health & Welfare', location: 'MSWDO Office', time: '1 Working Day' },
  { slug: 'marriage-license', title: 'Marriage License', category: 'Civil Registry', location: 'Ground Floor, Main Building', time: '10 Days Posting Period' },
  { slug: 'agricultural-assistance', title: 'Agricultural Assistance', category: 'Agriculture', location: 'Municipal Agriculture Office', time: 'Varies per request' },
  { slug: 'police-clearance', title: 'Police Clearance', category: 'Public Safety', location: 'Bangued Police Station', time: '1 Working Day' },
]

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. Await params for Next.js 15
  const resolvedParams = await params;
  
  // 2. Find the matching service
  const service = servicesData.find((s) => s.slug === resolvedParams.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <Link 
          href="/services" 
          className="inline-flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Service Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="h-3 bg-gradient-to-r from-blue-900 to-emerald-700 w-full"></div>
          <div className="p-8 sm:p-10">
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded mb-4">
              {service.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {service.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-700" />
                <span className="font-medium">{service.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-emerald-700" />
                <span className="font-medium">Processing Time: {service.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements & Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Requirements */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileCheck className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Requirements</h2>
            </div>
            
            <ul className="space-y-4">
              {/* Dummy requirements for the mock view */}
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Duly accomplished application form</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Valid Government-issued ID (Original & Photocopy)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Barangay Clearance / Certificate of Residency</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Community Tax Certificate (Cedula) for the current year</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start space-x-3 text-amber-800 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>Please ensure all photocopies are clear and readable to avoid delays in processing your request.</p>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
              How to Apply
            </h2>
            
            <div className="space-y-6">
              {/* Dummy steps for the mock view */}
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold z-10 text-sm">1</div>
                  <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                </div>
                <div className="pb-6">
                  <h3 className="font-bold text-slate-900">Submit Requirements</h3>
                  <p className="text-sm text-slate-600 mt-1">Submit all necessary documents to the receiving window for initial evaluation.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold z-10 text-sm">2</div>
                  <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                </div>
                <div className="pb-6">
                  <h3 className="font-bold text-slate-900">Assessment & Payment</h3>
                  <p className="text-sm text-slate-600 mt-1">Wait for the assessment slip and proceed to the Municipal Treasurer's Office to pay the required fees.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold z-10 text-sm">3</div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Release</h3>
                  <p className="text-sm text-slate-600 mt-1">Present your official receipt to the releasing window to claim your requested document.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}