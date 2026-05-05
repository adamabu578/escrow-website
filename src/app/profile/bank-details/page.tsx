'use client';

import { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BankDetails() {
  const router = useRouter();
  
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

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
          Bank Details
        </h1>
        <div className="w-6"></div> {/* Spacer */}
      </div>

      <div className="flex-1 px-6">
        <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Bank Name */}
          <div className="flex flex-col space-y-2 mt-2">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="bankName">
              Bank Name
            </label>
            <div className="relative">
              <select
                id="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className={`w-full bg-[#FAFAFA] border-none rounded-[12px] px-4 py-[18px] pr-10 text-[15px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#39B568] transition-shadow ${!bankName ? 'text-[#CBD5E1]' : 'text-slate-800'}`}
              >
                <option value="" disabled hidden>Select your bank</option>
                <option value="gtb" className="text-slate-800">Guaranty Trust Bank</option>
                <option value="access" className="text-slate-800">Access Bank</option>
                <option value="zenith" className="text-slate-800">Zenith Bank</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] pointer-events-none" />
            </div>
          </div>

          {/* Account Number */}
          <div className="flex flex-col space-y-2">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="accountNumber">
              Account Number
            </label>
            <input
              id="accountNumber"
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Input your account number"
              className="w-full bg-[#FAFAFA] border-none rounded-[12px] px-4 py-[18px] text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#39B568] transition-shadow"
            />
          </div>

          {/* Done Button */}
          <div className="pt-8">
            <button
              onClick={() => router.push('/profile')}
              className="w-full bg-[#39B568] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-[#28844d] transition-colors shadow-sm active:scale-[0.98]"
            >
              Done
            </button>
          </div>

        </form>
      </div>

    </main>
  );
}
