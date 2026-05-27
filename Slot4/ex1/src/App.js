import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow-1">
        {renderContent()}
      </main>
      <Footer
        id="12345"
        name="Khoi NTN"
        email="nguyenkhoi190305@gmail.com"
        githubLink="https://github.com/nguyenkhoi190305-cell/FER202_SE20A07_SU26_KhoiNTN.git"
      />
    </div>
  );
}

export default App;