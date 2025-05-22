import React from 'react';

import logo from '../assets/images/oud.png';

export default function PostPage() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-purple-400 text-white py-4 px-6 border-t-4 border-blue-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Placeholder for logo */}
          <img
          className="h-10 w-auto"
          src={logo}
          />
            <span classname="text-sm">About us</span>
        </div>
        <div className="text-sm">Socials</div>
      </footer>
    </div>
  );
}
