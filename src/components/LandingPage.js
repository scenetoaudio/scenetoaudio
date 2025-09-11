/* IMPORTANT: All image and sound paths currently have the prefix "/scenetoaudio" because the app is hosted on GitHub Pages.
If you are hosting your app on a different platform, you may need to remove this prefix. */

import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <p>Supplementary Webpage For</p>
        <h1>Beyond Descriptions:<br /> A Generative Scene2Audio Framework for Blind and Low-Vision Users to Experience Vista
Landscapes</h1>
        <hr />
      </header>
      <section className="landing-content">
        {/* Video Section */}
        <div className="video-container">
          <video width="100%" controls>
            <source src={`${process.env.PUBLIC_URL}/assets/common/teaser.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className='video-caption'>Demo Video: Scene-to-Audio</p>
        </div>
        <hr />
        {/* Index Section */}
        <section className="index-section">
          <h2>Index</h2>
          <ul className="index-list">
            <li>
              <h3>Section 3: Automatic Scene2Audio framework for Vista Space Sonification</h3>
              <ul>
                <li><h4><a href="/scenetoaudio/#/section-3-4">Section 3.4: Evaluation of the Scene2Audio Framework</a></h4></li>
              </ul>
            </li>
            <li>
              <a href="/scenetoaudio/#/section-4"><h3 style={{ color: "#0066cc", marginBottom: "20px" }}>Section 4: Using Scene2Audio Framework for Enhancing Scene Experience of BLV</h3></a>
            </li>
            <li>
              <a 
                href="https://docs.google.com/spreadsheets/d/11EFl-tRV5r21kQXpxFd7gwmI9UyZVaftbAQorsNyQIA/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <h3 style={{ color: "#0066cc", marginBottom: "20px" }}>Section 5: In-the-Wild Study</h3>
              </a>
            </li>
          </ul>
        </section>
        <hr />
      </section>
      <footer className="landing-footer">
        <p>Research Paper for CHI 2026</p>
      </footer>
    </div>
  );
};

export default LandingPage;
