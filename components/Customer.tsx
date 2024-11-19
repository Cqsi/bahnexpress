'use client';

import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

export default function Customer() {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);
  const {t} = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.5 } // Start counting when 50% of the element is visible
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (observer && countUpRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row mx-auto my-8 px-4 md:px-10">
      {/* Left Column */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <p className="text-left text-4xl md:text-5xl font-bold text-black">
          {t('description')}
        </p>
      </div>
      {/* Right Column */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        {/* Top Row */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-semibold text-center text-black z-10 mt-6 md:mt-0">
              {t('reviews')}
            </p>
            <div className="flex items-center">
              <p className="text-3xl md:text-4xl font-semibold text-black mr-2">5,0</p>
              <img src="/stars.jpg" alt="Stars rating" className="w-32 md:w-64 h-auto" />
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-semibold text-center text-black">
              {t('drives')}
            </p>
            <p className="text-5xl md:text-6xl font-semibold text-center text-black mt-3" ref={countUpRef}>
              +
              {isVisible && (
                <CountUp
                  start={0}
                  end={450}
                  duration={2}
                  className="inline-block min-w-[3ch] text-primary"
                  aria-label="Number of customers"
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
