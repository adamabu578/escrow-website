'use client';

import { useState } from 'react';
import { Menu, ChevronRight, CheckCircle2 } from 'lucide-react';
import { DrawerMenu } from '@/components/DrawerMenu';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-[#FAFAFA] font-sans">
      
      {/* Top Navigation */}
      <div className="relative flex items-center justify-center px-6 py-6 mb-4">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="absolute left-6 p-1 -ml-1 text-[#334155] focus:outline-none" aria-label="Menu">
          <Menu className="w-7 h-7" strokeWidth={2.5} />
        </button>
        <h1 className="text-[#475569] text-[20px] font-semibold">
          Profile
        </h1>
      </div>

      {/* PayTrust Logo */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0D8744]">
          <path d="M5 12H13C15.7614 12 18 9.76142 18 7C18 4.23858 15.7614 2 13 2H5V12ZM5 12V22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[22px] font-sans text-[#7E8C9A] tracking-tight">
          <span className="font-semibold text-[#4B5563]">Pay</span>Trust
        </span>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mb-10">
        {/* Avatar */}
        <div className="w-[100px] h-[100px] rounded-full bg-slate-200 mb-4 overflow-hidden shadow-sm relative border-4 border-[#FAFAFA] ring-1 ring-slate-100">
          <Image 
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=250&auto=format&fit=crop" 
            alt="Profile Avatar"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        {/* Name and Verified Badge */}
        <div className="flex items-center gap-1.5 mt-2">
          <h2 className="text-[#475569] text-[22px] font-medium">Sharon Gaji</h2>
          <CheckCircle2 className="w-[22px] h-[22px] text-white fill-[#39B568]" />
        </div>
      </div>

      {/* Menu List */}
      <div className="bg-white w-full flex-1">
        <div className="flex flex-col w-full">
          {/* List Items */}
          <Link href="/profile/personal-information" className="block w-full">
            <button className="flex items-center justify-between w-full px-6 py-[22px] border-b border-slate-100/60 hover:bg-slate-50 transition-colors active:bg-slate-100">
              <span className="text-[#64748B] text-[16px]">Personal Information</span>
              <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
            </button>
          </Link>
          
          <button className="flex items-center justify-between w-full px-6 py-[22px] border-b border-slate-100/60 hover:bg-slate-50 transition-colors active:bg-slate-100">
            <span className="text-[#64748B] text-[16px]">Government ID</span>
            <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
          </button>

          <Link href="/profile/bank-details" className="block w-full">
            <button className="flex items-center justify-between w-full px-6 py-[22px] border-b border-slate-100/60 hover:bg-slate-50 transition-colors active:bg-slate-100">
              <span className="text-[#64748B] text-[16px]">Bank Details</span>
              <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
            </button>
          </Link>
        </div>
      </div>

      <DrawerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
