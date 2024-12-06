'use client';

import React, { useState } from 'react';

import { servicePrefixMap } from '../../data';

const services = Object.keys(servicePrefixMap);

const Interactive = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [serviceName, setServiceName] = useState(services[serviceIndex]);
  const [jiggleClass, setJiggleClass] = useState(false);

  const handleClick = (prefix: string, service: string) => {
    if (servicePrefixMap[service] === prefix) {
      setServiceName(`${prefix} ${service}`);
    } else {
      setJiggleClass(true);
    }
  };

  const handleNextClick = () => {
    setServiceIndex(serviceIndex + 1);
    setServiceName(services[serviceIndex]);
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
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        onClick={() => handleNextClick()}
      >
        nächste bitte →
      </a>
    </>
  );
};

export default Interactive;
