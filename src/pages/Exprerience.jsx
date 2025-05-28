import bgImage from '../assets/bg-experience.jpg';
import { motion } from 'framer-motion';

const Exprience = () => {
  const experiences = [
    {
      title: 'Restaurant Website',
      description:
        'Designed and developed a responsive landing page for a restaurant, focusing on elegant visuals, user-friendly layout, and compelling calls-to-action.',
      year: '2022',
    },
    {
      title: 'Spatu Ku – Shoe Store Website',
      description:
        'Built a modern e-commerce shoe website using React and Tailwind CSS. Featured dynamic product display, responsive grid, and clean UI/UX.',
      year: '2023',
    },
    {
      title: 'Skincare Landing Page',
      description:
        'Created a professional landing page for a skincare brand, emphasizing visual storytelling, testimonials, and structured layout for service promotion.',
      year: '2025',
    },
  ];

  // Animation variants for card entrance
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <div
      className="absolute inset-0 bg-cover bg-center min-h-screen bg-full z-[-1]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dekstop */}
      <div className="hidden md:flex h-screen bg-black/80 items-center justify-center">
        <section className="py-16 bg-transparent text-white" id="experience">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-black cursor-pointer"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
                <span className="text-sm text-gray-400">{exp.year}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile Section */}
      <div className="relative md:hidden flex flex-col min-h-screen">
        {/* Background image for mobile */}
        <div
          className="absolute inset-0 bg-black z-[-1]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="flex flex-col min-h-screen bg-black/80">
          <section className="py-10 text-white" id="experience">
            <h2 className="text-2xl font-bold text-center mt-10">Experience</h2>
            <div className="grid gap-2 px-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl p-6 shadow-lg hover:bg-black cursor-pointer"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <h3 className="font-semibold mb-2">{exp.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <span className="text-sm text-gray-400">{exp.year}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
