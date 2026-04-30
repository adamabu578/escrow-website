'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ONBOARDING_STEPS = [
  {
    title: "Seller",
    description: "i want to make more sales, but i only do payment before delivery.",
  },
  {
    title: "Buyer",
    description: "i want to purchase securely, but i want to ensure delivery before payment.",
  },
  {
    title: "PayTrust",
    description: "With PayTrust, the risk factor of buying and selling to anyone and everyone is eliminated and the trust factor is created with the Escrow System.",
  }
];


export default function Onboarding() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // Splash screen timing
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      router.push('/welcome');
    }
  };

  const handleSkip = () => {
    router.push('/welcome');
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] w-full bg-[#F4F4F4] overflow-hidden selection:bg-emerald-100">
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          /* --- SPLASH SCREEN --- */
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(5px)' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAFA]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#FAFAFA] to-[#F2F2F2] opacity-80" />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-28 h-28 flex items-center justify-center drop-shadow-sm"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="text-[#0D8744] animate-[pulse_4s_ease-in-out_infinite]">
                <path d="M30 55 L65 55 C78 55 85 45 80 35 C75 25 65 25 55 25 L45 25 C35 25 35 35 35 35" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M48 65 L48 80 C48 85 43 85 40 82" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute bottom-12"
            >
              <h1 className="text-[26px] tracking-tight font-sans text-[#7E8C9A]">
                <span className="font-semibold text-[#4B5563]">Pay</span>Trust
              </h1>
            </motion.div>
          </motion.div>

        ) : (

          /* --- ONBOARDING FLOW --- */
          <motion.div
            key="onboarding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col flex-1"
          >
            
            {/* Top Illustration Section (Light Gray) */}
            <div className="flex-1 bg-[#F4F4F4] flex flex-col relative pt-12">
              
              {/* Skip Button */}
              <div className="absolute top-0 right-0 p-6 pt-12 z-20">
                 <button 
                   onClick={handleSkip}
                   className="text-[17px] font-medium text-[#32A05F] hover:text-green-700 transition-colors"
                 >
                   Skip
                 </button>
              </div>

              {/* Illustration Area */}
              <div className="flex-1 relative flex flex-col overflow-hidden border-b-4 border-[#64748B]">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentStep}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="flex-1 w-full relative"
                   >
                      {currentStep === 0 && (
                        <div className="absolute inset-0 max-w-[400px] mx-auto">
                          <Image 
                            src="/lady.png" 
                            alt="Seller Desk" 
                            fill 
                            className="object-contain object-bottom" 
                            priority
                            sizes="(max-width: 400px) 100vw, 400px"
                          />
                        </div>
                      )}
                      {currentStep === 1 && (
                        <div className="absolute inset-0 max-w-[400px] mx-auto">
                          <Image 
                            src="/buyer.png" 
                            alt="Buyer Thinking" 
                            fill 
                            className="object-contain object-bottom" 
                            priority
                            sizes="(max-width: 400px) 100vw, 400px"
                          />
                        </div>
                      )}
                      {currentStep === 2 && (
                        <div className="absolute inset-0 max-w-[400px] mx-auto">
                          <Image 
                            src="/onboard.png" 
                            alt="PayTrust Shield" 
                            fill 
                            className="object-contain object-bottom" 
                            priority
                            sizes="(max-width: 400px) 100vw, 400px"
                          />
                        </div>
                      )}
                   </motion.div>
                 </AnimatePresence>
              </div>

            </div>

            {/* Bottom Content Section (White) */}
            <div className="bg-white px-8 pt-10 pb-12 flex flex-col items-center justify-center min-h-[350px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center w-full max-w-sm mb-10"
                >
                  <h2 className="text-[28px] font-medium text-[#54657E] mb-4">
                    {ONBOARDING_STEPS[currentStep].title}
                  </h2>
                  <p className="text-[16px] text-[#9CA3AF] leading-[1.6] px-2 font-light">
                    {ONBOARDING_STEPS[currentStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-12">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="w-[120px] py-2 rounded-md border border-gray-400 text-gray-500 font-medium text-[16px] hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="w-[120px] py-2 rounded-md border border-[#32A05F] text-[#32A05F] font-medium text-[16px] hover:bg-green-50 transition-colors"
                >
                  {currentStep === ONBOARDING_STEPS.length - 1 ? "Start" : "Next"}
                </button>
              </div>

              {/* Dash Indicators */}
              <div className="flex items-center gap-3 mt-auto">
                {ONBOARDING_STEPS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className="focus:outline-none"
                    aria-label={`Go to step ${idx + 1}`}
                  >
                    <motion.div
                      animate={{ 
                        backgroundColor: currentStep === idx ? '#64748B' : '#CBD5E1',
                      }}
                      className="h-1 w-10 rounded-full transition-colors duration-300"
                    />
                  </button>
                ))}
              </div>
              
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
