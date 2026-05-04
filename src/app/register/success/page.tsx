'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Success() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[100dvh] w-full bg-white px-6 py-8 selection:bg-emerald-100 font-sans">
      
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-sm text-center -mt-10">
        
        {/* Animated Checkmark Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-24 h-24 bg-[#32A05F] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_30px_rgb(50,160,95,0.2)]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          >
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#475569] text-[32px] font-semibold mb-4"
        >
          Success
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#9CA3AF] text-[18px] leading-[1.4] max-w-[280px]"
        >
          Your account has been verified<br />successfully
        </motion.p>

      </div>

      {/* Footer Link */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pb-12"
      >
        <Link 
          href="/dashboard" 
          className="text-[#32A05F] text-[22px] font-semibold hover:text-green-700 transition-colors"
        >
          Go to my Dashboard
        </Link>
      </motion.div>

    </main>
  );
}
