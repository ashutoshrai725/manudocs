import React from 'react';
import './styles/globals.css';
import Navbar from './components/common/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Problem from './components/sections/Problem/Problem';
import Solution from './components/sections/Solution/Solution';
import ExecutionPlan from './components/sections/ExecutionPlan/ExecutionPlan';
import BackedBy from './components/sections/BackedBy/BackedBy';
import Gallery from './components/sections/Gallery/Gallery';
import SupportUs from './components/sections/SupportUs/SupportUs';
import ExploreMore from './components/sections/ExploreMore/ExploreMore';

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <Navbar />
        <Hero />
        <SupportUs />
        <Problem />
        <Solution />
        <ExecutionPlan />
        <BackedBy />
        <Gallery />
        <ExploreMore />
      </div>
    </div>
  );
}

export default App;
