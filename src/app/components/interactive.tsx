'use client';

import React, { useState } from 'react';

import { servicePrefixMap } from '../../data';

const Interactive = () => {
  const [serviceName, setServiceName] = useState('Lambda');
  const [jiggleClass, setJiggleClass] = useState(false);

  const handleClick = (prefix: string, service: string) => {
    if (servicePrefixMap[service] === prefix) {
      setServiceName(`${prefix} ${service}`);
    } else {
      setJiggleClass(true);
    }
  };

  return (
    <>
      <div>{serviceName}</div>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          onClick={() => handleClick('AWS', serviceName)}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          {'AWS'}
        </button>
        <button
          onClick={() => handleClick('Amazon', serviceName)}
          className={`${
            jiggleClass ? 'animate-[wiggle_1s_ease-in-out_infinite]' : ''
          } rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44`}
        >
          {'Amazon'}
        </button>
      </div>
    </>
  );
};

export default Interactive;
