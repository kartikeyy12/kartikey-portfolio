import { motion } from 'framer-motion'

const tags = [
  'Electronics and Communication Engineer',
  'Embedded Systems & Edge AI',
  'Photographer',
  'Student Leader & Community Builder',
]

const Home = () => {
  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '-60px',
      gap: '24px',
    }}>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 300,
          letterSpacing: '0.001em',
          color: '#ffffff',
        }}
      >
        KartikeyTiwari
      </motion.h1>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px 0',
          maxWidth: '700px',
          textAlign: 'center',
        }}
      >
        {tags.map((tag, i) => (
          <span key={tag} style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}>
            {tag}{i < tags.length - 1 && (
              <span style={{ margin: '0 12px', opacity: 0.3 }}>·</span>
            )}
          </span>
        ))}
      </motion.div>

    </div>
  )
}

export default Home