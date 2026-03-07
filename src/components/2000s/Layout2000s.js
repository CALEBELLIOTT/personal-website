import React from 'react';
import Sidebar2000s from './Sidebar2000s';
import Header2000s from './Header2000s';
import AboutMe2000s from './AboutMe2000s';
import Experience2000s from './Experience2000s';
import Projects2000s from './Projects2000s';
import Footer2000s from './Footer2000s';
import './styles2000s.css';

const Layout2000s = () => {
  return (
    <div className="y2k-page">
      <Header2000s />

      <div className="y2k-main-wrapper">
        <table className="y2k-layout-table" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td className="y2k-sidebar-cell">
                <Sidebar2000s />
              </td>
              <td className="y2k-content-cell">
                <div className="y2k-content">
                  <section id="y2k-about">
                    <AboutMe2000s />
                  </section>

                  <div className="y2k-divider">
                    <span>★</span>
                    <span>☆</span>
                    <span>★</span>
                    <span>☆</span>
                    <span>★</span>
                  </div>

                  <section id="y2k-experience">
                    <Experience2000s />
                  </section>

                  <div className="y2k-divider">
                    <span>★</span>
                    <span>☆</span>
                    <span>★</span>
                    <span>☆</span>
                    <span>★</span>
                  </div>

                  <section id="y2k-projects">
                    <Projects2000s />
                  </section>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer2000s />
    </div>
  );
};

export default Layout2000s;
