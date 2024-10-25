'use client'

import React, { useRef, useEffect, useState } from 'react';

interface InfoBoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function InfoBox({ title, description, icon }: InfoBoxProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-start p-8 aspect-square transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-sky-800 text-7xl mb-4">{icon}</div>
      <h2 className="text-6xl font-semibold text-sky-800 mb-4 text-center">
        {title}
      </h2>
      {/* Apply min-height to the description to ensure consistent height */}
      <p className="text-xl text-gray-700 font-bold leading-relaxed text-center mt-6 min-h-[64px]">
        {description}
      </p>
    </div>
  );
}
