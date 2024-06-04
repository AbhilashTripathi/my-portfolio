import './App.css'
import { Navbar, Academics, Contact, Experience, Hero, Projects, Acheivements, Skills } from './components'

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Academics />
        <Projects />
        <Experience />
        <Skills />
        <Acheivements />
        <Contact />
    </>
    );
};

export default App
