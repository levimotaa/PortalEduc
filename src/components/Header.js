import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white py-8 px-4 shadow-lg relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Home button */}
        <Link to="/">
          <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300">
            <FaHome className="text-white text-xl" />
          </button>
        </Link>

        {/* Main title and subtitle */}
        <div className="text-center flex-grow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Mini Cursos e Vídeos Gratuitos</h1>
          <p className="text-sm md:text-lg lg:text-xl opacity-90">
            Capacitação tecnológica e desenvolvimento profissional para professores
          </p>
        </div>

        {/* Dark Mode Toggle button for desktop */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300 ml-4 hidden md:block"
          aria-label="Alternar modo escuro"
        >
          {darkMode ? <FaSun className="text-yellow-300 text-xl" /> : <FaMoon className="text-white text-xl" />}
        </button>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300"
          aria-label="Abrir Menu"
        >
          <FaBars className="text-white text-xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 dark:bg-gray-800 p-4 rounded-lg mt-4">
          <div className="flex justify-between items-center">
            {/* Dark Mode Toggle inside the hamburger menu */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300"
              aria-label="Alternar modo escuro"
            >
              {darkMode ? <FaSun className="text-yellow-300 text-xl" /> : <FaMoon className="text-white text-xl" />}
            </button>
          </div>

          {/* Navigation Links inside Hamburger Menu */}
          <div className="mt-4 flex flex-col space-y-4">
            <Link 
              to="/cursos" 
              className="text-white text-xl hover:text-blue-300"
            >
              Mini Cursos
            </Link>
            <Link 
              to="/ia" 
              className="text-white text-xl hover:text-blue-300"
            >
              Inteligência Artificial
            </Link>
            <Link 
              to="/tecnologia" 
              className="text-white text-xl hover:text-blue-300"
            >
              Tecnologia e Inovação
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
