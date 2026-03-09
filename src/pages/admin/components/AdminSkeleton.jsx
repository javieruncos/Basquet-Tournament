import React from "react";

const AdminSkeleton = () => {
  return (
    <div className="flex h-screen bg-[#050505] animate-pulse">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 p-6 space-y-6">
        <div className="h-8 bg-white/10 rounded w-2/3"></div>

        <div className="space-y-4">
          <div className="h-5 bg-white/5 rounded"></div>
          <div className="h-5 bg-white/5 rounded"></div>
          <div className="h-5 bg-white/5 rounded"></div>
          <div className="h-5 bg-white/5 rounded"></div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="h-8 bg-white/10 rounded w-40"></div>
          <div className="h-10 w-10 bg-white/10 rounded-full"></div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-6">
          <div className="h-28 bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="h-6 bg-white/10 rounded w-1/3"></div>
          </div>

          <div className="h-28 bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="h-6 bg-white/10 rounded w-1/3"></div>
          </div>

          <div className="h-28 bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="h-6 bg-white/10 rounded w-1/3"></div>
          </div>

          <div className="h-28 bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="h-6 bg-white/10 rounded w-1/3"></div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="h-6 bg-white/10 rounded w-1/4"></div>

          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
              <div className="h-6 bg-white/5 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSkeleton;
