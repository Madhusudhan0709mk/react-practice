import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from './components/Form';
import Fruits from './components/Fruits';
import Demo from './components/Demo';
import Multiple from './components/Multiple';
import Cond from './components/Cond';
import Maplists from './components/Maplists';
import Colorpicker from './components/Colorpicker';
function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar ></Navbar>
    <Routes>
    <Route path="/" element={ <Form />} />
      <Route path="fruits" element={ <Fruits />} />

      <Route path="multiple" element={ <Multiple />} />
      <Route path="demo" element={ <Demo />} />
      <Route path="conditional" element={ <Cond />} />
      <Route path="map-practice" element={ <Maplists />} />
      <Route path="colorpicker-practice-usestate-onChange" element={ <Colorpicker />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
