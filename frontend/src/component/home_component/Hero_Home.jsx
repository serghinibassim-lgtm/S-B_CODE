import React from 'react'
import {Link} from 'react-router-dom'

function Hero_Home() {
  return (
    <div>

  <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Apprenez la programmation depuis zéro
        </h1>
        <p className="text-gray-400 max-w-xl mb-8">
          HTML • CSS • JavaScript • Python  
          Apprenez pas à pas et de manière interactive
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-md border border-emerald-300 hover:bg-emerald-600 hover:text-white transition">
           <Link to={'/signup'}>Commencer maintenant</Link>
          </button>
        </div>
      </section>


    </div>
  )
}

export default Hero_Home;