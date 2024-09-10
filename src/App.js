import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { HomePage } from './components/home-page';
import { ApiContext } from './context';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cabinet } from "./components/cabinet";
import { Soon } from "./components/soon/soon";
import { AboutKurs } from "./components/about-kurs/about";
import { PhotoPage } from "./components/photo-page";

function App() {
  return (
    <ApiContext.Provider value={{}}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/cabinet" element={<Cabinet/>} />
          <Route path="/soon" element={<Soon/>}/>
          <Route path="/about-kurs" element={<AboutKurs/>}/>
          <Route path="/photo" element={<PhotoPage/>} />
        </Routes>
      </Router>
    </ApiContext.Provider>
  );
}

export default App;
