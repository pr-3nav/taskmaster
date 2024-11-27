import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TaskManager from './Components/Task';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero/>
        <TaskManager />
      </main>
      <Footer />
    </div>
  );
}

export default App;