/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/extensions */
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';

// Component imports
import MainLayout from './components/reusable/MainLayout';
import Landing from './components/Landing';
import AboutManager from './components/About/AboutManager';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <Suspense fallback="loading">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Landing />} />
            <Route path="*" element={<Landing />} />
            <Route path="about" element={<AboutManager />}>
              <Route path="introduction" element={<AboutManager />} />
              <Route path="skills" element={<AboutManager value="skills" />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </Suspense>

  );
}

root.render(<App />);
