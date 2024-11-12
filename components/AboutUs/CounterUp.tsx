"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterUpProps {
  endCountNum: number;
  duration: number;
}

const CounterUp: React.FC<CounterUpProps> = ({ endCountNum, duration }) => {
  const [counterOn, setCounterOn] = useState(false);
  const [hasCounted, setHasCounted] = useState(false); // Track if count has already been triggered
  const { ref, inView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView && !hasCounted) {
        setCounterOn(true); // Start counting only if the counter hasn't run before
      }
    },
  });

  useEffect(() => {
    if (counterOn) {
      setHasCounted(true); // Mark as counted after the first time
    }
  }, [counterOn]);

  return (
    <div ref={ref}>
      {counterOn && <CountUp end={endCountNum} duration={duration} />}+
    </div>
  );
};

export default CounterUp;
