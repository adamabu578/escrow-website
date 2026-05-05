'use client';

import { ArrowLeft, Check, X, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DocumentUpload() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white font-sans pb-10">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6 mb-2">
        <button 
          onClick={() => router.back()}
          className="text-[#475569] focus:outline-none p-1 -ml-1" 
          aria-label="Back"
        >
          <ArrowLeft className="w-6 h-6" strokeWidth={2} />
        </button>
        <h1 className="text-[#475569] text-[20px] font-semibold absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Identity Verification
        </h1>
        <div className="w-6"></div> {/* Spacer */}
      </div>

      <div className="flex-1 px-6">
        <h2 className="text-[#64748B] text-[17px] font-medium mb-6">
          Upload Image of ID Card
        </h2>

        {/* Guidelines List */}
        <div className="flex flex-col space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <Check className="w-[18px] h-[18px] text-[#39B568] shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-[#64748B] text-[15px]">Government-issued</span>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-[18px] h-[18px] text-[#39B568] shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-[#64748B] text-[15px]">Original full-size, unedited documents</span>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-[18px] h-[18px] text-[#39B568] shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-[#64748B] text-[15px]">Place ID card on single coloured background</span>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-[18px] h-[18px] text-[#39B568] shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-[#64748B] text-[15px]">Readable,well-lit coloured image</span>
          </div>
          <div className="flex items-start gap-3">
            <X className="w-[18px] h-[18px] text-[#EF4444] shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-[#CBD5E1] text-[15px]">No black and white images</span>
          </div>
          <div className="flex items-start gap-3">
            <X className="w-[18px] h-[18px] text-[#EF4444] shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-[#CBD5E1] text-[15px]">No edited or expired documents</span>
          </div>
        </div>

        {/* File Size Instruction */}
        <p className="text-[#CBD5E1] text-[14px] leading-relaxed mb-8">
          File size must be between 10KB and 510KB in<br />jpg/jpeg/png format.
        </p>

        {/* Upload Buttons Row */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <button className="bg-[#FAFAFA] rounded-[16px] aspect-square flex flex-col items-center justify-center gap-3 border border-slate-50/50 hover:bg-slate-50 transition-colors">
            <Camera className="w-8 h-8 text-[#CBD5E1]" strokeWidth={1.5} />
            <span className="text-[#CBD5E1] text-[14px] font-medium">Upload front page</span>
          </button>
          
          <button className="bg-[#FAFAFA] rounded-[16px] aspect-square flex flex-col items-center justify-center gap-3 border border-slate-50/50 hover:bg-slate-50 transition-colors">
            <Camera className="w-8 h-8 text-[#CBD5E1]" strokeWidth={1.5} />
            <span className="text-[#CBD5E1] text-[14px] font-medium">Upload back image</span>
          </button>
        </div>

        {/* Continue Button */}
        <div className="pt-4">
          <button
            onClick={() => router.push('/profile/bank-details')}
            className="w-full bg-[#39B568] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-[#28844d] transition-colors shadow-sm active:scale-[0.98]"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
