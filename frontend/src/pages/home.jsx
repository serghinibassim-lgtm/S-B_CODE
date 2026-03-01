import React from "react";
import Navbar from "../component/sid_nav_footer/Navbar.jsx";
import Hero_Home from "../component/home_component/Hero_Home.jsx";
import Footer from "../component/sid_nav_footer/Footer.jsx";
import Langage_presentation from "../component/home_component/langage_presentation.jsx";
import LearningSection from "../component/home_component/LearningSection.jsx";
import Dev_Editor from "../component/code/dev_Editor.jsx";
export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-neutral-700 text-white">
            <Navbar/>
            <Hero_Home/>
            <Langage_presentation/>
            <LearningSection/>
            <Footer/>
        </div>
    );
}
