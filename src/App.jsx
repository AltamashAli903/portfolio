import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  return (
    <div>


      <Header />

      <Routes>
        <Route path='/skills' element={<Skills />} />
        <Route path='/project' element={<Project />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
