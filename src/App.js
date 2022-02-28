
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Servicios/Services';
import Products from './components/pages/Productos/Products';
import SingUp from './components/pages/SingUp/SingUp';
import ScrollToTop from './components/ScrollToTop';
// import Form from './components/SingIn/Form'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route  path="/" exact element={<Home />}/>
          <Route  path="/planes" exact element={<Services />}/>
          <Route  path="/productos" exact element={<Products />}/>
          <Route  path="/sing-up" exact element={<SingUp />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
