import React from 'react';

const Sponsor = () => {
    return (
         <section className="py-12 border-y border-white/5 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-[0.3em] mb-8">
            Main Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {["SPALDING", "GATORADE", "NIKE", "TISSOT"].map((brand) => (
              <h3
                key={brand}
                className="text-3xl md:text-5xl font-black text-white tracking-tighter cursor-pointer hover:text-amber-300 transition-colors"
              >
                {brand}
              </h3>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Sponsor;