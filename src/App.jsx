import React, { Component }from "react";
import  { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Question from "./Question";
import Contact from './Contact';
import About from './About';
import Result from './Result';
import Quiz from './careerQuestions';
import "./App.css";
import NavBar from "./NavBar";
function App() {
        return (
            <>
            <NavBar></NavBar>
            <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Question />}
                        ></Route>
                        <Route
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                         <Route
                            path="/result"
                            element={<Result />}
                        ></Route>
                        <Route
                            path="/career"
                            element={<Quiz />}
                        ></Route>
                    </Routes>
            </Router>
            </>
        );
    }

export default App;