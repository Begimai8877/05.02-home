import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";



const App = () => {
  return (
    <div className='main__section'>
      <div className="container">
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
