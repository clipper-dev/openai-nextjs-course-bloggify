import React from "react";

export default function PostSkeleton() {
  return (
    <div className="w-full flex flex-col gap-4 shadow-sm p-4 rounded-xl bg-white animate-pulse">
      <div className="w-[60%] h-8 mb-4 bg-gray-200 rounded-md"></div>
      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
      <div className="w-[60%] h-4 bg-gray-200 rounded-md"></div>
    </div>
  );
}
