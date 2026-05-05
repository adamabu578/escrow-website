'use client';

import { useState } from 'react';
import { ArrowLeft, Building2, Contact, BookUser } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function IdentityVerification() {
  const router = useRouter();
  const [selectedDoc, setSelectedDoc] = useState('');

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white font-sans pb-10">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6 mb-2">
        <button 
          onClick={() => router.back()}
          className="text-[#475569] focus:outline-none p-1 -ml-1" 
          aria-label="Back"
        >
          <ArrowLeft className="w-6 h-6" strokeWidth={2} />
        </button>
        <h1 className="text-[#475569] text-[20px] font-semibold absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Identity Verification
        </h1>
        <div className="w-6"></div> {/* Spacer */}
      </div>

      <div className="flex-1 px-6">
        <div className="mb-8">
          <h2 className="text-[#475569] text-[18px] font-medium mb-3">
            Use a valid government-issued document
          </h2>
          <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
            Only the following documents listed below will be accepted, all other documents will be rejected.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Government-Issued ID Card */}
          <button 
            onClick={() => setSelectedDoc('id_card')}
            className={`flex items-center bg-[#FAFAFA] rounded-[12px] p-4 w-full transition-colors ${selectedDoc === 'id_card' ? 'ring-1 ring-[#39B568] bg-green-50/50' : 'hover:bg-slate-50'}`}
          >
            <div className="w-10 h-10 rounded-full bg-[#CBD5E1] flex items-center justify-center shrink-0 mr-4">
              <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-[#475569] text-[16px] font-medium">
              Government-Issued ID Card
            </span>
          </button>

          {/* Driver's License */}
          <button 
            onClick={() => setSelectedDoc('drivers_license')}
            className={`flex items-center bg-[#FAFAFA] rounded-[12px] p-4 w-full transition-colors ${selectedDoc === 'drivers_license' ? 'ring-1 ring-[#39B568] bg-green-50/50' : 'hover:bg-slate-50'}`}
          >
            <div className="w-10 h-10 rounded-full bg-[#CBD5E1] flex items-center justify-center shrink-0 mr-4">
              <Contact className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-[#475569] text-[16px] font-medium">
              Driver&apos;s License
            </span>
          </button>

          {/* Passport */}
          <button 
            onClick={() => setSelectedDoc('passport')}
            className={`flex items-center bg-[#FAFAFA] rounded-[12px] p-4 w-full transition-colors ${selectedDoc === 'passport' ? 'ring-1 ring-[#39B568] bg-green-50/50' : 'hover:bg-slate-50'}`}
          >
            <div className="w-10 h-10 rounded-full bg-[#CBD5E1] flex items-center justify-center shrink-0 mr-4">
              <BookUser className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-[#475569] text-[16px] font-medium">
              Passport
            </span>
          </button>
        </div>

        {/* Spacer */}
        <div className="pt-12">
          <button
            onClick={() => router.push('/profile/identity-verification/upload')}
            className={`w-full text-white py-4 rounded-xl text-[17px] font-medium transition-colors shadow-sm active:scale-[0.98] ${selectedDoc ? 'bg-[#39B568] hover:bg-[#28844d]' : 'bg-[#9CA3AF] cursor-not-allowed'}`}
            disabled={!selectedDoc}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
