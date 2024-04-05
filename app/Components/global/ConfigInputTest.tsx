import React from 'react';

export function ConfigInputTest() {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Configuration
      </h2>
      <label className={`m-0 max-w-[30ch] text-sm`}>Product ID</label>
      <input className={`m-0 max-w-[30ch] text-sm`}>
      </input>
    </div>
  );
}