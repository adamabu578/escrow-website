'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { DrawerMenu } from '@/components/DrawerMenu';

export default function Wallet() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white px-6 py-8 selection:bg-emerald-100 font-sans pb-16">
      
      {/* Top Navigation */}
      <div className="relative flex items-center justify-center mb-8">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="absolute left-0 p-1 -ml-1 text-[#334155] focus:outline-none" aria-label="Menu">
          <Menu className="w-7 h-7" strokeWidth={2.5} />
        </button>
        <h1 className="text-[#475569] text-[20px] font-semibold">
          Wallet
        </h1>
      </div>

      {/* Wallet Balances List */}
      <div className="flex flex-col space-y-3 mb-8">
        
        {/* Naira Wallet */}
        <Link href="/wallet/naira" className="block w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center bg-[#FAFAFA] rounded-[16px] p-4 cursor-pointer hover:bg-slate-50 transition-colors w-full"
          >
            <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center shrink-0 mr-4">
              <span className="text-white font-bold text-[18px]">₦</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#9CA3AF] text-[13px] mb-0.5">Naira Wallet</span>
              <span className="text-[#475569] text-[16px] font-semibold">NGN 0.00</span>
            </div>
          </motion.div>
        </Link>

        {/* Bitcoin Wallet */}
        <Link href="/wallet/bitcoin" className="block w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center bg-[#FAFAFA] rounded-[16px] p-4 cursor-pointer hover:bg-slate-50 transition-colors w-full"
          >
            <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center shrink-0 mr-4">
              <span className="text-white font-bold text-[18px]">₿</span>
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[#9CA3AF] text-[13px] mb-0.5">Bitcoin Wallet</span>
              <span className="text-[#475569] text-[16px] font-semibold">BTC 0.00000</span>
            </div>
            <div className="flex flex-col border-l border-slate-200 pl-4 ml-2">
              <span className="text-[#64748B] text-[12px] mb-0.5">BTC/USD</span>
              <span className="text-[#475569] text-[14px] font-medium">$61693.03</span>
            </div>
          </motion.div>
        </Link>

        {/* Escrow Wallet */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex items-center bg-[#FAFAFA] rounded-[16px] p-4 cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 mr-4 shadow-sm border border-slate-100">
            {/* Custom P icon for Escrow */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0D8744]">
              <path d="M5 12H13C15.7614 12 18 9.76142 18 7C18 4.23858 15.7614 2 13 2H5V12ZM5 12V22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#9CA3AF] text-[13px] mb-0.5">Escrow Wallet</span>
            <span className="text-[#475569] text-[16px] font-semibold">NGN 0.00</span>
          </div>
        </motion.div>

      </div>

      {/* Select Default Wallet Option */}
      <div>
        <h2 className="text-[#9CA3AF] text-[15px] mb-4 font-medium">
          Select default wallet payment option
        </h2>
        
        <div className="flex flex-col space-y-3">
          
          {/* Default Naira */}
          <Link href="/wallet/naira" className="block w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center bg-[#FAFAFA] rounded-[16px] p-4 cursor-pointer hover:bg-slate-50 transition-colors w-full"
            >
              <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center shrink-0 mr-4">
                <span className="text-white font-bold text-[18px]">₦</span>
              </div>
              <span className="text-[#475569] text-[15px] font-medium">Naira Wallet</span>
            </motion.div>
          </Link>

          {/* Default Bitcoin */}
          <Link href="/wallet/bitcoin" className="block w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center bg-[#FAFAFA] rounded-[16px] p-4 cursor-pointer hover:bg-slate-50 transition-colors w-full"
            >
              <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center shrink-0 mr-4">
                <span className="text-white font-bold text-[18px]">₿</span>
              </div>
              <span className="text-[#475569] text-[15px] font-medium">Bitcoin Wallet</span>
            </motion.div>
          </Link>

        </div>
      </div>

      <DrawerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
