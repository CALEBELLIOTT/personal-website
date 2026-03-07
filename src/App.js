import React from 'react';
import { EraProvider, useEra } from './context/EraContext';
import Timeline from './components/Timeline/Timeline';
import ModernLayout from './components/ModernLayout/ModernLayout';
import Layout2000s from './components/2000s/Layout2000s';
import Layout80s from './components/80s/Layout80s';

const AppContent = () => {
  const { currentEra } = useEra();

  const renderLayout = () => {
    switch (currentEra) {
      case '80s':
        return <Layout80s />;
      case '2000s':
        return <Layout2000s />;
      default:
        return <ModernLayout />;
    }
  };

  return (
    <div className='App' id='app'>
      <Timeline />
      {renderLayout()}
    </div>
  );
};

function App() {
  return (
    <EraProvider>
      <AppContent />
    </EraProvider>
  );
}

export default App;
