import NavbarApp from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselApp from '../../components/Carousel';
import TextoApp from '../../components/Texto';
import FooterApp from '../../components/Footer';
import Index from '../../components/Cards/Index';

export const Home = () => {

return (

<div className="App">
     
      <div className='container mt-4'>
      <CarouselApp/>
      </div>
      
      <div className='container'>
      <TextoApp/>
      </div>

      <div className='ContainerCard'>
      <Index/>
      </div>
      
      
</div>
);
}