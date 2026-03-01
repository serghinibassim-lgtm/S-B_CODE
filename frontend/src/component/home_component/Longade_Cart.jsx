import React from "react";

export default function LangageCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-gray-900 border border-gray-700 rounded-xl p-6 hover:scale-105 hover:border-blue-500 transition-transform duration-300">
      
     {Icon && (
        <div className="mb-4 w-16 h-16 flex items-center justify-center">
          <img src={Icon} alt={title} className="w-full h-full" />
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
