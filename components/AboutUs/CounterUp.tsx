"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterUp = ({ endCountNum, duration, }) => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    onChange: (inView) => setCounterOn(inView),
  });

  return (
    <div ref={ref}>
      {counterOn && <CountUp end={endCountNum} duration={duration} />}+
    </div>
  );
};

export default CounterUp;
