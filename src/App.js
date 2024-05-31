import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import { Important } from './pages/Important';
import { Bin } from './pages/Bin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Archive' element={<Archive />} />
      <Route path='/Important' element={<Important />} />
      <Route path='/Bin' element={<Bin />} />
    </Routes>
  );
}

export default App;
