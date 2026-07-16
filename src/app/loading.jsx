"use client";

import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Fashion<span className="text-blue-600">Store</span>
      </h1>

      <ScaleLoader
        color="#2563eb"
        height={40}
        width={5}
        radius={2}
        margin={3}
      />

      <p className="mt-6 text-gray-500 text-lg text-center">
        Loading the latest fashion...
      </p>

      <p className="text-sm text-gray-400 mt-2">Please wait a moment.</p>
    </div>
  );
};

export default LoadingPage;
