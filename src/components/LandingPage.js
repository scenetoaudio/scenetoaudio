/* IMPORTANT: All image and sound paths currently have the prefix "/scenetoaudio" because the app is hosted on GitHub Pages.
If you are hosting your app on a different platform, you may need to remove this prefix. */

import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <p>Supplementary Webpage For</p>
        <h1>Scene-to-Audio:<br /> Distant Scene Sonification for People with Visual Impairments</h1>
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
              <h3>Section 3: Scene-To-Audio Framework For Automatic Vista Scene Sonification</h3>
              <ul>
                <li><h4><a href="/scenetoaudio/#/section-3-4">Section 3.4: Evaluation Design</a></h4></li>
              </ul>
            </li>
            <li>
              <a href="/scenetoaudio/#/section-5"><h3 style={{ color: "#0066cc", marginBottom: "20px" }}>Section 5: User Evaluation (PVI)</h3></a>
            </li>
          </ul>
        </section>
        <hr />
      </section>
      <footer className="landing-footer">
        <p>Research Paper for CHI 2025</p>
      </footer>
    </div>
  );
};

export default LandingPage;
