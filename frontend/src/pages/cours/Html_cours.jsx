import React from 'react'
import Navbar from "../../component/sid_nav_footer/Navbar.jsx";
import Sidebar from "../../component/sid_nav_footer/SideBare.jsx"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Html_introduction from "../../component/cours_chapitre/Html/Html_introduction.jsx";

export default function Html_cours() {
    return (
        <div
            className=" min-h-screen bg-gray-900 text-white">


            <Navbar/>

            <div className={'flex'}>


                <Sidebar/>

                <main className="flex-1 p-6  ml-60 mt-16">

                    <Routes>
                        <Route path="/Html_introduction" element={<Html_introduction/>}/>
                    </Routes>

                </main>
            </div>
        </div>
    )

}