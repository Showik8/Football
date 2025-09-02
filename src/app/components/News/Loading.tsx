import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex items-center gap-3 w-auto my-2 pr-2 mb-3">
        <div className="w-[128px] h-[90px] bg-white/10 rounded-lg animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 bg-white/10 rounded w-3/4 animate-pulse" />
          <div className="h-3.5 bg-white/10 rounded w-5/6 animate-pulse" />
          <div className="h-3.5 bg-white/10 rounded w-2/3 animate-pulse" />
        </div>
      </div>
    </>
  );
};

export default Loading;
