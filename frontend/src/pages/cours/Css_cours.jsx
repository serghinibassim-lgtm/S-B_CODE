import React from 'react'
import Navbar from "../../component/sid_nav_footer/Navbar.jsx";
import Sidebar from "../../component/sid_nav_footer/SideBare.jsx";

export default function Css_cours() {
    return (
        <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-neutral-700 text-white">
            <Navbar/>
            <Sidebar/>
        </div>
    )

}