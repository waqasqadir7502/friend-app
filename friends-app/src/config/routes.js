import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import LogIn from "../screens/Login";
import SignUp from "../screens/Signup";

export default function RoutesNav() {

    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<LogIn />}></Route>
                <Route path="/" element={<SignUp />}></Route>
            </Routes>
        </Router>
    )
}