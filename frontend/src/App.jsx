

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/sinUp';
import Home from './pages/home';
import Cours from './pages/cours';
import QSM from './pages/qsm';
import Mathematique from './pages/mathematique';
import Informatique from './pages/informatique';
import Physique from './pages/physique';
import CodeRunner from './pages/editortest';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodeRunner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/qsm" element={<QSM />} />
        <Route path="/mathematique" element={<Mathematique />} />
        <Route path="/informatique" element={<Informatique />} />
        <Route path="/physique" element={<Physique />} />
      </Routes>
    </Router>
  );
}

export default App;
