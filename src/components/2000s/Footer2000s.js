import React from 'react';

const Footer2000s = () => {
  return (
    <footer className='y2k-footer'>
      {/* Webring navigation */}
      <div className='y2k-webring'>
        <span className='y2k-webring-arrow'>◄◄</span>
        <span className='y2k-webring-text'>
          <span className='y2k-blink'>★</span> Cool Developers WebRing <span className='y2k-blink'>★</span>
        </span>
        <span className='y2k-webring-arrow'>►►</span>
      </div>

      {/* Best viewed message */}
      <div className='y2k-best-viewed'>
        <p>
          This site is best viewed in <span className='y2k-highlight'>Netscape Navigator 4.0</span> or{' '}
          <span className='y2k-highlight'>Internet Explorer 5.0</span> at <span className='y2k-highlight'>800x600</span>{' '}
          resolution
        </p>
      </div>

      {/* Award badges */}
      <div className='y2k-awards'>
        <div className='y2k-award-badge'>
          <span>🏆</span>
          <span>
            Cool Site
            <br />
            Award
          </span>
        </div>
        <div className='y2k-award-badge'>
          <span>⭐</span>
          <span>
            5 Star
            <br />
            Site!
          </span>
        </div>
        <div className='y2k-award-badge'>
          <span>🎖️</span>
          <span>
            Web
            <br />
            Excellence
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className='y2k-copyright'>
        <p>
          © {new Date().getFullYear()} Caleb Elliott
          <br />
          <span className='y2k-small'>All Rights Reserved</span>
        </p>
        <p className='y2k-disclaimer'>
          No part of this website may be reproduced without permission.
          <br />
          This is my personal homepage. All opinions are my own!!!
        </p>
      </div>

      {/* Email link */}
      <div className='y2k-email-footer'>
        <a href='mailto:caleb123elliott@gmail.com' className='y2k-email-link'>
          <span>✉️</span> EMAIL ME!!! <span>✉️</span>
        </a>
      </div>

      {/* Counter and date */}
      <div className='y2k-footer-info'>
        <marquee scrollamount='2' className='y2k-footer-marquee'>
          ★ Thanks for visiting!!! ★ Come back soon!!! ★ You're awesome!!! ★ Have a great day!!! ★
        </marquee>
      </div>
    </footer>
  );
};

export default Footer2000s;
