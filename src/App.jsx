import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// NAVBAR'S + FOOTER
import HomeNavbar from './components/HomeNavbar';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
// WORK PAGES
import Patterns from './pages/Work/Patterns';
import PatternsMockups from './pages/Work/PatternsMockups';
import Logos from './pages/Work/Logos';
import LogosMockups from './pages/Work/LogosMockups';
import Uxui from './pages/Work/Uxui';
import UxuiMockups from './pages/Work/UxuiMockups';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? <HomeNavbar /> : <MainNavbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />

        <Route path='/patterns' element={<Patterns />} />
        <Route path='/pattern/:id' element={<PatternsMockups />} />

        <Route path='/logos' element={<Logos />} />
        <Route path='/logo/:id' element={<LogosMockups />} />

        <Route path='/uxui' element={<Uxui />} />
        <Route path='/uxui/:id' element={<UxuiMockups />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}