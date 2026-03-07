import React from 'react';

const navItems = [
  { label: 'Home', icon: '🏠', href: '#y2k-about' },
  { label: 'About Me', icon: '👤', href: '#y2k-about' },
  { label: 'My Experience', icon: '💼', href: '#y2k-experience' },
  { label: 'Cool Projects', icon: '🖥️', href: '#y2k-projects' },
  { label: 'Email Me!', icon: '✉️', href: 'mailto:caleb123elliott@gmail.com' },
];

const Sidebar2000s = () => {
  const scrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  };

  return (
    <aside className='y2k-sidebar'>
      <div className='y2k-sidebar-title'>
        <span className='y2k-blink'>★</span> Navigation <span className='y2k-blink'>★</span>
      </div>

      <nav className='y2k-nav'>
        {navItems.map((item, index) => (
          <a key={index} href={item.href} className='y2k-nav-link' onClick={(e) => scrollTo(e, item.href)}>
            <span className='y2k-nav-icon'>{item.icon}</span>
            <span className='y2k-nav-label'>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Badges section */}
      <div className='y2k-badges'>
        <div className='y2k-sidebar-title'>
          <span className='y2k-blink'>★</span> Badges <span className='y2k-blink'>★</span>
        </div>

        <div className='y2k-badge'>
          <div className='y2k-badge-content y2k-netscape'>
            Netscape
            <br />
            NOW!
          </div>
        </div>

        <div className='y2k-badge'>
          <div className='y2k-badge-content y2k-html'>
            Made with
            <br />
            HTML
          </div>
        </div>

        <div className='y2k-badge'>
          <div className='y2k-badge-content y2k-webring'>
            Web Ring
            <br />
            Member
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className='y2k-cool-links'>
        <div className='y2k-sidebar-title'>
          <span className='y2k-blink'>★</span> Cool Links <span className='y2k-blink'>★</span>
        </div>

        <a href='https://github.com/CALEBELLIOTT' target='_blank' rel='noreferrer' className='y2k-external-link'>
          » My GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/caleb-elliott1/'
          target='_blank'
          rel='noreferrer'
          className='y2k-external-link'
        >
          » LinkedIn
        </a>
        <a href='https://www.instagram.com/caleb.ellio/' target='_blank' rel='noreferrer' className='y2k-external-link'>
          » Instagram
        </a>
      </div>

      {/* Update notice */}
      <div className='y2k-update-notice'>
        <span className='y2k-blink'>NEW!</span>
        <br />
        Last updated:
        <br />
        {new Date().toLocaleDateString()}
      </div>
    </aside>
  );
};

export default Sidebar2000s;
