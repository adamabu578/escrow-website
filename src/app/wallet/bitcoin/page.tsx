'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BitcoinWallet() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6">
        <button 
          onClick={() => router.back()}
          className="text-[#475569] focus:outline-none p-1 -ml-1" 
          aria-label="Back"
        >
          <ArrowLeft className="w-6 h-6" strokeWidth={2} />
        </button>
        <h1 className="text-[#475569] text-[20px] font-semibold absolute left-1/2 transform -translate-x-1/2">
          Bitcoin Wallet
        </h1>
        <div className="w-6"></div> {/* Spacer for centering */}
      </div>

      <div className="flex flex-col items-center mt-2 px-6">
        <span className="text-[#9CA3AF] text-[15px]">Available:</span>
        
        <div className="mt-4 border border-[#32A05F]/40 rounded-[12px] px-6 py-2.5 flex items-center justify-center gap-1.5 min-w-[130px]">
          <span className="text-[#9CA3AF] font-medium text-[20px]">BTC</span>
          <span className="text-[#0F172A] font-bold text-[22px]">0.00</span>
        </div>

        <div className="flex items-center gap-4 mt-10 w-full justify-center">
          <button className="bg-[#BCC4CE] text-white font-medium py-3 rounded-[8px] w-[140px] hover:bg-[#aab4c0] transition-colors">
            Send
          </button>
          <button className="bg-[#BCC4CE] text-white font-medium py-3 rounded-[8px] w-[140px] hover:bg-[#aab4c0] transition-colors">
            Receive
          </button>
        </div>
      </div>

      {/* Empty State Container */}
      <div className="flex-1 bg-[#FAFAFA] rounded-t-[32px] mt-12 w-full flex flex-col items-center pt-20 px-6 pb-12">
        {/* Custom SVG Illustration for Clipboards */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-6">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Furthest back clipboard */}
            <g transform="rotate(-25 50 80)">
              <rect x="25" y="40" width="70" height="96" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>
              <path d="M43 40 L77 40" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="60" cy="34" r="3" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5"/>
            </g>
            {/* Middle clipboard */}
            <g transform="rotate(-10 70 70) translate(20, 0)">
              <rect x="35" y="45" width="70" height="96" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>
              <path d="M53 45 L87 45" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="70" cy="39" r="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5"/>
            </g>
            {/* Front clipboard */}
            <g transform="translate(35, 15)">
              <rect x="40" y="40" width="72" height="96" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5"/>
              <path d="M58 40 L94 40" stroke="#CBD5E1" strokeWidth="10" strokeLinecap="round"/>
              <circle cx="76" cy="32" r="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5"/>
            </g>
          </svg>
        </div>
        
        <h2 className="text-[#475569] text-[18px] font-semibold mb-2">No Transaction yet</h2>
        <p className="text-[#9CA3AF] text-[14px] text-center max-w-[280px]">
          Any transaction you make will appear here.
        </p>
      </div>

    </main>
  );
}
