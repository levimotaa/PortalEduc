import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CourseSection from '../components/CourseSection';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [search, setSearch] = useState('');

  const professionalCourses = [
    {
      title: "Apresentações com Impacto",
      source: "Fundação Bradesco",
      link: "https://www.ev.org.br/trilhas-de-conhecimento/aprimorando-suas-apresentacoes"
    },
    {
      title: "Ensino Híbrido",
      source: "Coursera - Fundação Lemann",
      link: "https://www.coursera.org/learn/ensino-hibrido"
    },
    {
      title: "Plataforma Khan Academy (Recursos para Professores)",
      source: "Khan Academy",
      link: "https://pt.khanacademy.org/khan-for-educators/recursos-para-professores-v2"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />

      <div className="max-w-4xl mx-auto">
        <SearchBar value={search} onChange={setSearch} />

        <CourseSection
          title="Desenvolvimento Profissional"
          description="Confira abaixo cursos gratuitos voltados para o aperfeiçoamento de educadores no uso de ferramentas digitais, metodologias ativas e gestão educacional:"
          courses={professionalCourses}
          filterText={search}
        />
      </div>
    </motion.div>
  );
};

export default Home;
