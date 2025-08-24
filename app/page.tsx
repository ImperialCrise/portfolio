"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Award,
  Code,
  Brain,
  Gamepad2,
  Building,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

// Date translations
const dateTranslations = {
  en: {
    months: {
      January: "January",
      February: "February",
      March: "March",
      April: "April",
      May: "May",
      June: "June",
      July: "July",
      August: "August",
      September: "September",
      October: "October",
      November: "November",
      December: "December",
    },
    shortMonths: {
      Jan: "Jan",
      Feb: "Feb",
      Mar: "Mar",
      Apr: "Apr",
      May: "May",
      Jun: "Jun",
      Jul: "Jul",
      Aug: "Aug",
      Sep: "Sep",
      Oct: "Oct",
      Nov: "Nov",
      Dec: "Dec",
    },
  },
  fr: {
    months: {
      January: "Janvier",
      February: "Février",
      March: "Mars",
      April: "Avril",
      May: "Mai",
      June: "Juin",
      July: "Juillet",
      August: "Août",
      September: "Septembre",
      October: "Octobre",
      November: "Novembre",
      December: "Décembre",
    },
    shortMonths: {
      Jan: "Jan",
      Feb: "Fév",
      Mar: "Mar",
      Apr: "Avr",
      May: "Mai",
      Jun: "Juin",
      Jul: "Juil",
      Aug: "Août",
      Sep: "Sep",
      Oct: "Oct",
      Nov: "Nov",
      Dec: "Déc",
    },
  },
}

// Translations
const translations = {
  en: {
    // Hero section
    student: "AI Back-End Software Engineer",
    specializing: "Specializing in Machine Learning & AI",
    // Education section
    education: "Education",
    masterDegree: "Master's Degree in Computer Engineering (SCIA)",
    gpa: "GPA: 3.9/4.0 • 2021 – 2026",
    exchangeSemester: "Academic Exchange Semester",
    // Experience section
    experience: "Professional Experience",
    thomsonComputing: "Thomson Computing",
    leadBackend: "Lead Back-end Engineer",
    ledTeam: "Led a cross-functional team of back-end and front-end developers to design and build a secure, store-like software platform from scratch",
    engineered: "Engineered a highly reliable solution pre-installed on all Thomson computers, with deep Windows integration",
    implementedPipelines: "Implemented pipelines and automated deployment processes to ensure robustness, scalability, and security",
    aiBackend: "AI Back-end Engineer",
    designed: "Designed and developed AI-based back-end solutions for clients such as Amadeus",
    contributed: "Contributed to the creation of innovative AI models and deployment pipelines",
    itConsultant: "IT Consultant & Freelance Developer",
    delivered: "Delivered AI and back-end solutions for clients like Vinci Construction and Thomson",
    optimized: "Optimized performance of critical applications and ensured their reliability",
    rdEngineer: "R&D Software Engineer Intern",
    developed: "Developed an SPI driver for communication between medical devices",
    participated: "Participated in software development and system integration",
    // Projects section
    projects: "Featured Projects",
    personalProject: "Personal Project",
    created: "Created a real-time strategy (RTS) mobile game with over 55,000 players worldwide",
    managed: "Managed full-stack development, focusing on scalability and back-end optimization",
    players: "Players",
    visitProject: "Visit Project",
    academicProjects: "Academic Projects",
    tiger: "Implemented a complete compiler for the Tiger language in C++",
    ocr: "Developed a Sudoku solver using optical character recognition",
    shell: "Built a functional Unix shell in C",
    // Skills section
    skills: "Technical Skills",
    aiMl: "AI / Machine Learning",
    programming: "Programming",
    // Awards section
    awards: "Awards & Leadership",
    presidentStudentCouncil: "President of Student Council",
    hackathonWinner: "Hackathon Winner",
    aiResearch: "AI Research Enthusiast",
    continuousLearning: "Continuous Learning",
    // Contact section
    connect: "Let's Connect",
    readyToCollaborate: "Ready to collaborate on innovative AI projects or discuss opportunities",
    languages: "Languages",
    languagesList: "French (Native), English (TOEIC 850)",
    // Footer
    craftedWith: "Crafted with passion for innovation",
    // Language selector
    languageSelector: "Language",
  },
  fr: {
    // Hero section
    student: "Ingénieur Logiciel IA Back-end",
    specializing: "Spécialisé en Machine Learning & IA",
    // Education section
    education: "Formation",
    masterDegree: "Diplôme d'Ingenieur en Informatique (Majeure SCIA)",
    gpa: "GPA: 3.7/4.0 • 2021 – 2026",
    exchangeSemester: "Semestre d'échange académique",
    // Experience section
    experience: "Expérience Professionnelle",
    thomsonComputing: "Thomson Computing",
    leadBackend: "Ingénieur Back-end Principal",
    ledTeam: "Direction d'une équipe transfonctionnelle de développeurs back-end et front-end pour concevoir et construire une plateforme logicielle sécurisée de type store à partir de zéro",
    engineered: "Conception d'une solution hautement fiable pré-installée sur tous les ordinateurs Thomson, avec une intégration Windows approfondie",
    implementedPipelines: "Implémentation de pipelines et de processus de déploiement automatisés pour assurer la robustesse, l'évolutivité et la sécurité",
    aiBackend: "Ingénieur IA Back-end",
    designed: "Conception et développement de solutions back-end basées sur l'IA pour des clients comme Amadeus",
    contributed: "Contribution à la création de modèles d'IA innovants et de pipelines de déploiement",
    itConsultant: "Consultant IT & Développeur Freelance",
    delivered: "Fourniture de solutions d'IA et de back-end pour des clients comme Vinci Construction et Thomson",
    optimized: "Optimisation des performances d'applications critiques et garantie de leur fiabilité",
    rdEngineer: "Ingénieur R&D Logiciel Stagiaire",
    developed: "Développement d'un pilote SPI pour la communication entre dispositifs médicaux",
    participated: "Participation au développement logiciel et à l'intégration système",
    // Projects section
    projects: "Projets Phares",
    personalProject: "Projet Personnel",
    created: "Création d'un jeu mobile de stratégie en temps réel (RTS) avec plus de 55 000 joueurs dans le monde",
    managed: "Gestion du développement full-stack, en mettant l'accent sur l'évolutivité et l'optimisation du back-end",
    players: "Joueurs",
    visitProject: "Voir le Projet",
    academicProjects: "Projets Académiques",
    tiger: "Implémentation d'un compilateur complet pour le langage Tiger en C++",
    ocr: "Développement d'un solveur de Sudoku utilisant la reconnaissance optique de caractères",
    shell: "Construction d'un shell Unix fonctionnel en C",
    // Skills section
    skills: "Compétences Techniques",
    aiMl: "IA / Machine Learning",
    programming: "Programmation",
    // Awards section
    awards: "Distinctions & Leadership",
    presidentStudentCouncil: "Président du Conseil Étudiant",
    hackathonWinner: "Vainqueur de Hackathon",
    aiResearch: "Passionné de Recherche en IA",
    continuousLearning: "Apprentissage Continu",
    // Contact section
    connect: "Restons en Contact",
    readyToCollaborate: "Prêt à collaborer sur des projets innovants d'IA ou discuter d'opportunités",
    languages: "Langues",
    languagesList: "Français (Natif), Anglais (TOEIC 850)",
    // Footer
    craftedWith: "Créé avec passion pour l'innovation",
    // Language selector
    languageSelector: "Langue",
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const t = translations[language]
  const dt = dateTranslations[language]

  // Function to translate dates
  const translateDate = (dateString: string) => {
    let translatedDate = dateString

    // Translate full month names
    Object.entries(dt.months).forEach(([en, translated]) => {
      translatedDate = translatedDate.replace(new RegExp(en, "g"), translated)
    })

    // Translate short month names
    Object.entries(dt.shortMonths).forEach(([en, translated]) => {
      translatedDate = translatedDate.replace(new RegExp(en, "g"), translated)
    })

    return translatedDate
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-x-hidden relative">
      <FloatingParticles />

      {/* Animated background gradient */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Language Selector (Fixed) */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-md p-2 rounded-full">
          <Button
            size="sm"
            variant={language === "en" ? "default" : "ghost"}
            className={`rounded-full px-3 ${language === "en" ? "bg-purple-600" : "text-gray-300"}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </Button>
          <Button
            size="sm"
            variant={language === "fr" ? "default" : "ghost"}
            className={`rounded-full px-3 ${language === "fr" ? "bg-purple-600" : "text-gray-300"}`}
            onClick={() => setLanguage("fr")}
          >
            FR
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />

        {/* Light rays effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-purple-400/50 via-transparent to-transparent transform -translate-x-1/2 animate-pulse" />
          <div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform -translate-y-1/2 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <motion.div
          className="text-center z-10 px-4 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
            }}
          >
            Emre ULUSOY
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
              Emre ULUSOY
            </div>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t.student}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl mb-12 text-purple-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
            }}
          >
            {t.specializing}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
            >
              <a href="mailto:emre.ulusoy@epita.fr">
                <Mail className="mr-2 h-4 w-4" />
                emre.ulusoy@epita.fr
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+33767794622">
                <Phone className="mr-2 h-4 w-4" />
                +33 7 67 79 46 22
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
            style={{
              filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))",
            }}
          >
            {t.education}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="bg-purple-900/30 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className="p-2 rounded-full bg-purple-500/20 mr-3"
                      style={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
                    >
                      <GraduationCap className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">EPITA – School of Computer Engineering</h3>
                      <p className="text-purple-300">Paris, France</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{t.masterDegree}</p>
                  <p className="text-purple-400 font-semibold mb-4">{t.gpa}</p>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Deep Learning", "NLP", "Data Science", "Algorithms"].map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="bg-purple-800/50 text-purple-200 hover:bg-purple-700/50 transition-colors duration-200 hover:shadow-sm hover:shadow-purple-400/25"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="bg-pink-900/30 backdrop-blur-sm border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className="p-2 rounded-full bg-pink-500/20 mr-3"
                      style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)" }}
                    >
                      <MapPin className="h-8 w-8 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Ajman University</h3>
                      <p className="text-pink-300">Ajman, United Arab Emirates</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{t.exchangeSemester}</p>
                  <p className="text-pink-400 font-semibold">{translateDate("January 2022 – June 2022")}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-950/30 to-black relative">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
            style={{
              filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))",
            }}
          >
            {t.experience}
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                company: t.thomsonComputing,
                role: t.leadBackend,
                period: translateDate("August 2025 – Present"),
                location: "Paris, France",
                description: [t.ledTeam, t.engineered, t.implementedPipelines],
                icon: Building,
                color: "purple",
              },
              {
                company: "Xo7",
                role: t.aiBackend,
                period: translateDate("August 2024 – Present"),
                location: "Paris, France",
                description: [t.designed, t.contributed],
                icon: Brain,
                color: "pink",
              },
              {
                company: "Crystal",
                role: t.itConsultant,
                period: translateDate("October 2023 – Present"),
                location: "Paris, France",
                description: [t.delivered, t.optimized],
                icon: Code,
                color: "purple",
              },
              {
                company: "Swallis Medical",
                role: t.rdEngineer,
                period: translateDate("January 2023 – June 2023"),
                location: "Strasbourg, France",
                description: [t.developed, t.participated],
                icon: Building,
                color: "pink",
              },
            ].map((exp, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`bg-${exp.color}-900/30 backdrop-blur-sm border-${exp.color}-500/30 hover:border-${exp.color}-400/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-${exp.color}-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-${exp.color}-600 to-${exp.color === "purple" ? "pink" : "purple"}-600 rounded-lg blur opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                  />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-full bg-${exp.color}-500/20 relative`}
                        style={{
                          boxShadow: `0 0 15px rgba(${exp.color === "purple" ? "168, 85, 247" : "236, 72, 153"}, 0.3)`,
                        }}
                      >
                        <exp.icon className={`h-6 w-6 text-${exp.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                            <p className={`text-${exp.color}-300 font-medium`}>{exp.role}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-300">{exp.period}</p>
                            <p className="text-gray-400 text-sm">{exp.location}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start">
                              <span className={`text-${exp.color}-400 mr-2`}>•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
            style={{
              filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))",
            }}
          >
            {t.projects}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="bg-purple-900/30 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className="p-2 rounded-full bg-purple-500/20 mr-3"
                      style={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
                    >
                      <Gamepad2 className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Pixel Empire</h3>
                      <p className="text-purple-300">{t.personalProject}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{translateDate("June 2023 – September 2024")}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {t.created}
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {t.managed}
                    </li>
                  </ul>
                  <div className="flex items-center justify-between mt-4">
                    <Badge
                      className="bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200"
                      style={{ boxShadow: "0 0 10px rgba(168, 85, 247, 0.4)" }}
                    >
                      55,000+ {t.players}
                    </Badge>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-purple-400 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
                    >
                      <a href="https://www.privilegedlab.com" target="_blank" rel="noopener noreferrer">
                        {t.visitProject}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="bg-purple-900/30 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className="p-2 rounded-full bg-pink-500/20 mr-3"
                      style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)" }}
                    >
                      <Code className="h-8 w-8 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{t.academicProjects}</h3>
                      <p className="text-pink-300">EPITA</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="text-gray-300">
                      <span className="text-pink-400 font-semibold">TIGER:</span> {t.tiger}
                    </li>
                    <li className="text-gray-300">
                      <span className="text-pink-400 font-semibold">OCR:</span> {t.ocr}
                    </li>
                    <li className="text-gray-300">
                      <span className="text-pink-400 font-semibold">42sh:</span> {t.shell}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-purple-950/30 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
            style={{
              filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))",
            }}
          >
            {t.skills}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="bg-purple-900/30 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div
                      className="p-2 rounded-full bg-purple-500/20 mr-3"
                      style={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
                    >
                      <Brain className="h-6 w-6 text-purple-400" />
                    </div>
                    {t.aiMl}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "MLOps", "Fine-tuning"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          className="bg-purple-600/50 text-purple-200 hover:bg-purple-600/70 transition-all duration-200 hover:scale-105 hover:shadow-sm hover:shadow-purple-400/25"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="bg-purple-900/30 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div
                      className="p-2 rounded-full bg-pink-500/20 mr-3"
                      style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)" }}
                    >
                      <Code className="h-6 w-6 text-pink-400" />
                    </div>
                    {t.programming}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["C", "C#", "C++", "Java", "Python", "PHP", "SQL", "Git", "Bash"].map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-pink-600/50 text-pink-200 hover:bg-pink-600/70 transition-all duration-200 hover:scale-105 hover:shadow-sm hover:shadow-pink-400/25"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Awards & Leadership */}
      <section className="py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
            style={{
              filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))",
            }}
          >
            {t.awards}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: t.presidentStudentCouncil,
                subtitle: "EPITA Strasbourg",
                period: translateDate("Feb 2021 - Feb 2022"),
                icon: Award,
                color: "purple",
              },
              {
                title: t.hackathonWinner,
                subtitle: "La Nuit de l'Info 2022 & others",
                icon: Award,
                color: "pink",
              },
              {
                title: t.aiResearch,
                subtitle: t.continuousLearning,
                icon: Brain,
                color: "purple",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`bg-${item.color}-900/30 backdrop-blur-sm border-${item.color}-500/30 hover:border-${item.color}-400/50 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden group`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-${item.color}-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-${item.color}-600 to-${item.color === "purple" ? "pink" : "purple"}-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <CardContent className="p-6 relative z-10">
                    <div
                      className={`p-3 rounded-full bg-${item.color}-500/20 mx-auto mb-4 w-fit`}
                      style={{
                        boxShadow: `0 0 15px rgba(${item.color === "purple" ? "168, 85, 247" : "236, 72, 153"}, 0.3)`,
                      }}
                    >
                      <item.icon className={`h-12 w-12 text-${item.color}-400`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className={`text-${item.color}-300`}>{item.subtitle}</p>
                    {item.period && <p className="text-gray-400 text-sm mt-2">{item.period}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-950/50 to-black relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
            style={{
              filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))",
            }}
          >
            {t.connect}
          </motion.h2>
          <motion.p className="text-xl text-gray-300 mb-12" variants={fadeInUp}>
            {t.readyToCollaborate}
          </motion.p>
          <motion.div className="flex flex-wrap justify-center gap-6" variants={fadeInUp}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
            >
              <a href="mailto:emre.ulusoy@epita.fr">
                <Mail className="mr-2 h-5 w-5" />
                emre.ulusoy@epita.fr
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <a href="https://github.com/ImperialCrise" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-pink-500 text-pink-300 hover:bg-pink-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <a href="https://linkedin.com/in/emre-ulusoy1" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
          <motion.div className="mt-12 text-center" variants={fadeInUp}>
            <p className="text-gray-400">
              <span className="text-purple-400">{t.languages}:</span> {t.languagesList}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Emre ULUSOY. {t.craftedWith}</p>
        </div>
      </footer>
    </div>
  )
}
