'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, ChevronDown, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TransactionPage() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(0, q - 1));

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white px-6 py-8 font-sans pb-10">
      {/* Header */}
      <div className="flex items-center mb-8 relative">
        <button onClick={() => router.back()} className="text-[#64748B] focus:outline-none absolute left-0" aria-label="Go back">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[18px] font-semibold text-[#334155] mx-auto">Create Escrow</h1>
      </div>

      {/* Date Picker (Mocked) */}
      <div className="mb-6 flex">
        <div className="flex items-center bg-[#F8FAFC] rounded-[10px] px-4 py-2 text-[14px] text-[#64748B]">
          10/11/2021
          <Calendar className="w-4 h-4 ml-3 text-[#32A05F]" />
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">
        <h2 className="text-[15px] font-medium text-[#475569]">Reciever's Information:</h2>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#64748B]">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter full name" 
            className="w-full bg-[#F8FAFC] border-none rounded-[12px] px-4 py-3.5 text-[14px] text-[#334155] placeholder:text-[#CBD5E1] focus:ring-1 focus:ring-[#32A05F] outline-none"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#64748B]">Phone Number</label>
          <div className="flex items-center w-full bg-[#F8FAFC] rounded-[12px] px-4 py-3.5 focus-within:ring-1 focus-within:ring-[#32A05F]">
            <div className="flex items-center gap-2 border-r border-[#E2E8F0] pr-3 mr-3">
              <div className="w-5 h-3.5 bg-white flex overflow-hidden rounded-[2px]">
                <div className="w-1/3 h-full bg-[#008751]"></div>
                <div className="w-1/3 h-full bg-white"></div>
                <div className="w-1/3 h-full bg-[#008751]"></div>
              </div>
              <span className="text-[14px] text-[#475569]">+234</span>
            </div>
            <input 
              type="tel" 
              placeholder="0800 000 0000" 
              className="flex-1 bg-transparent border-none text-[14px] text-[#334155] placeholder:text-[#CBD5E1] outline-none"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#64748B]">Email Address</label>
          <input 
            type="email" 
            placeholder="Please enter email" 
            className="w-full bg-[#F8FAFC] border-none rounded-[12px] px-4 py-3.5 text-[14px] text-[#334155] placeholder:text-[#CBD5E1] focus:ring-1 focus:ring-[#32A05F] outline-none"
          />
        </div>

        {/* Product Category */}
        <div className="flex flex-col gap-2 mt-2">
          <label className="text-[14px] text-[#64748B]">Product Category</label>
          <div className="relative">
            <select className="w-full bg-[#F8FAFC] appearance-none border-none rounded-[12px] px-4 py-3.5 text-[14px] text-[#CBD5E1] focus:ring-1 focus:ring-[#32A05F] outline-none">
              <option value="" disabled selected>Select product category</option>
              <option value="electronics" className="text-[#334155]">Electronics</option>
              <option value="fashion" className="text-[#334155]">Fashion</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#32A05F] pointer-events-none" />
          </div>
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#64748B]">Product Description</label>
          <textarea 
            rows={3}
            className="w-full bg-[#F8FAFC] border-none rounded-[12px] px-4 py-3.5 text-[14px] text-[#334155] focus:ring-1 focus:ring-[#32A05F] outline-none resize-none"
          />
        </div>

        {/* Quantity and Price */}
        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#64748B]">Quantiy</label>
            <div className="flex items-center justify-between bg-[#F8FAFC] rounded-[12px] px-2 py-2">
              <button onClick={decrementQuantity} className="p-1.5 bg-[#E2E8F0] rounded-[6px] text-[#94A3B8]">
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-[14px] text-[#475569] font-medium">{quantity}</span>
              <button onClick={incrementQuantity} className="p-1.5 bg-[#94A3B8] rounded-[6px] text-white">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#64748B]">Price</label>
            <div className="flex h-full items-stretch bg-[#F8FAFC] rounded-[12px] overflow-hidden focus-within:ring-1 focus-within:ring-[#32A05F]">
              <input 
                type="text" 
                className="flex-1 bg-transparent border-none px-4 text-[14px] text-[#334155] outline-none"
              />
              <div className="bg-[#CBD5E1] text-white font-medium px-5 flex items-center justify-center">
                N
              </div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="flex flex-col gap-2 mt-2">
          <label className="text-[14px] text-[#64748B]">Photo {'{PNG, JPG, JPE (Optional)}'}</label>
          <div className="w-full bg-[#F8FAFC] rounded-[12px] p-2">
            <button className="bg-[#CBD5E1] text-white text-[13px] px-6 py-2.5 rounded-[8px] font-medium">
              Choose file
            </button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#32A05F] my-2"></div>

        <div className="flex justify-between items-center text-[14px] font-medium text-[#475569]">
          <button className="text-[#64748B]">Add item</button>
          <button className="text-[#64748B]">Add discount</button>
        </div>

        {/* Mode of Payment */}
        <div className="flex flex-col gap-2 mt-2">
          <label className="text-[14px] text-[#64748B]">Mode of Payment</label>
          <div className="relative">
            <select className="w-full bg-[#F8FAFC] appearance-none border-none rounded-[12px] px-4 py-3.5 text-[14px] text-[#CBD5E1] focus:ring-1 focus:ring-[#32A05F] outline-none">
              <option value="" disabled selected>Select mode of payment</option>
              <option value="bank" className="text-[#334155]">Bank Transfer</option>
              <option value="card" className="text-[#334155]">Credit Card</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#32A05F] pointer-events-none" />
          </div>
        </div>

        {/* Payment Details */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#64748B]">Payment Details</label>
          <textarea 
            rows={3}
            className="w-full bg-[#F8FAFC] border-none rounded-[12px] px-4 py-3.5 text-[14px] text-[#334155] focus:ring-1 focus:ring-[#32A05F] outline-none resize-none"
          />
        </div>

        {/* Delivery Date */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#64748B]">Delivery Date</label>
          <input 
            type="text" 
            className="w-full bg-[#F8FAFC] border-none rounded-[12px] px-4 py-3.5 text-[14px] text-[#334155] focus:ring-1 focus:ring-[#32A05F] outline-none"
          />
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-3 mt-4 text-[14px]">
          <div className="flex justify-between items-center">
            <span className="text-[#64748B] font-medium">Sub total</span>
            <span className="text-[#94A3B8]">0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748B] font-medium">Delivery fee</span>
            <span className="text-[#94A3B8]">0.00</span>
          </div>
          
          <div className="w-full h-[1px] bg-[#F1F5F9] my-1"></div>
          
          <div className="flex justify-between items-center">
            <span className="text-[#475569] font-semibold">Total</span>
            <span className="text-[#94A3B8]">0.00</span>
          </div>
        </div>

        {/* Submit */}
        <button 
          onClick={() => router.push('/transaction/invoice')}
          className="w-full bg-[#32A05F] text-white font-medium text-[16px] py-4 rounded-[8px] mt-6 hover:bg-[#28844D] active:scale-[0.98] transition-all"
        >
          Submit
        </button>

      </div>
    </main>
  );
}
