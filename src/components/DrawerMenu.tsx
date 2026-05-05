'use client';

import { X, Home, Copy, Wallet, MessageCircle, MessageSquare, User, HelpCircle, Settings, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Copy, label: 'Transaction', href: '/transaction' },
    { icon: Wallet, label: 'Wallet', href: '/wallet' },
    { icon: MessageCircle, label: 'Chat', href: '/chat' },
    { icon: MessageSquare, label: 'Disputes', href: '/disputes' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: HelpCircle, label: 'Help center', href: '/help' },
    { icon: Settings, label: 'Setting', href: '/settings' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 flex flex-col shadow-2xl overflow-y-auto"
          >
            {/* Header / Logo */}
            <div className="p-6 pb-8">
              <button 
                onClick={onClose}
                className="mb-8 text-[#64748B] hover:text-[#334155] transition-colors"
              >
                <X className="w-8 h-8" strokeWidth={2} />
              </button>
              
              <div className="flex items-center gap-2">
                {/* PayTrust Custom Logo Icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0D8744]">
                  <path d="M5 12H13C15.7614 12 18 9.76142 18 7C18 4.23858 15.7614 2 13 2H5V12ZM5 12V22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[22px] font-sans text-[#7E8C9A] tracking-tight">
                  <span className="font-semibold text-[#4B5563]">Pay</span>Trust
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 pb-6 space-y-6">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#32A05F] flex items-center justify-center shrink-0 group-hover:bg-[#28844d] transition-colors shadow-sm">
                    <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-[#475569] text-[17px] font-medium group-hover:text-[#334155] transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="bg-[#FAFAFA] p-6 mt-auto">
              <Link 
                href="/login"
                onClick={onClose}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-slate-50 transition-colors">
                  <LogOut className="w-5 h-5 text-[#32A05F]" strokeWidth={2.5} />
                </div>
                <span className="text-[#32A05F] text-[18px] font-semibold group-hover:text-green-700 transition-colors">
                  Log Out
                </span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
