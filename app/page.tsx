'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from "lucide-react";
import Head from 'next/head'
import Image from "next/image"

interface TimelineStep {
  title: string;
  desc: string;
  period: string;
}

interface ResearchAxis {
  title: string;
  desc: string;
}

interface Publication {
  title: string;
  venue: string;
  link: string;
  desc: string;
}

interface Project {
  title: string;
  desc: string;
  link?: string;
  visibility: "public" | "private";
  status: "in progress" | "done";
}

export default function Page() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(darkMode ? 'dark' : 'light')
  }, [])

  const timeline: TimelineStep[] = [
    {
      title: "Lycée Schweitzer, Le Raincy",
      desc: "Double degree: French Scientific Baccalaureate + German Abitur (Abibac section)",
      period: "2017-2020",
    },
    {
      title: "Lycée Raspail, Paris 14e",
      desc: "CPGE PCSI",
      period: "2020-2021",
    },
    {
      title: "Lycée Carnot, Paris 17e",
      desc: "CPGE PC",
      period: "2021-2022",
    },
    {
      title: "ESILV Paris, Courbevoie",
      desc: "Engineering programme in Connected Objects and Cybersecurity",
      period: "2022-2025",
    },
    {
      title: "Thales Digital Factory, Paris",
      desc: "Cybersecurity, Threats and Vulnerabilities Engineering Apprentice",
      period: "2023-2025",
    },
    {
      title: "HeadMind Partners Belgium, Bruxelles",
      desc: "Cybersecurity and Security Risk Consultant Internship",
      period: "2025",
    },
    {
      title: "Thales Digital Factory, Paris",
      desc: "PhD thesis",
      period: "2025-présent",
    },
  ];

  const researchAxes: ResearchAxis[] = [
    {
      title: "Multi-criteria modelling of vulnerabilities (graphs and hypergraphs)",
      desc: "Using graphs to represent CVEs, their attributes, and complex relationships, enabling in-depth analysis."
    },
    {
      title: "Community analysis and spectral partitioning",
      desc: "Study of vulnerability clusters to identify similar families or behaviours."
    },
    {
      title: "Prediction via graph learning",
      desc: "Using graph machine learning to anticipate the evolution, exploitation and criticality of vulnerabilities."
    }
  ]

  const publications: Publication[] = [
    {
      title: "Beyond the CVSS: Rethinking the Contextualisation of CVEs in a Connected World",
      venue: "ECCWS 2024",
      link: "https://www.researchgate.net/publication/393048365_Beyond_the_CVSS_Rethinking_the_Contextualisation_of_CVEs_in_a_Connected_World",
      desc: "In the context of globalized information technology, managing the ever-increasing number of CVEs has become one of the biggest challenges for security teams. It is no longer enough to rely solely on CVSS scores: effective vulnerability management requires contextualisation, taking into account both technical and business impacts. This document explores maturity levels in vulnerability management, the role of new indicators, and the growing dependence on the NVD, whose disruption in 2024 highlighted critical weaknesses in current processes."
    }
  ]

  const projects: Project[] = [
    {
      title: "Automated CVE detection and prioritisation system",
      desc: "Development in Python of a tool packaged under Linux that automatically analyses an inventory of assets and identifies associated vulnerabilities. CVEs are prioritised according to several criteria (CVSS, context, EPSS, available exploits, asset criticality) in order to establish a relevant patching order. The tool generates a daily summary sent by email to security teams and produces a spreadsheet consolidating all the results.",
      link: "#",
      visibility: "private",
      status: "done"
    },
    {
      title: "Analysis of zero-day vulnerabilities and study of their patterns",
      desc: "Study of the behaviour of zero-day vulnerabilities through the analysis of several databases (NVD, MITRE, ExploitDB, ZeroDay Initiative, etc.). Extraction of patterns and trends in order to anticipate future critical vulnerabilities.",
      link: "#",
      visibility: "public",
      status: "in progress"
    }
  ]

  return (
    <>
      <Head>
        <title>Myriam Ouraou - Portfolio</title>
        <meta name="description" content="Portfolio of Myriam Ouraou, engineer and PhD student in cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={theme === 'dark' ? 'dark' : ''} style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="min-h-screen bg-white dark:bg-[#0b0b10] text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Myriam Ouraou - Portfolio
          </h1>
          <div className="flex items-center gap-4">
            {/* Icônes réseaux */}
            <a
              href="https://www.linkedin.com/in/myriam-ouraou/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900 transition"
            >
              <Linkedin className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </a>
            <a
              href="https://github.com/dothrak"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900 transition"
            >
              <Github className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </a>

            {/* Bouton toggle dark/light */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Switch between light and dark themes"
              className="px-3 py-1 rounded-full border border-pink-300 dark:border-pink-600 bg-pink-50 dark:bg-transparent hover:scale-105 transition-transform"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </header>

          <main className="max-w-6xl mx-auto px-6 pb-24">
            {/* Hero section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12">
              <div className="md:col-span-2">
                <p className="uppercase text-sm tracking-wider text-pink-600 dark:text-pink-400">Cybersecurity · Vulnerabilities · Threat Intelligence</p>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Engineer - PhD student</h2>
                <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                  I am studying the prioritisation and optimisation of vulnerability management through graph and hypergraph learning in order to provide more context and leverage for the industry.
                </p>

                {/* Languages */}
                <div className="mt-4 flex gap-4 flex-wrap">
                  <span className="flex items-center gap-2 bg-pink-50/50 dark:bg-pink-900/20 px-3 py-1 rounded-full text-sm">
                    🇫🇷 Français
                  </span>
                  <span className="flex items-center gap-2 bg-pink-50/50 dark:bg-pink-900/20 px-3 py-1 rounded-full text-sm">
                    🇬🇧 English
                  </span>
                  <span className="flex items-center gap-2 bg-pink-50/50 dark:bg-pink-900/20 px-3 py-1 rounded-full text-sm">
                    🇩🇪 Deutsch
                  </span>
                </div>

                <div className="mt-6 flex gap-4">
                  <a href="#publications" className="px-5 py-2 rounded-full border border-pink-300 dark:border-pink-600">My publications</a>
                  <a href="#about" className="px-5 py-2 rounded-full bg-pink-500 text-white">Find out more</a>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-pink-100 dark:ring-pink-900">
                  <Image
                    src="/pp.jpg"
                    alt="Portrait"
                    width={224}
                    height={224}
                    className="rounded-2xl object-cover shadow-2xl ring-4 ring-pink-100 dark:ring-pink-900"
                  />
                </div>
              </div>
            </section>

            {/* Journey section */}
            <section id="about" className="py-12 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-8 text-center">Journey</h3>

              <div className="relative flex items-start justify-between">
                {/* Line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-pink-300 dark:bg-pink-600"></div>

                {timeline.map((step, i) => (
                  <div key={i} className="flex flex-col items-center relative z-10 text-center w-40">
                    {/* Point */}
                    <span className="w-4 h-4 rounded-full bg-pink-500 dark:bg-pink-400 border-2 border-white dark:border-gray-900 mb-2"></span>
                    {/* Date */}
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{step.period}</p>
                    {/* Title */}
                    <h4 className="text-base font-semibold">{step.title}</h4>
                    {/* Description */}
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Caption */}
              <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                <p><strong>CPGE</strong> = Preparatory class for French grandes écoles</p>
                <p><strong>PCSI</strong> = Physics, Chemistry and Engineering Science</p>
                <p><strong>PC</strong> = Physics and Chemistry</p>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex justify-center gap-4">
                <a href="#contact" className="px-4 py-2 bg-pink-500 text-white rounded-lg">Contact me</a>
              </div>
            </section>

            {/* Research axes */}
            <section id="research" className="py-8">
              <h3 className="text-2xl font-semibold">Research areas</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {researchAxes.map((a, i) => (
                  <article key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <h4 className="font-semibold">{a.title}</h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section id="publications" className="py-8 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-semibold">Publications</h3>
              <div className="mt-6 space-y-4">
                {publications.map((p, i) => (
                  <div key={i} className="p-4 rounded-lg bg-pink-50/40 dark:bg-transparent border border-pink-100 dark:border-pink-900">
                    <a href={p.link} className="text-lg font-semibold hover:underline" target="_blank" rel="noreferrer">{p.title}</a>
                    <p className="text-sm text-pink-600 dark:text-pink-400 mt-1">{p.venue}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-8">
              <h3 className="text-2xl font-semibold">Projects</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{p.title}</h4>
                      <span
                        className={`px-3 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                          p.status === "done"
                            ? "bg-green-200 text-green-800"
                            : "bg-orange-200 text-orange-800"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>

                    <div className="mt-4">
                      {p.visibility === "public" && p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-pink-600 dark:text-pink-400 hover:underline inline-flex items-center gap-1"
                        >
                          View ↗
                        </a>
                      ) : (
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                          Company project
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-12 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-semibold text-center">Contact</h3>
              <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
                I am open to collaborations, conferences, or questions. Feel free to contact me!
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">

                {/* Bouton Email */}
                <a
                  href="mailto:myriam.ouraou@gmail.com"
                  className="px-6 py-3 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
                >
                  Send an email
                </a>

                {/* Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/myriam-ouraou/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900 transition"
                  >
                    <Linkedin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </a>
                  <a
                    href="https://github.com/dothrak"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900 transition"
                  >
                    <Github className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-4 py-0 text-center text-sm text-slate-500">© {new Date().getFullYear()} Myriam Ouraou - All rights reserved</footer>
          </main>
        </div>

        <style jsx global>{`
          :root {
            --pink-50: #fff5f7;
            --pink-100: #ffd1e6;
            --pink-300: #ff66b2;
            --pink-500: #ff2d9c;
            --pink-900: #7a0236;
          }
          .dark .bg-pink-50 { background-color: rgba(255,45,156,0.06); }
          .dark .ring-pink-100 { box-shadow: 0 0 0 4px rgba(255,45,156,0.08); }
        `}</style>
      </div>
    </>
  )
}
