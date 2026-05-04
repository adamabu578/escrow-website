'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('email');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
        <Link href="/register" className="text-[#32A05F] font-medium text-[16px] hover:underline">
          Register
        </Link>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-[#475569] text-[28px] font-semibold leading-none">
          Log In
        </h1>
        <button 
          onClick={() => setLoginMethod(loginMethod === 'email' ? 'mobile' : 'email')}
          className="text-[14px] text-[#94A3B8] hover:opacity-80 transition-opacity pb-1"
        >
          or <span className="text-[#32A05F]">Log in with {loginMethod === 'email' ? 'mobile' : 'email'}?</span>
        </button>
      </div>

      {/* Form Section */}
      <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
        
        {/* Dynamic Field */}
        {loginMethod === 'email' ? (
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
        ) : (
          <div className="flex flex-col space-y-2">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="mobile">
              Mobile
            </label>
            <div className="flex items-center w-full bg-[#F8FAFC] rounded-xl px-4 py-4 focus-within:ring-1 focus-within:ring-[#32A05F] transition-shadow">
              <div className="flex items-center pr-3 border-r border-[#E2E8F0] shrink-0">
                <div className="flex h-[16px] w-[24px] shrink-0 overflow-hidden rounded-[2px] mr-2">
                  <div className="w-1/3 h-full bg-[#008753]" />
                  <div className="w-1/3 h-full bg-white" />
                  <div className="w-1/3 h-full bg-[#008753]" />
                </div>
                <span className="text-[#64748B] text-[15px]">+234</span>
              </div>
              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="0800 000 0000"
                className="flex-1 bg-transparent border-none pl-3 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none"
                required
              />
            </div>
          </div>
        )}

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

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center pt-2">
          <label className="flex items-center space-x-2 cursor-pointer group">
            <div className="relative flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-[#CBD5E1] group-hover:border-[#32A05F] transition-colors bg-white">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="peer sr-only"
              />
              <div className="absolute inset-0 rounded-[3px] bg-white opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#32A05F]">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <span className="text-[#64748B] text-[14px]">Remember me</span>
          </label>
          
          <Link href="/forgot-password" className="text-[#32A05F] text-[14px] hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-[#32A05F] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-green-700 transition-colors shadow-sm active:scale-[0.98]"
          >
            Login
          </button>
        </div>

      </form>
    </main>
  );
}
