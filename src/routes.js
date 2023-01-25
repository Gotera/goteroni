import Footer from 'components/Footer';
import UpperHeader from 'components/UpperHeader';
import About from 'pages/About';
import DefaultPage from 'pages/DefaultPage';
import Dish from 'pages/Dish';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import Start from 'pages/Start/index.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <UpperHeader />
        <Routes>
          <Route path='/' element={<DefaultPage />} >
            <Route index element={<Start />} />
            <Route path='cardapio' element={<Menu />} />
            <Route path='sobre' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
          <Route path='prato/:id' element={<Dish />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}