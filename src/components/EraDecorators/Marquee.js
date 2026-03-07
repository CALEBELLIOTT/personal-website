import React from 'react';
import { useEra } from '../../context/EraContext';

const Marquee = ({ children, speed = 5 }) => {
  const { eraConfig } = useEra();

  if (!eraConfig.features.marquee) {
    return null;
  }

  return (
    <div className="era-marquee">
      <marquee scrollamount={speed}>
        {children}
      </marquee>
    </div>
  );
};

export default Marquee;
