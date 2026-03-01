import {useEffect, useState} from "react";
import logo from "../../assets/logo.svg"
import Html_cours from "../../pages/cours/Html_cours.jsx";
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className=" fixed top-0 left-0 right-0 z-50 w-full bg-linear-to-r from-black via-gray-900 to-black text-white border-b border-gray-800">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="text-xl font-bold text-blue-400 ">
                      <h1> <span className={'text-purple-500'}>[</span><span className={'text-emerald-400'}>C</span><span className={'text-amber-200'}>?</span></h1>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <Link to={'/'} className="hover:text-blue-400 transition">Home</Link>
                        <div className="relative group">
                            <button className="hover:text-blue-400 transition">
                                Cours
                            </button>
                            <div className="
                absolute left-0  w-44 top-full pt-2
                rounded-md bg-gray-900 shadow-lg border border-gray-700
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition
              ">
                                <ul>
                                    <li className="block px-4 py-2 hover:bg-gray-800">
                                        <Link to={'/Html_cours'}>Html</Link>
                                    </li>
                                    <li className="block px-4 py-2 hover:bg-gray-800">
                                        <Link to={'/Css_cours'}>css</Link>
                                    </li>
                                    <li className="block px-4 py-2 hover:bg-gray-800">
                                        <Link to={'/Js_cours'}>js</Link>
                                    </li>
                                    <li className="block px-4 py-2 hover:bg-gray-800">
                                        <Link to={'/Python_cours'}>pythone</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="hover:text-blue-400 transition">
                                Plus
                            </button>
                            <div className="
                absolute left-0  w-44 top-full pt-2
                rounded-md bg-gray-900 shadow-lg border border-gray-700
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition
              ">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                                    Blog
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                                    Careers
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                                    Support
                                </a>
                            </div>
                        </div>

                        <a href="#" className="hover:text-blue-400 transition">
                            About
                        </a>

                        <a href="#" className="hover:text-blue-400 transition">
                            Contact
                        </a>

                    </div>
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>
            {open && (
                <div className="md:hidden border-t border-gray-800 bg-black px-4 py-3 space-y-2">
                    <a href="#" className="block py-1">Home</a>

                    <details>
                        <summary className="cursor-pointer py-1">
                            Services
                        </summary>
                        <div className="pl-4 space-y-1 text-sm">
                            <a href="#" className="block">Web Dev</a>
                            <a href="#" className="block">Mobile App</a>
                            <a href="#" className="block">UI/UX</a>
                        </div>
                    </details>

                    <details>
                        <summary className="cursor-pointer py-1">
                            Plus
                        </summary>
                        <div className="pl-4 space-y-1 text-sm">
                            <a href="#" className="block">Blog</a>
                            <a href="#" className="block">Careers</a>
                            <a href="#" className="block">Support</a>
                        </div>
                    </details>

                </div>
            )}
        </nav>
    );
}
