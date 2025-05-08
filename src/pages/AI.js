import React, { useState } from 'react';
import CourseSection from '../components/CourseSection';
import SearchBar from '../components/SearchBar';

const AI = () => {
  const [search, setSearch] = useState('');

  const aiCourses = [
    {
      title: "Introdução à Inteligência Artificial para Educadores",
      source: "Microsoft Educator Center",
      link: "https://learn.microsoft.com/pt-br/training/educator-center/"
    },
    {
      title: "Como usar ChatGPT na Educação",
      source: "YouTube - Canal Conexão Filosófica",
      link: "https://www.youtube.com/watch?v=iE9DOhrJlpI&ab_channel=Conex%C3%A3oFilos%C3%B3fica"
    },
    {
      title: "Ferramentas de IA para Planejamento de Aulas",
      source: "Google for Education",
      link: "https://edu.google.com/intl/ALL_br/"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Inteligência Artificial na Educação</h1>

      <p className="text-lg text-gray-600 mb-8">
        Descubra como a IA pode transformar sua prática pedagógica e facilitar seu trabalho diário.
      </p>

      <SearchBar value={search} onChange={setSearch} />

      <CourseSection
        title="Cursos e Recursos sobre IA"
        description="Aprenda a utilizar ferramentas de inteligência artificial no contexto educacional:"
        courses={aiCourses}
        filterText={search}
      />
    </div>
  );
};

export default AI;
