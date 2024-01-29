
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Notfound from './Notfound';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/service' Component={Service}/>
      <Route path='/about' Component={About}/>
      <Route path='*' Component={Notfound}/>
    </Routes>

    </>
  );
}

export default App;
