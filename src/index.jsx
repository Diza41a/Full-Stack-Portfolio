import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';

import MainLayout from './components/reusable/MainLayout';
import Landing from './components/Landing';
import Resume from './components/Resume';
import Skills from './components/Skills/Skills';
import PortfolioManager from './components/Portfolio/PortfolioManager';
import ReachOut from './components/ReachOut/ReachOut';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <Suspense fallback="loading">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Landing />} />
            <Route path="*" element={<Landing />} />
            <Route path="landing" element={<Landing />} />
            <Route path="resume" element={<Resume />} />
            <Route path="skills" element={<Skills />} />
            <Route path="portfolio" element={<PortfolioManager />} />
            <Route path="contact" element={<ReachOut />} />
          </Route>
        </Routes>
      </HashRouter>
    </Suspense>

  );
}

root.render(<App />);
