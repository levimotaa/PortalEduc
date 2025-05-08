import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar cursos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
