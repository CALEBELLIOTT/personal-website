import React from 'react';
import { useEra } from '../../context/EraContext';
import { eraOrder, eras } from '../../config/eras';
import './timeline.css';

const Timeline = () => {
  const { currentEra, setEra } = useEra();

  return (
    <div className="era-timeline">
      <div className="timeline-container">
        <span className="timeline-label">Travel through time:</span>
        <div className="timeline-track">
          {eraOrder.map((eraId) => {
            const era = eras[eraId];
            const isActive = currentEra === eraId;
            return (
              <button
                key={eraId}
                className={`timeline-era-btn ${isActive ? 'active' : ''}`}
                onClick={() => setEra(eraId)}
                title={era.description}
              >
                <span className="era-label">{era.label}</span>
                <span className="era-year">{era.year}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
