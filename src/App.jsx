import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';

// Code-split secondary pages for fast initial bundle load
const About = lazy(() => import('./pages/About'));
const Departments = lazy(() => import('./pages/Departments'));
const Products = lazy(() => import('./pages/Products'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Join = lazy(() => import('./pages/Join'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/products" element={<Products />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
