'use client';

import { useSyncExternalStore, useCallback } from 'react';

const STORAGE_KEY = 'cybernexus-matrix-effect';

const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener('matrix-toggle', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('matrix-toggle', callback);
  };
};

const getSnapshot = () => {
  if (typeof window === 'undefined') return 'false';
  return localStorage.getItem(STORAGE_KEY) ?? 'false';
};

const getServerSnapshot = () => 'false';

export const useMatrix = () => {
  const storeValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const enabled = storeValue === 'true';

  const toggleMatrix = useCallback(() => {
    const next = !enabled;
    localStorage.setItem(STORAGE_KEY, String(next));
    window.dispatchEvent(new Event('matrix-toggle'));
  }, [enabled]);

  return {
    isEnabled: enabled,
    matrixEnabled: enabled,
    toggleMatrix,
    isMounted: true,
  };
};

export default useMatrix;