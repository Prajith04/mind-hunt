import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Question from "./Question";
import Contact from './Contact';
import About from './About';
import "./App.css";
import NavBar from "./NavBar";
class App extends Component {
    render() {
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
                    </Routes>
            </Router>
            </>
        );
    }
}

export default App;