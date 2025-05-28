import bgImage from '../assets/bg-experience.jpg';
import AnimatedTextAbout from '../components/AnimatedTextAbout';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center h-screen bg-full z-[-1]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Section Dekstop */}
      <div className="hidden md:flex h-screen bg-black/70 px-10">
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <AnimatedTextAbout />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-white text-2xl font-mono text-center hover:bg-black mt-10 bg-gray-800 p-2 rounded-lg"
          >
            Hi! I’m Dimas Murdiyana, a passionate Front-End Developer who loves
            turning ideas into meaningful digital experiences. For me, great
            development isn’t just about writing code—it’s about crafting
            interfaces that feel intuitive, responsive, and human. I’m a fast
            learner, detail-oriented, and always open to challenges that push me
            to grow. I believe in continuous improvement, clear communication,
            and building with purpose. Right now, I’m focused on growing my
            portfolio and excited to join a team where I can contribute, learn,
            and create impact. Let’s build something great together.
          </motion.p>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="flex md:hidden flex-col h-screen bg-black/80">
        {' '}
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <AnimatedTextAbout />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-white font-mono text-center"
          >
            Hi! I’m Dimas Murdiyana, a passionate Front-End Developer who loves
            turning ideas into meaningful digital experiences. For me, great
            development isn’t just about writing code—it’s about crafting
            interfaces that feel intuitive, responsive, and human. I’m a fast
            learner, detail-oriented, and always open to challenges that push me
            to grow. I believe in continuous improvement, clear communication,
            and building with purpose. Right now, I’m focused on growing my
            portfolio and excited to join a team where I can contribute, learn,
            and create impact. Let’s build something great together.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
