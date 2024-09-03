import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Section3_4 from './components/Section3_4';
import Section5 from './components/Section5';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/scenetoaudio" element={<LandingPage />} />
        <Route path="/scenetoaudio/section-3-4" element={<Section3_4 />} />
        <Route path="/scenetoaudio/section-5" element={<Section5 />} />
      </Routes>
    </Router>
  );
}

export default App;
