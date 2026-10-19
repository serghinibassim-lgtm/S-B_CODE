import React from "react";
import { Link } from "react-router-dom";

export default function LangageCard({ icon: Icon, title, description, slug }) {
    const cardContent = (
        <div className="flex flex-col items-center text-center bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:scale-105 hover:border-blue-500 transition-all duration-300 w-64 shadow-lg group">
            {Icon && (
                <div className="mb-4 w-16 h-16 flex items-center justify-center p-2 rounded-xl bg-gray-800/80 group-hover:bg-gray-800 transition">
                    <img src={Icon} alt={title} className="w-full h-full object-contain" />
                </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">{title}</h3>
            <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{description}</p>
        </div>
    );

    if (slug) {
        return (
            <Link to={`/courses/${slug}`} className="block">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
