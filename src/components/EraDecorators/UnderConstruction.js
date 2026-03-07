import React from 'react';
import { useEra } from '../../context/EraContext';

const UnderConstruction = () => {
  const { eraConfig } = useEra();

  if (!eraConfig.features.underConstruction) {
    return null;
  }

  return (
    <div className="under-construction">
      <span className="under-construction-text">
        THIS SITE IS UNDER CONSTRUCTION!!!
      </span>
    </div>
  );
};

export default UnderConstruction;
