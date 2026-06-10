import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Email', value: 'kartikey120207@gmail.com', href: 'mailto:kartikey120207@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kartikey-tiwari-319047342', href: 'https://www.linkedin.com/in/kartikey-tiwari-319047342/' },
  { label: 'GitHub', value: 'github.com/kartikeyy12', href: 'https://github.com/kartikeyy12' },
  { label: 'Hackster.io', value: 'hackster.io/kartikey-tiwari', href: 'https://www.hackster.io/kartikey-tiwari' },
  { label: 'Instagram', value: '@kartikeyyy_12', href: 'https://www.instagram.com/kartikeyyy_12?igsh=MXRhb3g5ejVqMXMwaQ==' },
  { label: 'WhatsApp', value: '+91 70840 51551', href: 'https://wa.me/917084051551' },
]

const ContactRow = ({ link }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.2)',
            textTransform: 'uppercase',
            minWidth: '80px',
          }}>
            {link.label}
          </span>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 300,
            color: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.45)',
            letterSpacing: '0.02em',
            transition: 'color 0.3s ease',
          }}>
            {link.value}
          </span>
        </div>
        <span style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.9rem',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          marginLeft: '16px',
        }}>
          →
        </span>
      </div>
    </a>
  )
}

const Contact = () => {
  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 100px',
    }}>
      <div style={{ width: '100%', maxWidth: '720px' }}>

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
          Get in touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '0.02em',
            marginBottom: '20px',
          }}
        >
          Let's talk.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.4)',
            lineHeight: '1.8',
            marginBottom: '70px',
            maxWidth: '480px',
          }}
        >
          Open to collaborations, internships, research opportunities, and good conversations about embedded systems, RF, or astrophotography.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <ContactRow link={link} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Contact