'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function RegisterDetails() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralId, setReferralId] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreedToTerms) {
      router.push(`/register/verify?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-white px-6 py-8 selection:bg-emerald-100 font-sans">
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-10">
        <button 
          onClick={() => router.back()} 
          className="p-2 -ml-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <Link href="/login" className="text-[#32A05F] font-medium text-[16px] hover:underline">
          Log In
        </Link>
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-[#475569] text-[28px] font-semibold leading-none">
          Register
        </h1>
      </div>

      {/* Form Section */}
      <form className="flex flex-col space-y-6 flex-1" onSubmit={handleRegister}>
        
        {/* Email Field */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#64748B] text-[15px] font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter email"
            className="w-full bg-[#F8FAFC] border-none rounded-xl px-4 py-4 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#64748B] text-[15px] font-medium" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter your password"
              className="w-full bg-[#F8FAFC] border-none rounded-xl px-4 py-4 pr-12 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#32A05F] hover:text-green-700 transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#64748B] text-[15px] font-medium" htmlFor="confirmPassword">
            Confirm password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Please re-enter your password"
              className="w-full bg-[#F8FAFC] border-none rounded-xl px-4 py-4 pr-12 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#32A05F] hover:text-green-700 transition-colors p-1"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Referral ID Field */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#64748B] text-[15px] font-medium" htmlFor="referralId">
            Referral ID (Optional)
          </label>
          <input
            id="referralId"
            type="text"
            value={referralId}
            onChange={(e) => setReferralId(e.target.value)}
            placeholder="Please enter referal ID"
            className="w-full bg-[#F8FAFC] border-none rounded-xl px-4 py-4 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
          />
        </div>

        {/* Register Button and Terms */}
        <div className="pt-4 mt-auto">
          <button
            type="submit"
            className="w-full bg-[#32A05F] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-green-700 transition-colors shadow-sm active:scale-[0.98] mb-6"
          >
            Register
          </button>
          
          <label className="flex items-start justify-center space-x-3 cursor-pointer group px-2">
            <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded-[4px] border border-[#CBD5E1] group-hover:border-[#32A05F] transition-colors bg-white shrink-0">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="peer sr-only"
                required
              />
              <div className="absolute inset-0 rounded-[3px] bg-white opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#32A05F]">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <span className="text-[#9CA3AF] text-[14px] leading-[1.6]">
              i agree to the <Link href="/terms" className="text-[#64748B] hover:text-[#475569] transition-colors">terms of service</Link> and <Link href="/privacy" className="text-[#64748B] hover:text-[#475569] transition-colors">privacy policy.</Link>
            </span>
          </label>
        </div>

      </form>
    </main>
  );
}
