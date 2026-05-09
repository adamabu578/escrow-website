'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function RegisterCountry() {
  const router = useRouter();
  const [country, setCountry] = useState('');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (country) {
      router.push(`/register/details?country=${encodeURIComponent(country)}`);
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white px-6 py-8 selection:bg-emerald-100 font-sans">
      
      {/* Header */}
      <div className="relative flex items-center justify-center mb-12">
        <button 
          onClick={() => router.back()} 
          className="absolute left-0 p-2 -ml-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[#475569] text-[20px] font-semibold">
          Select Country
        </h1>
      </div>

      {/* Illustration */}
      <div className="flex justify-center mb-10 relative h-[160px] w-full">
        <Image 
          src="/globe.svg" 
          alt="Globe illustration" 
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="mb-10 text-center px-2">
        <p className="text-[#54657E] text-[18px] leading-[1.4] font-medium">
          Before we start, please tell us<br />your country of residence.
        </p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col flex-1" onSubmit={handleContinue}>
        
        {/* Country Dropdown */}
        <div className="relative mb-auto">
          <select 
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={`w-full bg-[#F8FAFC] border-none rounded-xl px-4 py-4 text-[16px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow ${country ? 'text-slate-800' : 'text-[#CBD5E1]'}`}
            required
          >
            <option value="" disabled>Select country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
            <option value="South Africa">South Africa</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8] pointer-events-none" />
        </div>

        {/* Continue Button */}
        <div className="pt-8">
          <button
            type="submit"
            disabled={!country}
            className="w-full bg-[#32A05F] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-green-700 transition-colors shadow-sm active:scale-[0.98] disabled:opacity-70 disabled:hover:bg-[#32A05F] disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>

      </form>

    </main>
  );
}
