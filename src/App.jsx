import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

export default function App() {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            {/* Background layers */}
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            {/* Main content */}
            <div className="mx-auto max-w-screen-xl px-8">
                <Navbar />
                <Hero />
                <About />
                <Technologies />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}
