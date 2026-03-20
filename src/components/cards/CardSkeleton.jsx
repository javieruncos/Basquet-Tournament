import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 md:h-52 bg-white/10 w-full"></div>
      
      <div className="p-5 space-y-4">
        <div className="h-3 bg-white/10 rounded w-1/4"></div>
        
        <div className="space-y-2">
          <div className="h-6 bg-white/10 rounded w-full"></div>
          <div className="h-6 bg-white/10 rounded w-2/3"></div>
        </div>
        
        <div className="space-y-2 pt-2">
          <div className="h-3 bg-white/5 rounded w-full"></div>
          <div className="h-3 bg-white/5 rounded w-full"></div>
          <div className="h-3 bg-white/5 rounded w-4/5"></div>
        </div>

        <div className="pt-4">
          <div className="h-10 bg-amber-300/20 rounded-md w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
