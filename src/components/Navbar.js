import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md mb-4 hidden md:block">
      <div className="container mx-auto px-4">
        {/* Navbar Desktop (visível apenas em telas médias e grandes) */}
        <div className="flex justify-center space-x-6">
          <NavLink 
            to="/cursos" 
            className={({ isActive }) => 
              `py-4 px-2 font-medium border-b-2 transition-colors duration-300 ${
                isActive 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300'
              }`
            }
          >
            Mini Cursos
          </NavLink>
          <NavLink 
            to="/ia" 
            className={({ isActive }) => 
              `py-4 px-2 font-medium border-b-2 transition-colors duration-300 ${
                isActive 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300'
              }`
            }
          >
            Inteligência Artificial
          </NavLink>
          <NavLink 
            to="/tecnologia" 
            className={({ isActive }) => 
              `py-4 px-2 font-medium border-b-2 transition-colors duration-300 ${
                isActive 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300'
              }`
            }
          >
            Tecnologia e Inovação
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
