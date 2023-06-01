import React from 'react'
import Header from './components/NavBar/NavBar.js'
import ResumeBuilder from './components/pages/ResumeBuilder.js'
import './App.css'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {

  return (
    <Router>
            <Header />
            <Routes>
                {/* <Route exact path='/' exact element={<Home />} /> */}
                <Route path='/resume-builder' element={<ResumeBuilder />} />
            </Routes>
        </Router>
  )
}

export default App
