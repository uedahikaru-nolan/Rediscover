import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="grid grid-cols-2 gap-1 w-12 h-12">
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="border-[1.5px] border-white"></div>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-3xl font-bold tracking-[0.2em] leading-none mb-1">REDISCOVER</span>
      <span className="text-sm tracking-[0.3em] leading-tight">HIDDEN<br/>STORIES</span>
    </div>
  </div>
);

export const LogoSmall = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="grid grid-cols-2 gap-1 w-10 h-10">
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="border-[1.5px] border-white"></div>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-xl font-bold tracking-[0.2em] leading-tight">HIDDEN<br/>STORIES</span>
    </div>
  </div>
);
