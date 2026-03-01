import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {courses} from "../../data/Cours.js";

export default function Sidebar() {
    const location = useLocation();
    const currentLang = location.pathname.split("/")[1];
    const course = courses[currentLang];

    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className=" fixed top-0 left-0 right-0 z-49 w-60 mt-16 bg-gray-950 text-gray-200 p-4 h-screen overflow-y-auto">

            {course ? (
                <>
                    <h2 className="text-xl font-bold mb-2">
                        {course.title}
                    </h2>
                    <div className="w-full bg-gray-800 h-2 rounded mb-6 relative">
                        <div
                            className="bg-indigo-600 h-2 rounded transition-all duration-500"
                            style={{width: `${course.progress}%`}}
                        />
                        <span className="absolute -top-6 right-0 text-xs text-gray-400">
              {course.progress}%
            </span>
                    </div>

                    {course.sections.map((section, i) => {
                        const isOpen = openSections[i];

                        return (
                            <div key={i} className="mb-3">

                                <button
                                    onClick={() => toggleSection(i)}
                                    className="flex justify-between items-center w-full text-sm font-medium text-gray-300 hover:text-white transition"
                                >
                                    {section.sectionTitle}

                                    <span
                                        className={`transform transition-transform duration-300 ${
                                            isOpen ? "rotate-90" : ""
                                        }`}
                                    >
                                      {'>'}
                                  </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen ? "max-h-96 mt-2" : "max-h-0"
                                    }`}
                                >
                                    {section.lessons.map((lesson, j) => (
                                        <NavLink
                                            key={j}
                                            to={lesson.path}
                                            className={({isActive}) =>
                                                `block px-3 py-1 rounded text-sm mb-1 transition ${
                                                    isActive
                                                        ? "bg-indigo-600 text-white"
                                                        : "hover:bg-gray-800"
                                                }`
                                            }
                                        >
                                            {lesson.name}
                                        </NavLink>

                                    ))}
                                </div>

                            </div>
                        );
                    })}
                </>
            ) : (
                <div className="text-gray-400 text-sm">
                    Select a course
                </div>
            )}

        </div>
    );
}
