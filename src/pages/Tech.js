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

  const dynamicTools = [
    {
      title: "Kahoot!",
      source: "Crie quizzes interativos para usar em sala de aula",
      link: "https://kahoot.com/schools/"
    },
    {
      title: "Quizizz",
      source: "Avaliações e atividades gamificadas para alunos",
      link: "https://quizizz.com/"
    },
    {
      title: "Mentimeter",
      source: "Interações em tempo real com enquetes, nuvens de palavras e mais",
      link: "https://www.mentimeter.com/"
    },
    {
      title: "Educaplay",
      source: "Crie jogos educacionais como cruzadinhas, testes e mapas interativos",
      link: "https://www.educaplay.com/"
    },
    {
      title: "Wordwall",
      source: "Ferramenta para criação de atividades interativas e impressas",
      link: "https://wordwall.net/pt"
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

      <CourseSection
        title="Ferramentas para Ensino Dinâmico"
        description="Plataformas que incentivam o engajamento dos alunos com jogos, quizzes e interações:"
        courses={dynamicTools}
        filterText={search}
      />
    </div>
  );
};

export default Tech;

