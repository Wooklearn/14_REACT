import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='main' element={<Main />} />
          <Route path='pokemon' element={<Pokemon />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
