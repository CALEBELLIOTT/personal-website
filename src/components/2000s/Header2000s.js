import React, { useState, useEffect } from 'react';

const Header2000s = () => {
  const [hitCount, setHitCount] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Fake hit counter
    const stored = localStorage.getItem('y2kHitCounter');
    const count = stored ? parseInt(stored, 10) + 1 : Math.floor(Math.random() * 50000) + 12345;
    setHitCount(count);
    localStorage.setItem('y2kHitCounter', count.toString());

    // Set date in 2000s format
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    );
  }, []);

  return (
    <header className='y2k-header'>
      {/* Top banner with animated stars */}
      <div className='y2k-top-banner'>
        <span className='y2k-star'>★</span>
        <span className='y2k-star'>☆</span>
        <span className='y2k-star'>★</span>
        <span className='y2k-blink'>Welcome to my Homepage!</span>
        <span className='y2k-star'>★</span>
        <span className='y2k-star'>☆</span>
        <span className='y2k-star'>★</span>
      </div>

      {/* Marquee */}
      <div className='y2k-marquee-container'>
        <marquee scrollamount='4' className='y2k-marquee'>
          ★★★ Welcome to my AWESOME Homepage!!! ★★★ Kick back and stay a while!!
        </marquee>
      </div>

      {/* Main title */}
      <div className='y2k-title-container'>
        <h1 className='y2k-title'>
          <span className='y2k-tilde'>~*~</span>
          <span className='y2k-name'>Caleb Elliott</span>
          <span className='y2k-tilde'>~*~</span>
        </h1>
        <h2 className='y2k-subtitle'>Software Engineer</h2>
        <p className='y2k-tagline'>
          <span className='y2k-blink'>★</span> Building cool stuff for the World Wide Web!{' '}
          <span className='y2k-blink'>★</span>
        </p>
      </div>

      {/* Info bar */}
      <div className='y2k-info-bar'>
        <div className='y2k-date'>
          Today is: <span className='y2k-highlight'>{currentDate}</span>
        </div>
        <div className='y2k-counter'>
          You are visitor # <span className='y2k-counter-display'>{hitCount.toString().padStart(7, '0')}</span>
        </div>
      </div>

      {/* Under construction banner */}
      <div className='y2k-construction'>
        <div className='y2k-construction-stripe'></div>
        <span className='y2k-construction-text'>🚧 UNDER CONSTRUCTION 🚧</span>
        <div className='y2k-construction-stripe'></div>
      </div>
    </header>
  );
};

export default Header2000s;
