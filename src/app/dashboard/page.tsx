'use client';

import { useState } from 'react';
import { Menu, User, Bell, ChevronDown, PenLine, Clock, Store, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DrawerMenu } from '@/components/DrawerMenu';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-[#FAFAFA] px-6 py-8 selection:bg-emerald-100 font-sans pb-16">
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => setIsMenuOpen(true)} className="p-1 -ml-1 text-[#334155] focus:outline-none" aria-label="Menu">
          <Menu className="w-7 h-7" strokeWidth={2.5} />
        </button>
        <div className="flex items-center gap-4">
          <button className="text-[#32A05F] focus:outline-none" aria-label="User Profile">
            <User className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <button className="relative text-[#32A05F] focus:outline-none" aria-label="Notifications">
            <Bell className="w-6 h-6" strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white border-2 border-[#FAFAFA]">
              4
            </span>
          </button>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="mb-6">
        <h1 className="text-[22px] text-[#64748B]">
          Welcome, <span className="text-[#32A05F] font-semibold">Tolulope</span>
        </h1>
      </div>

      {/* Wallet Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white rounded-[24px] p-6 mb-8 shadow-sm overflow-hidden border border-slate-100/50"
      >
        {/* Abstract Background Shape */}
        <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 opacity-40 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#32A05F]">
            <path d="M50 0 C77.6 0 100 22.4 100 50 L100 100 L50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z" fill="currentColor" />
            <rect x="25" y="25" width="50" height="50" fill="white" rx="15" />
            <path d="M50 40 L50 100" stroke="white" strokeWidth="20" />
          </svg>
        </div>

        {/* Wallet Selector */}
        <Link href="/wallet" className="relative z-10 flex items-center justify-between mb-4 w-fit bg-[#F8FAFC] px-3 py-1.5 rounded-full border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
          <span className="text-[#64748B] text-[13px] font-medium mr-2">Escrow Wallet</span>
          <ChevronDown className="w-4 h-4 text-[#94A3B8]" />
        </Link>

        {/* Balance */}
        <div className="relative z-10">
          <p className="text-[#9CA3AF] text-[13px] mb-1 font-medium">Total balance</p>
          <div className="flex items-baseline">
            <span className="text-[#9CA3AF] text-[20px] mr-1 font-medium">₦</span>
            <span className="text-[#475569] text-[38px] font-bold leading-none tracking-tight">57,500</span>
            <span className="text-[#9CA3AF] text-[24px] font-semibold">.23</span>
          </div>
        </div>
      </motion.div>

      {/* Action Grid */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Create Escrow */}
        <Link href="/transaction" className="block outline-none">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-[20px] p-4 shadow-sm border border-slate-100/50 flex flex-col justify-between h-[110px] active:scale-[0.98] transition-transform text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center mb-auto shadow-sm shadow-green-100">
              <PenLine className="w-4 h-4 text-white" />
            </div>
            <span className="text-[#475569] text-[15px] font-medium leading-[1.2]">
              Create<br />Escrow
            </span>
          </motion.div>
        </Link>

        {/* Pending Escrow */}
        <motion.button 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-[20px] p-4 shadow-sm border border-slate-100/50 flex flex-col justify-between h-[110px] active:scale-[0.98] transition-transform text-left"
        >
          <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center mb-auto shadow-sm shadow-green-100">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#475569] text-[15px] font-medium leading-[1.2]">
            Pending<br />Escrow
          </span>
        </motion.button>

        {/* Create a Store */}
        <motion.button 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-[20px] p-4 shadow-sm border border-slate-100/50 flex flex-col justify-between h-[110px] active:scale-[0.98] transition-transform text-left"
        >
          <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center mb-auto shadow-sm shadow-green-100">
            <Store className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#475569] text-[15px] font-medium leading-[1.2]">
            Create a<br />Store
          </span>
        </motion.button>

        {/* Shop */}
        <motion.button 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-[20px] p-4 shadow-sm border border-slate-100/50 flex flex-col justify-between h-[110px] active:scale-[0.98] transition-transform text-left"
        >
          <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center mb-auto shadow-sm shadow-green-100">
            <ShoppingCart className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#475569] text-[15px] font-medium leading-[1.2]">
            Shop
          </span>
        </motion.button>

      </div>

      <DrawerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
