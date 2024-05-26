import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Escuelita from './components/escuelita-futbol/Escuelita';
import Footer from './components/footer/Footer';
import Galeria from './components/Galeria-productos/Galeria';
import Header from './components/header/Header';
import Publicidad from './components/Sponsors-caruso/Pulicidad';
import InfoTorneos from './components/Info-torneos/InfoTorneos';
import NavBar from './components/header/nav-bar/NavBar';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
function App() {
 

  return (
    <>
    
      <Header/>
      <Galeria/>
      <Escuelita/>
      <InfoTorneos/>
      <Publicidad/>
      

      
      <Footer/>
      <WhatsAppButton/>
      
    </>
  )
}

export default App
