import React, { useState } from 'react';

const sampleQuestions = [
  "Qual foi o conteúdo mais difícil até agora?",
  "Explique um conceito com suas próprias palavras.",
  "Como você aplicaria isso na vida real?",
  "Cite um exemplo diferente do que foi mostrado.",
  "Se você fosse o professor, como ensinaria isso?"
];

const Tools = () => {
  const [question, setQuestion] = useState('');
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (intervalId) return;
    const id = setInterval(() => setTime((prev) => prev + 1), 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const generateQuestion = () => {
    const random = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
    setQuestion(random);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Ferramentas para Professores</h1>

      {/* Cronômetro */}
      <div className="mb-10 p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">⏱️ Cronômetro</h2>
        <p className="text-gray-600 mb-4">Use este temporizador para atividades cronometradas na sala de aula.</p>
        <div className="text-4xl font-mono text-center mb-4">{time}s</div>
        <div className="flex space-x-3">
          <button onClick={startTimer} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Iniciar</button>
          <button onClick={stopTimer} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Parar</button>
          <button onClick={resetTimer} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Zerar</button>
        </div>
      </div>

      {/* Gerador de Perguntas */}
      <div className="mb-10 p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">🎲 Pergunta Aleatória</h2>
        <p className="text-gray-600 mb-4">Gere perguntas reflexivas para promover o pensamento crítico dos alunos.</p>
        <div className="text-lg italic text-blue-700 mb-4">{question || 'Clique para gerar uma pergunta'}</div>
        <button onClick={generateQuestion} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Nova Pergunta</button>
      </div>

      {/* Links úteis */}
      <div className="p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">🔗 Links Úteis</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
          <li><a href="https://docs.google.com/spreadsheets" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Modelos de Planilhas Educacionais</a></li>
          <li><a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google Drive com Recursos Compartilhados</a></li>
          <li><a href="https://www.canva.com/pt_br/educacao/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Templates de Apresentação para Aulas</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Tools;
