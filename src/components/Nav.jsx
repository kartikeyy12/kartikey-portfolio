import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'WORK', path: '/work' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
]

const Nav = () => {
  const location = useLocation()

  return (
    <motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  style={{ zIndex: 10 }}
  className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-6"
>
      {/* Left initial */}
      <Link
        to="/"
        className="text-white text-sm font-medium tracking-widest hover:opacity-60 transition-opacity duration-300"
      >
        K
      </Link>

      {/* Center links */}
      <div className="flex items-center gap-10">
        {navLinks.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className={`text-xs font-medium tracking-widest transition-opacity duration-300
              ${location.pathname.startsWith(path)
                ? 'opacity-100'
                : 'opacity-50 hover:opacity-100'
              }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right initial */}
      <Link
        to="/"
        className="text-white text-sm font-medium tracking-widest hover:opacity-60 transition-opacity duration-300"
      >
        T
      </Link>
    </motion.nav>
  )
}

export default Nav