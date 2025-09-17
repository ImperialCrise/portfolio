'use client'

import React, { useState, useEffect } from 'react'

export default function EmonPage() {
  const [input, setInput] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showCinematic, setShowCinematic] = useState(false)
  const [cinematicStep, setCinematicStep] = useState(0)
  const [showProposal, setShowProposal] = useState(false)
  const [proposalAnswer, setProposalAnswer] = useState('')
  const [showWedding, setShowWedding] = useState(false)
  const [showRejection, setShowRejection] = useState(false)
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(0)
  const [rejectionAnswer, setRejectionAnswer] = useState('')

  const handleAuthSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.toLowerCase() === 'emon') {
      setIsAuthenticated(true)
      setShowCinematic(true)
      startCinematic()
    }
  }

  const startCinematic = () => {
    const steps = [
      'emon ?',
      'oh c\'est vrai ?',
      'OH MON AMOUR !!',
      'JE T\'AIME TELLEMENT !!',
    ]
    
    let currentStep = 0
    const interval = setInterval(() => {
      setCinematicStep(currentStep)
      currentStep++
      if (currentStep >= steps.length) {
        clearInterval(interval)
        setTimeout(() => {
          setShowProposal(true)
        }, 2000)
      }
    }, 2000)
  }

  const handleProposalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (proposalAnswer.toLowerCase() === 'oui') {
      setShowWedding(true)
      setShowProposal(false)
    } else if (proposalAnswer.toLowerCase() === 'non') {
      setShowRejection(true)
      setShowProposal(false)
      setRandomQuestionIndex(Math.floor(Math.random() * randomQuestions.length))
    }
  }

  const handleRejectionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (rejectionAnswer.toLowerCase() === 'oui') {
      setShowWedding(true)
      setShowRejection(false)
    } else {
      setRandomQuestionIndex(Math.floor(Math.random() * randomQuestions.length))
      setRejectionAnswer('')
    }
  }

  const cinematicTexts = [
    'emon ?',
    'oh c\'est vrai ?',
    'OH MON AMOUR !!',
    'JE T\'AIME TELLEMENT !!',
  ]

  const randomQuestions = [
    'Quel est ton plat préféré ?',
    'Tu aimes les licornes ?',
    'Combien font 2+2 ?',
    'Tu préfères les chats ou les chiens ?',
    'Quelle est ta couleur favorite ?',
    'Tu sais voler ?',
    'Tu manges des nuages ?',
    'Est-ce que tu ronfles ?',
    'Tu collectionnes les cailloux ?',
    'Tu parles aux poissons ?',
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border-2 border-purple-300">
          <form onSubmit={handleAuthSubmit} className="text-center">
            <h1 className="text-3xl font-bold text-purple-600 mb-6 transform rotate-1">
              QUI ES TU ?
            </h1>
            <input
              type="text"
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              className="px-4 py-2 text-lg border-2 border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 transform -rotate-1"
              placeholder="Dis moi..."
            />
            <button
              type="submit"
              className="block mt-4 mx-auto px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transform rotate-1 hover:scale-105 transition-all"
            >
              ENTRER
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (showCinematic && !showProposal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-300 flex items-center justify-center">
        {cinematicStep < cinematicTexts.length && (
          <div className="text-center">
            <p 
              className={`text-5xl font-bold text-white animate-pulse transition-all duration-1000 ${
                cinematicStep >= 2 ? 'text-red-500 text-7xl animate-bounce' : ''
              }`}
              key={cinematicStep}
            >
              {cinematicTexts[cinematicStep]}
            </p>
            {cinematicStep >= 2 && (
              <div className="mt-8">
                {[...Array(20)].map((_, i) => (
                  <span
                    key={i}
                    className="inline-block text-4xl animate-bounce"
                    style={{
                      animationDelay: `${Math.random() * 2}s`,
                      margin: '0 10px',
                    }}
                  >
                    ❤️
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  if (showProposal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-300 to-red-400 overflow-hidden relative">
        {/* Floating hearts */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl animate-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            💕
          </div>
        ))}

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
          <h1 className="text-9xl font-black text-red-600 mb-8 text-center animate-heartbeat shadow-lg">
            JE T'AIME
          </h1>
          
          <h2 className="text-7xl font-black text-pink-600 mb-8 text-center animate-rainbow">
            JE TE VEUX
          </h2>

          <div className="my-8 text-8xl animate-bounce">
            👫
          </div>

          <div className="bg-white/95 p-8 rounded-lg border-4 border-red-500 shadow-2xl transform hover:scale-105 transition-all">
            <h3 className="text-4xl font-bold text-red-600 text-center mb-6 animate-pulse">
              VEUX-TU M'ÉPOUSER ?
            </h3>
            
            <form onSubmit={handleProposalSubmit} className="text-center">
              <input
                type="text"
                value={proposalAnswer}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProposalAnswer(e.target.value)}
                className="px-6 py-3 text-2xl border-4 border-red-400 rounded-lg focus:outline-none focus:border-red-600 mb-4"
                placeholder="OUI ou NON ?"
              />
              <button
                type="submit"
                className="block mx-auto px-8 py-4 bg-red-500 text-white text-xl rounded-lg hover:bg-red-600 transform hover:scale-110 transition-all animate-pulse"
              >
                RÉPONDRE
              </button>
            </form>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes rainbow {
            0% { color: #ff69b4; }
            25% { color: #ff1493; }
            50% { color: #dc143c; }
            75% { color: #b22222; }
            100% { color: #ff69b4; }
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }
          
          .animate-rainbow {
            animation: rainbow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  if (showRejection) {
    return (
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-8xl mb-8">
            😭😭😭😭😭
          </div>
          
          <h1 className="text-6xl font-bold text-gray-700 mb-8">
            NOOOOOON
          </h1>

          <div className="bg-white/90 p-8 rounded-lg border-4 border-gray-500 shadow-2xl mb-8">
            <p className="text-2xl font-bold text-gray-600 mb-4">
              Bon... une dernière question alors... 😢
            </p>
            <p className="text-xl text-gray-600 mb-6">
              {randomQuestions[randomQuestionIndex]}
            </p>
            
            <form onSubmit={handleRejectionSubmit} className="text-center">
              <input
                type="text"
                value={rejectionAnswer}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRejectionAnswer(e.target.value)}
                className="px-4 py-2 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:border-gray-600 mb-4"
                placeholder="Ta réponse..."
              />
              <button
                type="submit"
                className="block mx-auto px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                RÉPONDRE
              </button>
            </form>
          </div>

          <p className="text-lg text-gray-600">
            (Pssst... tu peux dire "oui" si tu changes d'avis... 🥺)
          </p>
        </div>
      </div>
    )
  }

  if (showWedding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 overflow-hidden relative">
        {/* Wedding confetti */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-fall pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {['🎉', '🎊', '💐', '💒', '👰', '🤵', '💍', '🥂'][Math.floor(Math.random() * 8)]}
          </div>
        ))}

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
          <h1 className="text-9xl font-black text-pink-600 mb-4 text-center animate-bounce">
            OUIIIII !! 
          </h1>
          
          <h2 className="text-6xl font-bold text-purple-600 mb-8 text-center animate-pulse">
            TU AS DIT OUI !!!
          </h2>

          <div className="text-9xl mb-8 animate-spin">
            💍
          </div>

          <div className="text-8xl mb-8 animate-heartbeat">
            👰‍♀️❤️🤵‍♂️
          </div>

          <div className="bg-white/95 p-8 rounded-lg border-4 border-pink-500 shadow-2xl transform animate-bounce mb-8">
            <h3 className="text-4xl font-bold text-pink-600 text-center mb-4">
              NOUS SOMMES MARIÉS !
            </h3>
            <p className="text-2xl text-pink-500 text-center">
              JE T'AIME POUR TOUJOURS ET À JAMAIS ! 💕
            </p>
          </div>

          {/* Wedding messages */}
          <div className="absolute top-20 left-10 transform rotate-12 bg-yellow-200 p-4 rounded-lg border-4 border-pink-500 shadow-lg animate-bounce">
            <p className="text-xl font-bold text-pink-700">ENFIN !</p>
          </div>

          <div className="absolute top-40 right-20 transform -rotate-6 bg-pink-100 p-4 rounded-lg border-4 border-purple-500 shadow-lg animate-pulse">
            <p className="text-lg font-bold text-purple-600">MON CŒUR !</p>
          </div>

          <div className="absolute bottom-32 left-20 transform rotate-6 bg-purple-200 p-4 rounded-lg border-4 border-pink-600 shadow-lg animate-spin">
            <p className="text-lg font-bold text-purple-700">POUR TOUJOURS</p>
          </div>

          <div className="absolute bottom-20 right-10 transform -rotate-12 bg-red-100 p-4 rounded-lg border-4 border-red-500 shadow-lg animate-bounce">
            <p className="text-md font-bold text-red-600">JE T'AIME !</p>
          </div>

          <div className="absolute top-1/2 left-5 transform rotate-45 bg-orange-200 p-3 rounded-lg border-3 border-orange-500 shadow-lg animate-pulse">
            <p className="text-sm font-bold text-orange-700">MA VIE</p>
          </div>

          <div className="absolute top-1/3 right-5 transform -rotate-45 bg-green-200 p-3 rounded-lg border-3 border-green-500 shadow-lg animate-bounce">
            <p className="text-sm font-bold text-green-700">MON AMOUR</p>
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
              opacity: 0.5;
            }
          }
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          
          .animate-fall {
            animation: fall linear infinite;
          }
          
          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  return null
}
