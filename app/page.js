'use client';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  async function handleRegister() {
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', password: 'test' }),
    });
    if (res.ok) setMessage('Registered!');
    else setMessage('Registration failed.');
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/assets/img/Logo.jpg" alt="Library Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full shadow-md" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Book Library</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="/pages/login.html" className="text-blue-600 hover:text-blue-800 font-medium transition">Login</a>
            <a href="/pages/register.html" className="text-green-600 hover:text-green-800 font-medium transition">Register</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 py-16">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
          <p className="text-lg text-[#5c4a3a] leading-relaxed">
            This is Book Library, Browse and Search for your favorite books.
          </p>
        </div>
        {/* Book Image */}
        <div className="flex justify-center w-full mt-8">
          <img 
            src="/assets/img/books.jpg" 
            alt="Library Bookshelf" 
            className="w-full max-w-xs rounded-xl shadow-xl object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a href="/pages/login.html" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Login Account
          </a>
          <a href="/pages/register.html" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
            Register
          </a>
        </div>
        <button onClick={handleRegister} className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition mt-4">
          Test Register
        </button>
        <div className="text-center text-red-600 mt-2">{message}</div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 mt-8">
        <div className="max-w-screen-xl mx-auto px-6 text-center text-sm text-gray-600">
          &copy; Book Library. All rights reserved.
        </div>
      </footer>
    </div>
  );
}