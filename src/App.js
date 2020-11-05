import logo from './logo.svg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ImgGallery from './components/ImgGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImgGallery/>
      <Footer/>
    </div>
  );
}

export default App;
