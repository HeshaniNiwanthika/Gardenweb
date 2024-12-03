
import './App.css';
import Contact from './Components/Pages/Contact'
import Home from  './Components/Pages/Home'
import About from './Components/Pages/About'
import Decoratingplants from './Components/Pages/Decoratingplants';

import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<Home/>}>
          {/* <Home/> */}
          </Route>

          <Route path="/About" element={<About/>}>
          {/* <About/> */}
          </Route>

          <Route path="/Contact" element={<Contact/>}>
          {/* <Contact/> */}
          </Route>

          <Route path="/Decoratingplants" element={<Decoratingplants/>}>
          {/* <Decoratingplants/> */}
          </Route>
    </Routes>
    </BrowserRouter>
         
    

  )
}

export default App;
