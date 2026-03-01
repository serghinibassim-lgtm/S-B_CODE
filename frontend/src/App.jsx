import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/auth/Login.jsx';
import SignUp from './pages/auth/sinUp.jsx';
import CodeRunner from "./pages/editortest.jsx";

import Home from "./pages/home";
import Htmlcssjs from "./pages/htmlcssjs.jsx";
import Html_cours from "./pages/cours/Html_cours.jsx";
import Css_cours from "./pages/cours/Css_cours.jsx";
import Js_cours from "./pages/cours/Js_cours.jsx";
import Python_cours from "./pages/cours/Python_cours.jsx";

function App() {
    return (

        <Router>
            <Routes>

                <Route path="/Html" element={<Htmlcssjs/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/PY" element={<CodeRunner/>}/>
                <Route path="/Html_cours/*" element={<Html_cours/>}/>
                <Route path="/Css_cours" element={<Css_cours/>}/>
                <Route path="/Js_cours" element={<Js_cours/>}/>
                <Route path="/Python_cours" element={<Python_cours/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>

            </Routes>
        </Router>



    );
}

export default App;
