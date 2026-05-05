'use client';

import { useState } from 'react';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PersonalInformation() {
  const router = useRouter();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');

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
        <h1 className="text-[#475569] text-[20px] font-semibold absolute left-1/2 transform -translate-x-1/2">
          Personal Information
        </h1>
        <div className="w-6"></div> {/* Spacer */}
      </div>

      <div className="flex-1 px-6">
        <form 
          className="flex flex-col space-y-5" 
          onSubmit={(e) => {
            e.preventDefault();
            router.push('/profile/identity-verification');
          }}
        >
          
          {/* First Name */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="e.g John"
              className="w-full bg-[#FAFAFA] border-none rounded-xl px-4 py-3.5 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="e.g Smith"
              className="w-full bg-[#FAFAFA] border-none rounded-xl px-4 py-3.5 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@xyz.com"
              className="w-full bg-white border border-[#39B568] rounded-xl px-4 py-3.5 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#39B568] transition-shadow"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center w-full bg-[#FAFAFA] rounded-xl px-4 py-3.5 focus-within:ring-1 focus-within:ring-[#32A05F] transition-shadow">
              <div className="flex items-center pr-3 border-r border-[#E2E8F0] shrink-0">
                <div className="flex h-[16px] w-[24px] shrink-0 overflow-hidden rounded-[2px] mr-2">
                  <div className="w-1/3 h-full bg-[#008753]" />
                  <div className="w-1/3 h-full bg-white" />
                  <div className="w-1/3 h-full bg-[#008753]" />
                </div>
                <span className="text-[#64748B] text-[15px]">+234</span>
              </div>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0800 000 0000"
                className="flex-1 bg-transparent border-none pl-3 text-[15px] text-slate-800 placeholder:text-[#CBD5E1] focus:outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-[#FAFAFA] border-none rounded-xl px-4 py-3.5 text-[15px] text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[#64748B] text-[15px] font-medium" htmlFor="dob">
              Date of Birth
            </label>
            <div className="relative w-[60%]">
              <input
                id="dob"
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-[#FAFAFA] border-none rounded-xl px-4 py-3.5 pr-12 text-[15px] text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#32A05F] transition-shadow"
              />
              <CalendarDays className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#39B568]" />
            </div>
          </div>

          {/* Spacer */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-[#39B568] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-[#28844d] transition-colors shadow-sm active:scale-[0.98]"
            >
              Continue
            </button>
          </div>

        </form>
      </div>

    </main>
  );
}
