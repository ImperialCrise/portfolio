'use client'

import React, { useState, useEffect } from 'react'

export default function EmonPage() {
  const [input, setInput] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showCinematic, setShowCinematic] = useState(false)
  const [cinematicStep, setCinematicStep] = useState(0)
  const [showProposal, setShowProposal] = useState(false)
  const [showContract, setShowContract] = useState(false)
  const [showRejection, setShowRejection] = useState(false)
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(0)

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

  const handleProposalYes = () => {
    setShowContract(true)
    setShowProposal(false)
  }

  const handleProposalNo = () => {
    setShowRejection(true)
    setShowProposal(false)
    setRandomQuestionIndex(Math.floor(Math.random() * randomQuestions.length))
  }

  const handleRejectionYes = () => {
    setShowContract(true)
    setShowRejection(false)
  }

  const handleRejectionNo = () => {
    setRandomQuestionIndex(Math.floor(Math.random() * randomQuestions.length))
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
            
            <div className="flex gap-8 justify-center">
              <button
                onClick={handleProposalYes}
                className="px-12 py-6 bg-green-500 text-white text-3xl font-bold rounded-lg hover:bg-green-600 transform hover:scale-110 transition-all animate-pulse shadow-lg"
              >
                OUI !! 💍
              </button>
              <button
                onClick={handleProposalNo}
                className="px-12 py-6 bg-red-500 text-white text-3xl font-bold rounded-lg hover:bg-red-600 transform hover:scale-110 transition-all shadow-lg"
              >
                NON 😔
              </button>
            </div>
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
            
            <div className="flex gap-6 justify-center">
              <button
                onClick={handleRejectionYes}
                className="px-8 py-4 bg-green-500 text-white text-xl font-bold rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-lg"
              >
                OUI 💕
              </button>
              <button
                onClick={handleRejectionNo}
                className="px-8 py-4 bg-gray-500 text-white text-xl font-bold rounded-lg hover:bg-gray-600 transform hover:scale-105 transition-all shadow-lg"
              >
                NON 😐
              </button>
            </div>
          </div>

          <p className="text-lg text-gray-600">
            (Pssst... tu peux dire "oui" si tu changes d'avis... 🥺)
          </p>
        </div>
      </div>
    )
  }

  if (showContract) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-100 flex items-center justify-center p-8">
        {/* Hidden YouTube video for wedding music */}
        <iframe
          src="https://www.youtube.com/embed/IWgcqu4gKwQ?autoplay=1&loop=1&playlist=IWgcqu4gKwQ&controls=0&showinfo=0&rel=0&modestbranding=1&mute=0"
          allow="autoplay; encrypted-media"
          className="absolute -left-[9999px] opacity-0 pointer-events-none"
          width="1"
          height="1"
          title="Wedding Music"
        />
        
        {/* Music control hint */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg z-50">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            🎵 <span>Musique de mariage en cours...</span>
          </p>
        </div>

        {/* Celebration confetti */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-fall pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {['🎉', '🎊', '💐', '💍', '❤️'][Math.floor(Math.random() * 5)]}
          </div>
        ))}

        <div className="bg-white border-8 border-gold shadow-2xl max-w-4xl w-full p-12 text-center relative" style={{borderColor: '#FFD700'}}>
          {/* Header */}
          <div className="border-b-4 border-gold pb-6 mb-8" style={{borderColor: '#FFD700'}}>
            <h1 className="text-5xl font-serif font-bold text-gray-800 mb-2">
              CONTRAT DE MARIAGE
            </h1>
            <p className="text-xl text-gray-600 font-serif">
              Certificat Officiel d'Union
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-left">
            <p className="text-2xl leading-relaxed font-serif text-gray-700">
              Par la présente, nous certifions que
            </p>

            <div className="bg-pink-50 border-4 border-pink-300 p-6 rounded-lg">
              <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
                EMRE ❤️ EMON
              </h2>
              <p className="text-xl text-center text-pink-500 font-serif">
                sont officiellement unis par les liens sacrés du mariage
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 my-8">
              <div className="text-center">
                <p className="text-lg font-serif text-gray-600 mb-2">Époux</p>
                <div className="border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-gray-800">EMRE</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">Signature</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-serif text-gray-600 mb-2">Époux</p>
                <div className="border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-gray-800">EMON</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">Signature</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg font-serif text-gray-700">
                Cette union est scellée avec amour et tendresse
              </p>
              <p className="text-2xl text-red-500 font-bold">
                POUR TOUJOURS ET À JAMAIS 💕
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 font-serif text-center">
                Date: {new Date().toLocaleDateString('fr-FR')}
              </p>
              <p className="text-sm text-gray-600 font-serif text-center mt-2">
                Lieu: Dans nos cœurs 💖
              </p>
            </div>
          </div>

          {/* Official stamp */}
          <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full transform rotate-12 animate-pulse">
            <p className="text-lg font-bold">OFFICIEL</p>
          </div>

          {/* Love decorations */}
          <div className="absolute top-4 left-4 text-4xl animate-heartbeat">💍</div>
          <div className="absolute top-4 right-16 text-4xl animate-heartbeat">💍</div>
          <div className="absolute bottom-4 left-4 text-4xl animate-spin">❤️</div>
          <div className="absolute bottom-4 right-4 text-4xl animate-spin">❤️</div>
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
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          .animate-fall {
            animation: fall linear infinite;
          }
          
          .animate-heartbeat {
            animation: heartbeat 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  return null
}
