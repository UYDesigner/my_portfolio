import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Profile from './components/sections/Profile';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import GithubActivity from './components/sections/GithubActivity';
import CallToAction from './components/sections/CallToAction';
import Quote from './components/sections/Quote';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    // reducedMotion="user" disables transform/layout animations for users who request it.
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <div className="mx-auto min-h-screen max-w-[800px] border-x border-dashed border-line pt-12">
        <main id="main">
          <Profile />
          <About />
          <Contact />
          <Projects />
          <TechStack />
          <GithubActivity />
          <CallToAction />
          <Quote />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
