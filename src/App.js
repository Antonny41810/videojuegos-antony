import './App.css';
// import NavbarApp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselApp from './components/Carousel';
// import TextoApp from './components/Texto';
// import FooterApp from './components/Footer';
// import Index from './components/Cards/Index';
import { Home } from './views/Home/Index';
import {Route, Routes} from 'react-router-dom';
import {Games} from './views/Games/Games'
import NavbarApp from './components/Navbar';
import FooterApp from './components/Footer';



function App() {
  return (
    <div className="App">
       <NavbarApp/>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/games' element={<Games />}/>
     </Routes>
     <FooterApp/>
    </div>
  );
}


export default App;
