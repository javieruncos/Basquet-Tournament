import React from 'react';

const SkeletonDetalle = () => {
  return (
    <div className="p-10 px-3 lg:px-10 animate-pulse mt-10">
      {/* Header Info Skeleton */}
      <div className="py-5 w-full flex items-center gap-4">
        <div className="h-4 bg-white/10 rounded w-32"></div>
        <div className="h-4 bg-white/10 rounded w-20"></div>
        <div className="h-4 bg-white/10 rounded w-24"></div>
      </div>

      {/* Scoreboard Card Skeleton */}
      <div className="bg-[#171717] border border-white/10 rounded-md p-6 mb-10">
        <div className="flex items-center justify-between max-w-6xl mx-auto gap-4">
          {/* Local Team */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="h-20 w-20 lg:h-32 lg:w-32 bg-white/5 rounded-full"></div>
            <div className="h-6 bg-white/10 rounded w-24"></div>
          </div>

          {/* Score */}
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="flex items-center gap-6">
              <div className="h-16 lg:h-24 bg-white/10 rounded w-16 lg:w-24"></div>
              <div className="h-10 bg-white/5 rounded w-4"></div>
              <div className="h-16 lg:h-24 bg-white/10 rounded w-16 lg:w-24"></div>
            </div>
            <div className="h-4 bg-amber-300/20 rounded w-20 mt-4"></div>
          </div>

          {/* Visitor Team */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="h-20 w-20 lg:h-32 lg:w-32 bg-white/5 rounded-full"></div>
            <div className="h-6 bg-white/10 rounded w-24"></div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Starters Local */}
        <div className="bg-[#171717] p-6 rounded-md border border-white/10">
          <div className="h-4 bg-amber-300/20 rounded w-32 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-2">
                <div className="h-3 bg-white/5 rounded w-4"></div>
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-6">
          {/* Quarters Table */}
          <div className="bg-[#171717] p-6 rounded-md border border-white/10">
            <div className="h-4 bg-amber-300/20 rounded w-40 mx-auto mb-6"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-4 border-t border-white/5 pt-2">
                  <div className="h-4 bg-white/5 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Venue */}
          <div className="bg-[#171717] p-6 rounded-md border border-white/10 text-center">
            <div className="h-4 bg-amber-300/20 rounded w-32 mx-auto mb-2"></div>
            <div className="h-5 bg-white/10 rounded w-48 mx-auto"></div>
          </div>

          {/* Referees */}
          <div className="bg-[#171717] p-6 rounded-md border border-white/10 text-center">
            <div className="h-4 bg-amber-300/20 rounded w-24 mx-auto mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-white/5 rounded w-32 mx-auto"></div>
              <div className="h-4 bg-white/5 rounded w-32 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Starters Visitor */}
        <div className="bg-[#171717] p-6 rounded-md border border-white/10">
          <div className="h-4 bg-amber-300/20 rounded w-32 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-2">
                <div className="h-3 bg-white/5 rounded w-4"></div>
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetalle;