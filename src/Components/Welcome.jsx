import React from 'react';

export default function Welcome() {
  return (
    <div className="grid grid-cols-1 gap-4 items-center w-screen content-center h-screen lg:max-w-full lg:p-60 text-white">
      <div className="text-center items-centertext-9xl p-10 text-gray-800 font-mono text-5xl">
        <div className="transition ease-in-out animate-pulse hover:-translate-y-2 hover:scale-110 duration-100">
          Hi
        </div>
        <br />
        <div className="transition-all ease-in-out animate-pulse duration-220 hover:-translate-y-2 hover:scale-110 underline decoration-stone-500 lg:text-8xl">
          I&apos;m Anderson
        </div>
      </div>
    </div>
  );
}
