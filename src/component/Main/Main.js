import React from 'react'
import NavBar from './NavBar'
import '../../styles/Main/Main.scss'
import About from '../About/About'
import Resume from '../Resume/Resume'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
class Main extends React.Component {

    render() {
        return (
            <main className='main-container'>
                <Router>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/Resume" element={<Resume />} />

                    </Routes>
                </Router>
            </main>
        )
    }
}
export default Main
