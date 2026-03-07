import React from 'react';

const AboutMe2000s = () => {
  return (
    <div className='y2k-section'>
      <h2 className='y2k-section-title'>
        <span className='y2k-arrow'>»»</span> About Me <span className='y2k-arrow'>««</span>
      </h2>

      <div className='y2k-section-content'>
        <table className='y2k-about-table'>
          <tbody>
            <tr>
              <td className='y2k-avatar-cell'>
                <div className='y2k-avatar'>
                  <div className='y2k-avatar-placeholder'>
                    <span>👨‍💻</span>
                  </div>
                  <div className='y2k-avatar-caption'>That's me!</div>
                </div>
              </td>
              <td className='y2k-bio-cell'>
                <div className='y2k-bio'>
                  <p>
                    <span className='y2k-greeting'>HEY THERE!!!</span> My name is{' '}
                    <span className='y2k-highlight'>Caleb Elliott</span> and welcome to my corner of the World Wide
                    Web!!! <span className='y2k-blink'>:-)</span>
                  </p>

                  <p>
                    I'm a <span className='y2k-highlight'>Software Engineer</span> currently working at{' '}
                    <span className='y2k-highlight'>Talkiatry</span>, where I build awesome web applications!
                  </p>

                  <p>
                    Before that, I was writing code at Anchor Operating System. I LOVE making cool stuff for the
                    internet!!!
                  </p>

                  <p>
                    When I'm not coding, you can find me exploring new technologies and building side projects. Feel
                    free to check out my{' '}
                    <a href='#y2k-projects' className='y2k-link'>
                      Cool Projects
                    </a>{' '}
                    section!!!
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Fun facts box */}
        <div className='y2k-facts-box'>
          <div className='y2k-facts-title'>
            <span className='y2k-star-spin'>★</span> FUN FACTS ABOUT ME <span className='y2k-star-spin'>★</span>
          </div>
          <ul className='y2k-facts-list'>
            <li>
              <span className='y2k-bullet'>»</span> I write code for the WORLD WIDE WEB!
            </li>
            <li>
              <span className='y2k-bullet'>»</span> My favorite color is <span style={{ color: '#00FF00' }}>GREEN</span>
              !
            </li>
            <li>
              <span className='y2k-bullet'>»</span> I think JavaScript is COOL!
            </li>
            <li>
              <span className='y2k-bullet'>»</span> I drink way too much coffee ☕
            </li>
          </ul>
        </div>

        {/* Skills marquee */}
        <div className='y2k-skills-section'>
          <div className='y2k-skills-title'>MY AWESOME SKILLS:</div>
          <div className='y2k-skills-marquee'>
            <marquee scrollamount='3'>
              ★ JavaScript ★ React ★ Node.js ★ TypeScript ★ PostgreSQL ★ AWS ★ Nest.js ★ DynamoDB ★
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe2000s;
