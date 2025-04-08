import React from 'react'

export default function Blue() {
  return (
    <div className="absolute w-full h-full bg-blue-600 text-9xl flex justify-center items-center">
      <div
        className="px-40 py-20 
      drop-shadow-xl drop-shadow-emerald-300 
      bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-90% 
      text-blue-600 tracking-widest font-bold text-shadow-md text-shadow-sky-200
      "
      >
        <h1>Blue</h1>
      </div>
    </div>
  );
}
