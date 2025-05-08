import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css'; // Garante que o Tailwind seja aplicado

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
