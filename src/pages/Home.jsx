import { Themetoggle } from "../components/Themetoggle";
import {StarBackground} from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";


export const Home = () =>{
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme toggle */}
        <Themetoggle />
        {/*Background Effects */}
        <StarBackground />
        {/*Navbar */}
        <NavBar />
        {/*main content */}
        <main>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </main>
        {/*Footer */}
        <Footer />
    </div>
    );
};