'use client';

import { useState } from 'react';
import { ArrowLeft, Share, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvoiceReviewPage() {
  const router = useRouter();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  return (
    <>
      <main className="flex flex-col min-h-[100dvh] w-full bg-white px-6 py-8 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <button onClick={() => router.back()} className="text-[#64748B] focus:outline-none" aria-label="Go back">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[18px] font-semibold text-[#475569]">Invioce</h1>
        <button className="text-[#32A05F] focus:outline-none" aria-label="Share">
          <Share className="w-6 h-6" strokeWidth={2} />
        </button>
      </div>

      {/* Invoice Info */}
      <div className="flex flex-col gap-4 mb-10 text-[15px]">
        <div className="flex justify-between items-center">
          <span className="text-[#64748B]">Invoice</span>
          <span className="text-[#64748B]">#043645</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#64748B]">Bill to</span>
          <span className="text-[#64748B]">Lanre Balogun</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#CBD5E1]">Amount Due</span>
          <span className="text-[#CBD5E1]">N89,994.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#CBD5E1]">Payment Due</span>
          <span className="text-[#CBD5E1]">11 November 2021</span>
        </div>
      </div>

      {/* Items Section */}
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-3 mb-4">
          <span className="text-[#64748B] text-[13px] font-semibold tracking-wider">ITEMS</span>
          <span className="text-[#64748B] text-[13px] font-semibold tracking-wider">AMOUNT</span>
        </div>

        {/* Item */}
        <div className="flex flex-col border-b border-[#F1F5F9] pb-4 mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[#64748B] text-[15px]">Leather Shoe</span>
            <span className="text-[#64748B] text-[15px]">1000.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#CBD5E1] text-[14px]">1 X N1000,00</span>
            <span className="text-[#CBD5E1] text-[14px] underline underline-offset-2 decoration-[#CBD5E1]">Details</span>
          </div>
        </div>

        {/* Subtotals */}
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-[#64748B] text-[15px]">Subtotal</span>
            <span className="text-[#475569] text-[15px]">0.00</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-[#F1F5F9]">
            <span className="text-[#64748B] text-[15px]">Delivery Fee</span>
            <span className="text-[#475569] text-[15px]">0.00</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-[#475569] text-[16px] font-medium">Total</span>
          <span className="text-[#475569] text-[16px] font-medium">1000.00</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-auto">
        <button 
          onClick={() => setIsPaymentModalOpen(true)}
          className="flex-1 bg-[#32A05F] text-white font-medium text-[16px] py-3.5 rounded-[8px] hover:bg-[#28844D] active:scale-[0.98] transition-all"
        >
          Accept
        </button>
        <button 
          onClick={() => setIsRejectModalOpen(true)}
          className="flex-1 bg-[#FF001A] text-white font-medium text-[16px] py-3.5 rounded-[8px] hover:bg-[#D40015] active:scale-[0.98] transition-all"
        >
          Reject
        </button>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-[#F1F5F9] flex justify-center items-center gap-2">
        <span className="text-[#CBD5E1] text-[14px]">Powered by</span>
        <div className="flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#32A05F]">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8V8h4V6h2v2h4v4h-4v4h-2z" fill="currentColor"/>
          </svg>
          <span className="text-[#64748B] text-[15px] font-semibold">PayTrust</span>
        </div>
      </div>

    </main>

      {/* Payment Modal Bottom Sheet */}
      <AnimatePresence>
        {isPaymentModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaymentModalOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />
            
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-50 px-6 pt-3 pb-8 flex flex-col items-center"
            >
              {/* Handle */}
              <div className="w-16 h-1.5 bg-[#E2E8F0] rounded-full mb-8"></div>
              
              <h2 className="text-[#475569] text-[20px] font-medium mb-6">Pay with</h2>

              <div className="w-full flex flex-col gap-4">
                {/* Naira Wallet (Selected) */}
                <div className="relative w-full border border-[#32A05F] rounded-[12px] p-4 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-l-[32px] border-t-[#32A05F] border-l-transparent">
                    <Check className="absolute -top-[30px] -left-[14px] w-3.5 h-3.5 text-white" strokeWidth={4} />
                  </div>
                  <h3 className="text-[#475569] text-[18px] font-medium mb-1">Naira Wallet</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#CBD5E1] text-[15px]">Account balance</span>
                    <span className="text-[#32A05F] text-[15px] font-medium">NGN0.00</span>
                  </div>
                </div>

                {/* Bitcoin Wallet (Unselected) */}
                <div className="w-full bg-[#F8FAFC] rounded-[12px] p-4">
                  <h3 className="text-[#475569] text-[18px] font-medium mb-1">Bitcoin Wallet</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#CBD5E1] text-[15px]">Account balance</span>
                    <span className="text-[#32A05F] text-[15px] font-medium">BTC 0.00000</span>
                  </div>
                </div>
              </div>

              {/* Fund Account Link */}
              <div className="mt-6 mb-8 text-[15px]">
                <span className="text-[#334155]">Insufficient Funds? </span>
                <button className="text-[#32A05F] font-medium">Fund Account.</button>
              </div>

              {/* Pay Now Button */}
              <button className="w-full bg-[#32A05F] text-white font-medium text-[20px] py-4 rounded-[12px] hover:bg-[#28844D] active:scale-[0.98] transition-all">
                Pay Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Reject Modal Bottom Sheet */}
      <AnimatePresence>
        {isRejectModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRejectModalOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />
            
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-50 px-6 pt-3 pb-8 flex flex-col items-center"
            >
              {/* Handle */}
              <div className="w-16 h-1.5 bg-[#E2E8F0] rounded-full mb-8"></div>
              
              <h2 className="text-[#475569] text-[20px] font-medium mb-6">Reason for rejection</h2>

              <div className="w-full mb-8">
                <textarea 
                  rows={6}
                  placeholder="Write something ..."
                  className="w-full bg-[#FAFAFA] border-none rounded-[16px] p-5 text-[15px] text-[#334155] placeholder:text-[#CBD5E1] focus:ring-1 focus:ring-[#32A05F] outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button className="text-[#32A05F] font-medium text-[20px] mb-4 hover:text-[#28844D] active:scale-[0.98] transition-all">
                Submit
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
