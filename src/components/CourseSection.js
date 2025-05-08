import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CourseSection = ({ title, description, courses, filterText = '' }) => {
  const [favorites, setFavorites] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const toggleFavorite = (title) => {
    let updated;
    if (favorites.includes(title)) {
      updated = favorites.filter((fav) => fav !== title);
    } else {
      updated = [...favorites, title];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const filteredCourses = courses
    .filter((course) => course.title.toLowerCase().includes(filterText.toLowerCase()))
    .filter((course) => !showOnlyFavorites || favorites.includes(course.title));

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        <button
          onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition"
        >
          {showOnlyFavorites ? 'Mostrar Todos' : 'Apenas Favoritos'}
        </button>
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="space-y-4">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md card-hover relative"
          >
            <button
              onClick={() => toggleFavorite(course.title)}
              className="absolute top-4 right-4 text-xl"
              title="Favoritar"
            >
              {favorites.includes(course.title) ? '❤️' : '🤍'}
            </button>
            <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
            <p className="text-gray-600">{course.source}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Acessar curso
            </a>
          </motion.div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="text-gray-500 italic">Nenhum curso encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default CourseSection;
