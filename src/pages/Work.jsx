import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../data/projects'

const Work = () => {
  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 80px',
    }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
            marginBottom: '60px',
          }}
        >
          Select a field
        </motion.p>

        {/* Category list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                to={`/work/${cat.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '32px',
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.cat-label').style.opacity = '1'
                    e.currentTarget.querySelector('.cat-label').style.letterSpacing = '0.06em'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.cat-label').style.opacity = '0.75'
                    e.currentTarget.querySelector('.cat-label').style.letterSpacing = '0.02em'
                  }}
                >
                  <span style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.15em',
                    minWidth: '28px',
                  }}>
                    {cat.number}
                  </span>
                  <span
                    className="cat-label"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.7)',
                      letterSpacing: '0.02em',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {cat.label}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work