import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";


function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <div className="container mt-10 mx-auto">
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
