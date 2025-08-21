'use client';

import React, { useState } from 'react';

import { servicePrefixMap } from '../../data';

const services = Object.keys(servicePrefixMap);

const Interactive = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [serviceName, setServiceName] = useState(services[serviceIndex]);
  const [jiggleClassAmazon, setJiggleClassAmazon] = useState(false);
  const [jiggleClassAWS, setJiggleClassAWS] = useState(false);
  const [renderNext, setRenderNext] = useState(false);

  const handleClick = (prefix: string, service: string) => {
    if (servicePrefixMap[service] === prefix) {
      setServiceName(`${prefix} ${service}`);
      setServiceIndex(serviceIndex + 1);
      setRenderNext(true);
    } else {
      if (prefix === 'Amazon') {
        setJiggleClassAmazon(true);
      } else {
        setJiggleClassAWS(true);
      }
    }
  };

  const handleNextClick = () => {
    setServiceName(services[serviceIndex]);
    setRenderNext(false);
    setJiggleClassAmazon(false);
    setJiggleClassAWS(false);
  };

  const shouldShowNext = renderNext && serviceIndex < services.length;

  return (
    <>
      <div className="text-6xl">{serviceName}</div>
      {!renderNext && (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={() => handleClick('AWS', services[serviceIndex])}
            className={`${
              jiggleClassAWS ? 'animate-spin' : ''
            } rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-5xl sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44`}
          >
            {'AWS'}
          </button>
          <button
            onClick={() => handleClick('Amazon', services[serviceIndex])}
            className={`${
              jiggleClassAmazon ? 'animate-spin' : ''
            } rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-5xl sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44`}
          >
            {'Amazon'}
          </button>
        </div>
      )}
      {shouldShowNext && (
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={() => handleNextClick()}
        >
          Next →
        </a>
      )}
    </>
  );
};

export default Interactive;
