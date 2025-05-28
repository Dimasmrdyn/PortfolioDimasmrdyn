import { Github, Linkedin, Mail } from 'lucide-react';
import bgImage from '../assets/sectionbg1.jpg';
import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';
import AnimatedTextMobile from '../components/AnimatedTextMobile';

const designerText = 'DESIGNER';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.6,
        duration: 0.6,
      },
    },
  };

  const containerSocials = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 3.2, // sesuaikan dengan akhir animasi sebelumnya
      },
    },
  };

  const socialIcon = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div
      className="absolute inset-0 bg-cover bg-center h-screen bg-full z-[-1]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Desktop Section */}
      <div className="hidden md:flex flex-col h-screen bg-black/70">
        <div className="flex flex-col items-center justify-center h-screen">
          {/* Animated FRONTEND */}
          <AnimatedText />
          {/* UI UX DESIGNER */}
          <motion.div
            className="flex gap-3 text-9xl text-lime-500 mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 1.5, // Delay after FRONTEND animation ends
                },
              },
            }}
          >
            {/* UI */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              UI
            </motion.span>

            {/* UX */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              UX
            </motion.span>

            {/* DESIGNER */}
            {designerText.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="font-mono text-2xl pl-2 text-white mt-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            welcome to my portfolio website, have a nice day
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-7 text-white"
            variants={containerSocials}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://github.com/Dimasmrdyn/"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIcon}
            >
              <Github size={40} className="mt-5 pl-2" />
            </motion.a>

            <motion.a href="mailto:dimasmasdev@gmail.com" variants={socialIcon}>
              <Mail size={40} className="mt-5 pl-2" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/dimas-murdiyana"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIcon}
            >
              <Linkedin size={40} className="mt-5 pl-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="flex md:hidden flex-col h-screen bg-black/80">
        <div className="flex flex-col items-center justify-center h-screen">
          {/*Front End */}
          <AnimatedTextMobile />
          {/* UI UX DESIGNER */}
          <motion.div
            className="flex gap-3 text-4xl text-lime-500 mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 1.5, // Delay after FRONTEND animation ends
                },
              },
            }}
          >
            {/* UI */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              UI
            </motion.span>

            {/* UX */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              UX
            </motion.span>

            {/* DESIGNER */}
            {designerText.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="font-mono text-center pl-2 text-white mt-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            welcome to my portfolio website, have a nice day
          </motion.p>

          <motion.div
            className="flex items-center gap-7 text-white"
            variants={containerSocials}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://github.com/Dimasmrdyn/"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIcon}
            >
              <Github size={40} className="mt-5 pl-2" />
            </motion.a>

            <motion.a href="mailto:dimasmasdev@gmail.com" variants={socialIcon}>
              <Mail size={40} className="mt-5 pl-2" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/dimas-murdiyana"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIcon}
            >
              <Linkedin size={40} className="mt-5 pl-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
