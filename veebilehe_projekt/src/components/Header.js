import React from 'react';
import logo from './logo.svg';

function Header() {
  return (
    <header 
    className="text-white py-4"
    style={{ backgroundColor: '#35353D' }}
    >
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
    <h1 className="flex items-center text-2xl font-bold mb-2 md:mb-0">
    <img src={logo} alt="Logo" className="h-12 w-12 mr-3" />
    <span style={{ color: '#e5e7eb' }}>CardNest</span>
    </h1>
    <div className="relative flex-1 mx-20">
        <input
            type="text"
            placeholder="Search flashcards..."
            className="w-full pl-14 pr-4 py-3 rounded-full shadow-lg text-black text-lg"
            style={{ backgroundColor: '#4D4D5D' }}
        />
        <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
            </svg>
        </span>
        <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
            title="Filter"
            onClick={() => alert('Filter toggled!')}
            >
            {/* Hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>
        </div>
        <nav className="flex space-x-8 mb-2 md:mb-0">
        <button
            className="hover:bg-blue-700 px-6 py-2 shadow font-bold rounded-full"
            style={{ backgroundColor: '#4D4D5D' }}
        > 
        Sign in
        </button>
        <button
            className="hover:bg-blue-700 px-6 py-2 shadow font-bold rounded-full"
            style={{ backgroundColor: '#E0144C' }}
        > 
        Login
        </button>
        </nav>
    </div>
    </header>
  );
}

export default Header;