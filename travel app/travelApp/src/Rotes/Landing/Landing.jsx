import React from "react";
import "./Landing.css"
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/Home/Home";
import Navbar from "../../Components/Navbar/Navbar";
import Main from "../../Components/Main/Main";

const Landing = () =>{
 return (
    <>
    {/* <Navbar /> */}
    <Home />
    <Main />
    <Footer/>
    </>
 )
}

export default Landing;