'use client';

import { useState } from 'react';

type Props = {};

const InputUsername = (props: Props) => {
  return (
    <form action="" className="flex flex-col md:flex-row gap-4 mt-6 lg:mt-2">
      <div className="bg-zinc-200 rounded-md flex flow-row items-center p-2 md:p-4">
        <label htmlFor="">linkify.io/</label>
        <input
          type="text"
          placeholder="username"
          className="bg-zinc-200 focus:outline-none"
        />
      </div>
      <button className="bg-secondary text-primary font-bold py-2 md:py-4 md:px-8 rounded-full hover:bg-[#ff569c] hover:text-[#503364] transition-all ease-in-out duration-300">
        Get Started
      </button>
    </form>
  );
};

export default InputUsername;
