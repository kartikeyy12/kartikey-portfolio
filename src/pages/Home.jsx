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
      height: '100svh',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      marginTop: '-60px',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(1.8rem, 7vw, 5.5rem)',
          fontWeight: 300,
          letterSpacing: '0.001em',
          color: '#ffffff',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          marginBottom: '24px',
          lineHeight: 1.1,
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
          gap: '4px 0',
          maxWidth: '600px',
          textAlign: 'center',
          padding: '0 16px',
        }}
      >
        {tags.map((tag, i) => (
          <span key={tag} style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)',
            fontWeight: 400,
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}>
            {tag}{i < tags.length - 1 && (
              <span style={{ margin: '0 8px', opacity: 0.3 }}>·</span>
            )}
          </span>
        ))}
      </motion.div>

    </div>
  )
}

export default Home