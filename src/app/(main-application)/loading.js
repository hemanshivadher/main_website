import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[50vh] bg-gray-100">
      <div className="space-y-4 text-center">
        <p className="text-lg font-medium text-gray-700 animate-pulse">
          Loading, please wait...
        </p>
        {/* Fun Subtext */}
        <p className="text-sm text-gray-500">
          We’re getting things ready for you. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Loading;
