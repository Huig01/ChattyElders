import React from "react";

export default function FriendsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-green-100 to-white flex flex-col items-center py-10">
      <h1 className="text-2xl font-semibold mb-8">VRIENDEN</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 w-full max-w-5xl">
  {Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="bg-yellow-500 rounded-xl shadow-lg h-32 p-4 relative">
      <div className="absolute top-2 left-2 flex items-center space-x-2">
        <span className="text-black text-xl">👤</span>
        <span className="text-black font-semibold">Username</span>
      </div>
    </div>
  ))}
    </div>
    </div>
  );
}
