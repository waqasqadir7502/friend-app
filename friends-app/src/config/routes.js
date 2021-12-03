import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import LogIn from "../screens/Login";
import SignUp from "../screens/Signup";
import Nav from "../components/navbar";
import Home from "../screens/Home";

export default function RoutesNav() {

    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Login" element={<LogIn />}></Route>
                <Route path="/" element={<SignUp />}></Route>
            </Routes>
        </Router>
    )
}