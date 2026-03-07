import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { eras, defaultEra } from '../config/eras';

const EraContext = createContext();

const eraReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERA':
      return { ...state, currentEra: action.payload };
    default:
      return state;
  }
};

const getInitialEra = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('selectedEra');
    if (saved && eras[saved]) {
      return saved;
    }
  }
  return defaultEra;
};

export const EraProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eraReducer, {
    currentEra: getInitialEra(),
  });

  const setEra = (eraId) => {
    if (eras[eraId]) {
      dispatch({ type: 'SET_ERA', payload: eraId });
      localStorage.setItem('selectedEra', eraId);
    }
  };

  // Apply CSS variables and data attribute when era changes
  useEffect(() => {
    const eraConfig = eras[state.currentEra];
    const root = document.documentElement;

    // Set data attribute for CSS selectors
    root.setAttribute('data-era', state.currentEra);

    // Apply CSS variables
    Object.entries(eraConfig.cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, [state.currentEra]);

  const value = {
    currentEra: state.currentEra,
    eraConfig: eras[state.currentEra],
    setEra,
    allEras: eras,
  };

  return <EraContext.Provider value={value}>{children}</EraContext.Provider>;
};

export const useEra = () => {
  const context = useContext(EraContext);
  if (!context) {
    throw new Error('useEra must be used within an EraProvider');
  }
  return context;
};
