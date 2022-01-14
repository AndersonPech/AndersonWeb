import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import ParticleComponent from './Components/ParticleComponent';
import NavBar from './Components/Nav';
import ProjectPage from './Components/Projects';
import Profile from './Components/Profile';
import { Context, Data } from './Components/ProjectData';
import './App.css';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="bg-gradient-to-b from-[#c4c5bf] to-[#f1f2ee]">
      <NavBar />
      <ParticleComponent />
      <Context.Provider value={Data}>
        <Routes>
          <Route path="/AndersonWeb/" element={<Profile />} />
          <Route exact path="/AndersonWeb/projects" element={<ProjectPage />} />
          <Route exact path="/AndersonWeb/contact" element={<Contact />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
