/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/extensions */
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';

// Component imports
// import Desktop from './components/Desktop/Desktop';

import MainLayout from './components/reusable/MainLayout';
import Landing from './components/Landing';
import AboutManager from './components/About/AboutManager';
import PortfolioManager from './components/Portfolio/PortfolioManager';
import ReachOut from './components/ReachOut/ReachOut';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <Suspense fallback="loading">
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={<Desktop />} /> */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Landing />} />
            <Route path="*" element={<Landing />} />
            <Route path="landing" element={<Landing />} />
            <Route path="about" element={<AboutManager />}>
              <Route path="introduction" element={<AboutManager />} />
              <Route path="skills" element={<AboutManager value="skills" />} />
            </Route>
            <Route path="portfolio" element={<PortfolioManager />} />
            <Route path="contact" element={<ReachOut />} />
          </Route>
        </Routes>
      </HashRouter>
    </Suspense>

  );
}

root.render(<App />);
