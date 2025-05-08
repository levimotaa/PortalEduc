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

  const detectors = [
    {
      title: "GPTZero",
      source: "Detecta se um texto foi gerado por IA",
      link: "https://gptzero.me/"
    },
    {
      title: "Sapling AI Detector",
      source: "Detector gratuito com análise por trecho",
      link: "https://sapling.ai/ai-content-detector"
    },
    {
      title: "ZeroGPT",
      source: "Verificador online de texto gerado por IA (ChatGPT, etc.)",
      link: "https://www.zerogpt.com/"
    },
    {
      title: "Writer.com AI Detector",
      source: "Classifica trechos como 'provavelmente humanos' ou 'IA'",
      link: "https://writer.com/ai-content-detector/"
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

      <CourseSection
        title="Detectores de Conteúdo Gerado por IA"
        description="Ferramentas que ajudam a identificar se um texto foi escrito por inteligência artificial:"
        courses={detectors}
        filterText={search}
      />
    </div>
  );
};

export default AI;
