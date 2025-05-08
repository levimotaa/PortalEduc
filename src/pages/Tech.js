import React, { useState } from 'react';
import CourseSection from '../components/CourseSection';
import SearchBar from '../components/SearchBar';

const Tech = () => {
  const [search, setSearch] = useState('');

  const techCourses = [
    {
      title: "Tecnologias Educacionais Inovadoras",
      source: "Fundação Bradesco",
      link: "https://www.ev.org.br/areas-de-interesse/educacao-e-tecnologia"
    },
    {
      title: "Google Sala de Aula (Google Classroom)",
      source: "Google for Education",
      link: "https://edu.google.com/intl/ALL_br/products/classroom/"
    },
    {
      title: "Ferramentas Digitais para Aprendizagem Ativa",
      source: "Coursera",
      link: "https://www.coursera.org/learn/ensino-hibrido"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tecnologia e Inovação na Educação</h1>

      <p className="text-lg text-gray-600 mb-8">
        Explore as últimas tendências tecnológicas e como aplicá-las em sala de aula.
      </p>

      <SearchBar value={search} onChange={setSearch} />

      <CourseSection
        title="Recursos Tecnológicos para Professores"
        description="Ferramentas e plataformas que podem revolucionar sua prática pedagógica:"
        courses={techCourses}
        filterText={search}
      />
    </div>
  );
};

export default Tech;
