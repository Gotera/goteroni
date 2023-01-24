import UpperHeader from 'components/UpperHeader';
import DefaultPage from 'pages/DefaultPage';
import Menu from 'pages/Menu';
import Start from 'pages/Start/index.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <UpperHeader />
        <Routes>
          <Route path='/' element={<DefaultPage />} >
            <Route index element={<Start />} />
            <Route path='cardapio' element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}