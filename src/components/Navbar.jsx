import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenu] = useState(false);

  const mobileMenuRef = useRef(null);
  const desktopMenuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleNavbar = () => setMenu(!menuOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close desktop menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target)
      ) {
        setMenu(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="content-center">
      {/* Desktop Navbar */}
      <div className="hidden md:flex my-5 items-center justify-between pt-1 gap-10 px-4 py-2 mx-30 rounded-full">
        <h1 className="text-2xl text-white mt-1">Dimasmrdyn.</h1>
        <button className="text-white cursor-pointer" onClick={toggleNavbar}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={desktopMenuRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="absolute gap-10 ml-75 mt-1 md:flex hidden"
            >
              <NavLinks onClick={() => setMenu(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden px-4 py-2 justify-between items-center overflow-hidden rounded-full mx-4 my-5 backdrop:blur-md">
        <h1 className="text-white font-bold font-mono">Dimas Murdiyana.</h1>
        <button onClick={toggleMenu} className="text-white cursor-pointer">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-20 left-0 right-0 z-50 h-full rounded-xl p-4 space-y-2"
          >
            <NavLinks onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLinks = ({ onClick }) => (
  <>
    {['Home', 'About', 'Experience', 'Skills', 'Project'].map((text, index) => (
      <Link
        key={text}
        to={`/${text === 'Home' ? '' : text.toLowerCase().replace(/ /g, '-')}`}
        onClick={onClick}
        className="block text-center bg-white font-serif px-4 py-2 rounded-full hover:bg-cyan-900 text-black cursor-pointer hover:text-white transition"
      >
        {text}
      </Link>
    ))}
  </>
);

export default Navbar;
