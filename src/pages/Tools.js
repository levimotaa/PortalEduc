import React, { useState } from 'react';

const sampleQuestions = [
  "O que você aprendeu de mais importante nesta aula?",
  "Como você explicaria este conteúdo para um colega?",
  "Você acha que isso é útil no seu dia a dia? Por quê?",
  "Crie um exemplo diferente do que foi dado.",
  "Quais são as vantagens e desvantagens desse conceito?",
  "Como isso se relaciona com algo que já estudamos?",
  "Qual parte você ainda tem dúvidas?",
  "Cite uma aplicação prática desse conteúdo.",
  "Se você fosse o professor, o que mudaria na explicação?",
  "Qual foi o maior desafio ao entender este assunto?",
  "Você pode pensar em uma forma criativa de usar isso?",
  "Qual palavra resume bem o que vimos hoje?",
  "Explique este conceito em uma frase.",
  "O que você achou mais interessante na aula de hoje?",
  "Como você se sentiu aprendendo isso?",
  "Como isso pode ser melhorado?",
  "O que mais você gostaria de saber sobre este tema?",
  "Cite um erro comum que as pessoas cometem com isso.",
  "Crie uma pergunta sobre este conteúdo.",
  "Quais seriam as consequências de aplicar mal isso?",
  "Você consegue conectar esse conteúdo com outra disciplina?",
  "Se isso fosse um filme, qual seria o enredo?",
  "Invente uma metáfora ou comparação para explicar isso.",
  "Como isso se relaciona com algo do mundo atual?",
  "O que você diria a alguém que acha que isso é inútil?",
  "Em uma palavra, como você resumiria este tema?",
  "Você concorda com tudo que foi apresentado? Justifique.",
  "Como você ensinaria esse conteúdo para uma criança?",
  "Se você pudesse mudar algo nesta teoria, o que seria?",
  "Dê um exemplo errado e explique por que está errado.",
  "Crie um desafio ou jogo com este conteúdo.",
  "Você se sente confiante sobre este assunto? Por quê?",
  "Qual foi sua maior surpresa durante essa aula?",
  "Como você pode praticar isso fora da escola?",
  "Se isso fosse um objeto, o que seria? Por quê?",
  "O que esse tema tem a ver com suas metas pessoais?",
  "Crie um meme que represente o que você aprendeu.",
  "Escreva um tweet sobre o conteúdo com até 280 caracteres.",
  "Se esse conceito fosse uma música, qual seria o refrão?",
  "Dê uma nota para seu entendimento de 0 a 10.",
  "Como isso pode ajudar outras pessoas?",
  "Você já usou esse conhecimento antes? Quando?",
  "Quais dúvidas surgiram ao estudar isso?",
  "Diga o oposto do que foi ensinado e explique.",
  "Se fosse uma comida, que sabor teria este tema?",
  "Como este tema pode ser ensinado de forma mais divertida?",
  "Descreva esse conteúdo usando emojis.",
  "O que te motivaria a estudar mais sobre isso?",
  "Você acha que isso será importante no futuro? Por quê?",
  "Como isso pode resolver um problema real?"
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
