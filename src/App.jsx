import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css';
import Escuelita from './components/escuelita-futbol/Escuelita';
import Footer from './components/footer/Footer';
import Galeria from './components/Galeria-productos/Galeria';
import Header from './components/header/Header';
import InfoTorneos from './components/Info-torneos/InfoTorneos';
import NavBar from './components/na-bar/NavBar';
function App() {
 

  return (
    <>
      <NavBar/>
      <Header/>
      <Escuelita/>
      <InfoTorneos/>
      
      <Footer/>
      
    </>
  )
}

export default App
