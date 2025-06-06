import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Dashboard from './modules/Dashboard';
import { useSyncChannel } from './sync/useSyncChannel';

const Inventory = lazy(() => import('./modules/Inventory'));
const Reports = lazy(() => import('./modules/Reports'));

function App() {
  useSyncChannel();

  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;