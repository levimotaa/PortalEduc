import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 mb-12 shadow-md dark:shadow-none">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Bem-vindo ao Portal de Cursos para Professores
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Aqui você encontra os melhores recursos digitais para aprimorar suas habilidades
          e levar mais tecnologia para a sala de aula.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="cursos" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Explorar Cursos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
