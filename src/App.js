import logo from './logo.svg';
import './App.css';
import Promises from './Components/Promises';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Pages from './Components/Pages';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop"  element={<Shop/>}/>
        <Route path="/pages"  element={<Pages/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/blog"    element={<Blog/>}/>
      </Routes>
      
    <Header/>
    <Promises/>
    <div>
      
    </div>
    <div id='marker12'></div>
    <div id='marker23'>AccioJob
    <div id='mk8'>
    
            <img src='/images/fb.jpg'></img>
            
    </div>
    <div id='ni'>
    
            <img src='/images/insta.jpg'></img>
            
    </div>
    <div id='ni'>
    
            <img src='/images/twitter.jpg'></img>
            
    </div>
    </div>
    <Footer/>
    </div>

  );
}

export default App;
