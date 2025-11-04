import { Routes, Route } from 'react-router'
import Home from './pages/home'
import CoursemapCS from './pages/coursemap-cs'
import CoursemapDS from './pages/coursemap-ds'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coursemap">
        <Route path="cs" element={<CoursemapCS />} />
        <Route path="ds" element={<CoursemapDS />} />
      </Route>
    </Routes>
  );
}

export default App