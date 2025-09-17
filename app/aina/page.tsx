'use client'

import React, { useState, useEffect } from 'react'

export default function AinaPage() {
  const [input, setInput] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showCinematic, setShowCinematic] = useState(false)
  const [cinematicStep, setCinematicStep] = useState(0)
  const [showMainPage, setShowMainPage] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.toLowerCase() === 'aina') {
      setIsAuthenticated(true)
      setShowCinematic(true)
      startCinematic()
    }
  }

  const startCinematic = () => {
    const steps = [
      'oh c\'est bien aina ?',
      'oh...',
      'oh...',
      'OH MON DIEUX PARDON!!',
    ]
    
    let currentStep = 0
    const interval = setInterval(() => {
      setCinematicStep(currentStep)
      currentStep++
      if (currentStep >= steps.length) {
        clearInterval(interval)
        setTimeout(() => {
          setShowMainPage(true)
        }, 2000)
      }
    }, 1500)
  }

  const cinematicTexts = [
    'oh c\'est bien aina ?',
    'oh...',
    'oh...',
    'OH MON DIEUX PARDON!!',
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-2 border-pink-300">
          <form onSubmit={handleSubmit} className="text-center">
            <h1 className="text-3xl font-bold text-pink-600 mb-6 transform rotate-1">
              QUI ES TU ?
            </h1>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="px-4 py-2 text-lg border-2 border-pink-400 rounded-lg focus:outline-none focus:border-pink-600 transform -rotate-1"
              placeholder="Dis moi..."
            />
            <button
              type="submit"
              className="block mt-4 mx-auto px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transform rotate-1 hover:scale-105 transition-all"
            >
              ENTRER
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (showCinematic && !showMainPage) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        {cinematicStep < cinematicTexts.length && (
          <div className="text-center">
            <p 
              className={`text-4xl font-bold text-white animate-pulse transition-all duration-1000 ${
                cinematicStep === 3 ? 'text-red-500 text-6xl animate-bounce' : ''
              }`}
              key={cinematicStep}
            >
              {cinematicTexts[cinematicStep]}
            </p>
          </div>
        )}
      </div>
    )
  }

  if (showMainPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 overflow-hidden relative">
        {/* Falling roses */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-fall pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            🌹
          </div>
        ))}

        {/* Spinning roses */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            🌹
          </div>
        ))}

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
          {/* Main apology title */}
          <h1 className="text-8xl font-black text-pink-800 mb-8 text-center transform -rotate-2 animate-rainbow animate-wobble shadow-lg">
            JE SUIS DÉSOLÉ
          </h1>

          {/* Apology messages scattered around */}
          <div className="absolute top-20 left-10 transform rotate-12 bg-yellow-200 p-4 rounded-lg border-4 border-pink-500 shadow-lg animate-shake">
            <p className="text-2xl font-bold text-pink-700">STP PARDONNE MOI</p>
          </div>

          <div className="absolute top-40 right-20 transform -rotate-6 bg-pink-100 p-4 rounded-lg border-4 border-rose-500 shadow-lg animate-bounce">
            <p className="text-xl font-bold text-rose-600">JE SUIS UN IDIOT</p>
          </div>

          <div className="absolute bottom-32 left-20 transform rotate-6 bg-purple-200 p-4 rounded-lg border-4 border-pink-600 shadow-lg animate-pulse">
            <p className="text-xl font-bold text-purple-700 animate-rainbow">PARDON PARDON PARDON</p>
          </div>

          <div className="absolute bottom-20 right-10 transform -rotate-12 bg-red-100 p-4 rounded-lg border-4 border-red-500 shadow-lg animate-wobble">
            <p className="text-lg font-bold text-red-600">JE FERAI PLUS JAMAIS ÇA</p>
          </div>

          <div className="absolute top-1/2 left-5 transform rotate-45 bg-orange-200 p-3 rounded-lg border-3 border-orange-500 shadow-lg animate-spin">
            <p className="text-sm font-bold text-orange-700">MERCY MERCY</p>
          </div>

          <div className="absolute top-1/3 right-5 transform -rotate-45 bg-green-200 p-3 rounded-lg border-3 border-green-500 shadow-lg animate-ping">
            <p className="text-sm font-bold text-green-700">JE T'AIME FORT</p>
          </div>

          {/* Center message */}
          <div className="mt-8 bg-white/90 p-8 rounded-lg border-4 border-pink-500 shadow-2xl transform rotate-1 animate-bounce">
            <p className="text-3xl font-bold text-pink-700 text-center">
              JE PROMETS D'ÊTRE GENTIL 😭
            </p>
          </div>

          {/* More scattered apologies */}
          <div className="absolute top-10 right-40 transform rotate-3 bg-blue-200 p-2 rounded border-2 border-blue-400 animate-pulse">
            <p className="text-xs font-bold text-blue-600">sorry sorry</p>
          </div>

          <div className="absolute bottom-40 left-40 transform -rotate-3 bg-yellow-300 p-2 rounded border-2 border-yellow-500 animate-bounce">
            <p className="text-xs font-bold text-yellow-700">oups 😅</p>
          </div>

          <div className="absolute top-60 left-1/2 transform -rotate-12 bg-indigo-200 p-3 rounded-lg border-2 border-indigo-400 animate-shake">
            <p className="text-lg font-bold text-indigo-700">PLEEEEASE</p>
          </div>

          <div className="absolute bottom-60 right-1/3 transform rotate-15 bg-teal-200 p-2 rounded border-2 border-teal-400 animate-spin">
            <p className="text-sm font-bold text-teal-600">NO NO NO</p>
          </div>

          <div className="absolute top-1/4 left-1/4 transform rotate-30 bg-lime-200 p-2 rounded border-2 border-lime-400 animate-wobble">
            <p className="text-xs font-bold text-lime-700">j'ai merdé 😰</p>
          </div>

          <div className="absolute bottom-1/4 right-1/4 transform -rotate-20 bg-cyan-200 p-3 rounded-lg border-2 border-cyan-400 animate-ping">
            <p className="text-md font-bold text-cyan-700">FORGIVE ME</p>
          </div>

          <div className="absolute top-16 left-1/3 transform rotate-8 bg-emerald-200 p-2 rounded border-2 border-emerald-400 animate-pulse">
            <p className="text-xs font-bold text-emerald-700">😭😭😭</p>
          </div>

          <div className="absolute bottom-16 left-1/2 transform -rotate-8 bg-amber-200 p-2 rounded border-2 border-amber-400 animate-bounce">
            <p className="text-xs font-bold text-amber-700">C'EST MA FAUTE</p>
          </div>
        </div>

        {/* CSS for animations */}
        <style jsx>{`
          @keyframes fall {
            from {
              transform: translateY(-100px) rotate(0deg);
              opacity: 1;
            }
            to {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0.3;
            }
          }
          
          @keyframes wobble {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          @keyframes rainbow {
            0% { color: #ff6b9d; }
            25% { color: #ffd93d; }
            50% { color: #6bcf7f; }
            75% { color: #4d9de0; }
            100% { color: #ff6b9d; }
          }
          
          .animate-fall {
            animation: fall linear infinite;
          }
          
          .animate-wobble {
            animation: wobble 2s ease-in-out infinite;
          }
          
          .animate-shake {
            animation: shake 0.5s ease-in-out infinite;
          }
          
          .animate-rainbow {
            animation: rainbow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  return null
}
