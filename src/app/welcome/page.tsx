'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white overflow-hidden selection:bg-emerald-100">
      
      {/* Top Section with Image and Overlay */}
      <div className="flex-1 relative flex flex-col justify-end pb-12 px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/welcome-bg.png"
            alt="Welcome Background"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* PayTrust Logo */}
          <div className="w-16 h-16 mb-6 text-white drop-shadow-md">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="text-white">
              <path d="M30 55 L65 55 C78 55 85 45 80 35 C75 25 65 25 55 25 L45 25 C35 25 35 35 35 35" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48 65 L48 80 C48 85 43 85 40 82" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>


        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white pt-10 pb-12 px-8 flex flex-col items-center">
        <Link 
          href="/register" 
          className="w-full max-w-sm py-4 rounded-lg bg-[#32A05F] text-white text-center font-medium text-[17px] hover:bg-green-700 transition-colors shadow-sm mb-6"
        >
          Get Started
        </Link>
        
        <p className="text-[#64748B] text-[15px]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#32A05F] font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>

    </main>
  );
}
