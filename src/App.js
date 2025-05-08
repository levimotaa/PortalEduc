import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AI from './pages/AI';
import Tech from './pages/Tech';
import Tools from './pages/Tools';

function App() {
  return (
    <Router basename="/PortalEduc">
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-8 bg-white dark:bg-slate-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/ia" element={<AI />} />
            <Route path="/tecnologia" element={<Tech />} />
            <Route path="/ferramentas" element={<Tools />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
