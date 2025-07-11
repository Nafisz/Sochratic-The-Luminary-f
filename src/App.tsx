import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Impor komponen halaman yang berbeda
import Home from './pages/home';
import SelectionPage from './pages/selection';
import SocraticChatApp from './pages/study';

function App() {
  return (
    <Router> {/* Ini menyediakan konteks routing untuk aplikasi */}
      {/* <Header /> Header yang mungkin ingin Anda tampilkan di semua halaman */}
      <Routes> {/* Container untuk semua definisi rute */}
        <Route path="/" element={<Home />} /> {/* Jika URL adalah '/', tampilkan Home */}
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/study" element={<SocraticChatApp />} />
        {/* <Route path="/about" element={<AboutPage />} /> Jika URL adalah '/about', tampilkan AboutPage */}
        {/* <Route path="/contact" element={<ContactPage />} /> Jika URL adalah '/contact', tampilkan ContactPage */}
        {/* Anda bisa menambahkan rute lain di sini */}
      </Routes>
      {/* <Footer /> Footer yang mungkin ingin Anda tampilkan di semua halaman */}
    </Router>
  );
}

export default App;