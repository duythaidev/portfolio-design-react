import React from 'react'
import NavBar from './NavBar'
import '../../styles/Main/Main.scss'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <main className='main-container'>
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Portfolio/*" element={<Portfolio />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Router>
        </main>
    )
}

export default Main
