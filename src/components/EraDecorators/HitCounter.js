import React, { useState, useEffect } from 'react';
import { useEra } from '../../context/EraContext';

const HitCounter = () => {
  const { eraConfig } = useEra();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get or initialize the fake hit counter
    const storedCount = localStorage.getItem('hitCounter');
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    } else {
      // Start with a random "believable" number from the 2000s
      const initialCount = Math.floor(Math.random() * 50000) + 10000;
      setCount(initialCount);
      localStorage.setItem('hitCounter', initialCount.toString());
    }

    // Increment on each visit
    const newCount = (parseInt(localStorage.getItem('hitCounter'), 10) || 0) + 1;
    setCount(newCount);
    localStorage.setItem('hitCounter', newCount.toString());
  }, []);

  if (!eraConfig.features.hitCounter) {
    return null;
  }

  // Format number with leading zeros like old hit counters
  const formattedCount = count.toString().padStart(7, '0');

  return (
    <div className="hit-counter-wrapper">
      <span className="hit-counter-label">You are visitor #</span>
      <span className="hit-counter">{formattedCount}</span>
    </div>
  );
};

export default HitCounter;
