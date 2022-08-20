/* eslint-disable import/extensions */
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';

// Component imports
const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <Suspense fallback="loading">
      <HashRouter>
        <Routes>
          <Route path="/" element={<div>Howdy There</div>} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
}

root.render(<App />);
