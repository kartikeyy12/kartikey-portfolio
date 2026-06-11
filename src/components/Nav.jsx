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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px',
      }}
    >
      {/* Left initial */}
      <Link
        to="/"
        style={{
          color: 'white',
          fontSize: '0.75rem',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textDecoration: 'none',
          opacity: 0.8,
          transition: 'opacity 0.3s',
          flexShrink: 0,
        }}
      >
        K
      </Link>

      {/* Center links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(16px, 4vw, 40px)',
      }}>
        {navLinks.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            style={{
              color: 'white',
              fontSize: 'clamp(0.55rem, 1.5vw, 0.7rem)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textDecoration: 'none',
              opacity: location.pathname.startsWith(path) ? 1 : 0.45,
              transition: 'opacity 0.3s',
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right initial */}
      <Link
        to="/"
        style={{
          color: 'white',
          fontSize: '0.75rem',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textDecoration: 'none',
          opacity: 0.8,
          transition: 'opacity 0.3s',
          flexShrink: 0,
        }}
      >
        T
      </Link>
    </motion.nav>
  )
}

export default Nav