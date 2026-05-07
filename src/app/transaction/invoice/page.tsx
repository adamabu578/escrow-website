'use client';

import { ArrowLeft, Share } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InvoicePage() {
  const router = useRouter();

  return (
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
        <button className="flex-1 bg-[#BCC4CD] text-white font-medium text-[16px] py-3.5 rounded-[8px] hover:bg-[#AAB4BF] active:scale-[0.98] transition-all">
          Edit
        </button>
        <button onClick={() => router.push('/transaction/invoice/review')} className="flex-1 bg-[#28A745] text-white font-medium text-[16px] py-3.5 rounded-[8px] hover:bg-[#218838] active:scale-[0.98] transition-all">
          Send Invoice
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
  );
}
