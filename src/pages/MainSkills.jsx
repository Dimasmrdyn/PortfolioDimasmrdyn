import bgImage from '../assets/bg-experience.jpg';
import { motion } from 'framer-motion';

const MainSkills = () => {
  const skills = [
    {
      title: 'Tailwind CSS',
      description:
        'Mastered utility-first classes, responsive layout, custom themes, and animations. Confident in building UI fast and clean without writing custom CSS.',
    },
    {
      title: 'React',
      description:
        'Experienced in JSX, props, state, conditional rendering, event handling, reusable components, hooks (useState, useEffect, useCallback), and routing.',
    },
    {
      title: 'HTML',
      description:
        'Strong understanding of semantic HTML5, accessibility (ARIA), forms, and layout structure. Able to build clean and structured markup.',
    },
    {
      title: 'JavaScript',
      description:
        'Proficient in ES6+, DOM manipulation, array/object methods, event handling, asynchronous programming (Promise, async/await), and basic algorithm logic.',
    },
    {
      title: 'CSS',
      description:
        'Capable of writing modern, responsive CSS. Familiar with Flexbox, Grid, transitions, animations, and using CSS to enhance UI feel before Tailwind.',
    },
  ];
  return (
    <div
      className="absolute inset-0 bg-cover bg-center h-screen bg-full z-[-1]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dekstop */}
      <div className="hidden md:flex h-screen bg-black/80 items-center justify-center">
        <section className="py-16 text-white" id="skills">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.2,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-black cursor-pointer"
              >
                <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <section className="py-16 text-white bg-black/80" id="skills">
          <h2 className="text-2xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-6xl mx-auto grid gap-8 px-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.2,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl p-6 hover:bg-black cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSkills;
