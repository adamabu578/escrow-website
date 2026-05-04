'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'sharon16@gmail.com';
  const [code, setCode] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification logic here
    if (code) {
      router.push('/register/success'); 
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white px-6 py-8 selection:bg-emerald-100 font-sans">
      
      {/* Top Navigation */}
      <div className="flex items-center mb-10">
        <button 
          onClick={() => router.back()} 
          className="p-2 -ml-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-[#475569] text-[26px] font-semibold leading-none">
          Verification
        </h1>
      </div>

      <div className="mb-4">
        <p className="text-[#9CA3AF] text-[15px]">
          Code will be sent to <span className="text-[#475569] font-medium">{email}</span>
        </p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col" onSubmit={handleVerify}>
        
        <div className="flex flex-col space-y-3 mb-8">
          <div className="flex items-center w-full bg-[#F8FAFC] rounded-xl px-4 py-4 focus-within:ring-1 focus-within:ring-[#32A05F] transition-shadow">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter verification code"
              className="flex-1 bg-transparent border-none text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none min-w-0"
              required
            />
            <button
              type="button"
              className="text-[#32A05F] text-[15px] font-medium hover:text-green-700 transition-colors ml-2 shrink-0"
            >
              Send Code
            </button>
          </div>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-[#32A05F] text-[14px] text-left hover:underline w-fit"
          >
            Wrong email address?
          </button>
        </div>

        {/* Verify Button */}
        <div>
          <button
            type="submit"
            disabled={!code}
            className="w-full bg-[#32A05F] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-green-700 transition-colors shadow-sm active:scale-[0.98] disabled:opacity-70 disabled:hover:bg-[#32A05F] disabled:cursor-not-allowed"
          >
            Verify
          </button>
        </div>

      </form>
    </main>
  );
}

export default function Verify() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <VerifyContent />
    </Suspense>
  );
}
