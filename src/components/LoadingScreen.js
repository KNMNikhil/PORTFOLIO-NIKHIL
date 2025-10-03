import React from 'react';
import { Spinner } from './ui/spinner';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <Spinner size={60} />
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;