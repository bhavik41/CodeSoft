import {React,useEffect,useState } from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./Rotes/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Rotes/Login/Login";
import Signup from "./Rotes/Signup/Signup";
import SplashScreen from "./SplashScreen";


const App = () => {
  // const [loading, setLoading] = useState(true);
  // const [splashActive, setSplashActive] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSplashActive(false);
  //   }, 3000); // Duration before starting the animation

  //   const loadingTimer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000); // Duration to fully hide the splash screen (animation + delay)

  //   return () => {
  //     clearTimeout(timer);
  //     clearTimeout(loadingTimer);
  //   };
  // }, []);

  return (
    <>
  
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Landing" element={<Landing />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/log-out" element={<Signup />} />
          </Routes>
        </Router>

    </>
  );
};

export default App