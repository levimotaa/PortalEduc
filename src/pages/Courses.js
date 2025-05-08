import React, { useState } from 'react';
import CourseSection from '../components/CourseSection';
import SearchBar from '../components/SearchBar';

const Courses = () => {
  const [search, setSearch] = useState('');

  const officeCourses = [
    {
      title: "Word Básico para Professores",
      source: "Fundação Bradesco",
      link: "https://www.ev.org.br/cursos/microsoft-word-2016-basico"
    },
    {
      title: "Excel Básico e Aplicações Educacionais",
      source: "Fundação Bradesco",
      link: "https://www.ev.org.br/cursos/microsoft-excel-2016-basico"
    },
    {
      title: "PowerPoint - Apresentações Educativas",
      source: "Fundação Bradesco",
      link: "https://www.ev.org.br/cursos/microsoft-powerpoint-2016-basico"
    },
    {
      title: "OneDrive na Sala de Aula",
      source: "YouTube",
      link: "https://www.youtube.com/watch?v=prA75mu3arc"
    }
  ];

  const platforms = [
    {
      title: "Alura Para Empresas (parcerias educacionais)",
      source: "Alura",
      link: "https://www.alura.com.br/empresas"
    },
    {
      title: "Lista de Plataformas EAD Gratuitas",
      source: "Na Prática",
      link: "https://napratica.org.br/plataformas-de-cursos-online-e-gratuitos-com-certificado/"
    },
    {
      title: "Udemy (cursos com baixo custo ou gratuitos)",
      source: "Udemy",
      link: "https://www.udemy.com/pt/courses/free/"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mini Cursos Disponíveis</h1>

      <SearchBar value={search} onChange={setSearch} />

      <CourseSection
        title="Pacote Office"
        description="Domine as ferramentas mais usadas no ambiente escolar com estes cursos básicos:"
        courses={officeCourses}
        filterText={search}
      />

      <CourseSection
        title="Plataformas de Estudo e Materiais"
        description="Outros sites úteis para aprofundar seu conhecimento:"
        courses={platforms}
        filterText={search}
      />
    </div>
  );
};

export default Courses;
