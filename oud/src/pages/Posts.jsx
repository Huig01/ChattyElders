import React from 'react';

export default function PostPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center py-10 px-4">
      <div className="bg-yellow-100 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl p-6 gap-6">
        {/* Profile Section */}
        <div className="md:col-span-1 bg-yellow-500 text-white p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="bg-gray-300 rounded-full h-16 w-16 mb-4 flex items-center justify-center">
              <span className="text-black text-xl font-bold">👤</span>
            </div>
            <p className="text-sm">Gebruikersnaam:</p>
            <p className="text-sm">Biografie:</p>
            <hr className="mt-2 border-white w-full" />
          </div>
        </div>

        {/* Posts Section */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-yellow-500 text-white p-4 rounded-lg shadow">
              POSTS
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}