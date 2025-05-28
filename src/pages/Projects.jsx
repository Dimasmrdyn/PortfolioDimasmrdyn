import bgImage from '../assets/bg-experience.jpg';
import { motion } from 'framer-motion';
const Project = () => {
  const projects = [
    {
      title: 'Spatu Ku – Shoe Store Website',
      description:
        'A modern e-commerce web app for selling shoes. Built using React and Tailwind CSS with product listing, filtering, and responsive design.',
      contact: 'Contact Me',
    },
    {
      title: 'Skincare Landing Page',
      description:
        'A clean and aesthetic landing page for a skincare brand. Focused on user engagement, smooth layout, and visual storytelling.',
      contact: 'Contact Me',
    },
    {
      title: 'Restaurant Website',
      description:
        'Designed a responsive restaurant site with menu sections, smooth navigation, and visual branding. Tailored for both desktop and mobile users.',
      contact: 'Contact Me',
    },
  ];

  return (
    <div
      className="absolute inset-0 bg-cover bg-center h-screen bg-full z-[-1]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hidden md:flex h-screen bg-black/80 items-center justify-center">
        <section className="py-16 text-white" id="projects">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-black cursor-pointer transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <a href="/">{project.contact}</a>
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
        <section className="py-16 text-white bg-black/80" id="projects">
          <h2 className="text-2xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-6xl mx-auto grid gap-8 px-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl p-6 shadow-lg hover:bg-black cursor-pointer"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <span className="text-sm text-gray-400">{project.year}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
