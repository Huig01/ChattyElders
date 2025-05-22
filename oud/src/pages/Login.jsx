import React from 'react';
import Foto from '../assets/images/Green-Abstract-Glass.jpg';
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden md:block">
          <img
            src={Foto}
            alt="Abstract Art"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="p-8 flex bg-yellow-100 flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">Welkom</h2>
          <p className="text-gray-600 mb-6">Log in en maak gebruik van ChattyElders!</p>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Voer hier uw email in..."
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Wachtwoord
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Voer hier uw wachtwoord in..."
              />
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Registreer
              </a>
              <a href="#" className="hover:underline">
                Wachtwoord vergeten?
              </a>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-yellow-400 hover:bg-black text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}