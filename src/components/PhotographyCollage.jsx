import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  src: `/photography/${i + 1}.webp`,
  alt: `Photo ${i + 1}`,
}))

const layout = [
  { rot: -3, size: 1 },{ rot:  2, size: 0 },{ rot: -1, size: 2 },
  { rot:  4, size: 0 },{ rot: -2, size: 1 },{ rot:  1, size: 2 },
  { rot: -4, size: 0 },{ rot:  3, size: 1 },{ rot: -1, size: 0 },
  { rot:  2, size: 2 },{ rot: -3, size: 1 },{ rot:  1, size: 0 },
  { rot: -2, size: 2 },{ rot:  4, size: 1 },{ rot: -1, size: 0 },
  { rot:  2, size: 1 },{ rot: -4, size: 2 },{ rot:  1, size: 0 },
  { rot: -2, size: 1 },{ rot:  3, size: 0 },{ rot: -1, size: 2 },
  { rot:  2, size: 1 },
]

const sizeStyles = [
  { gridColumn: 'span 1', gridRow: 'span 1' },
  { gridColumn: 'span 1', gridRow: 'span 2' },
  { gridColumn: 'span 2', gridRow: 'span 2' },
]

const PhotographyCollage = () => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gridAutoRows: '130px', gap: '6px', width: '100%' }}>
        {photos.map((photo, i) => {
          const { rot, size } = layout[i]
          return (
            <motion.div key={photo.id} style={{ ...sizeStyles[size], position: 'relative', overflow: 'hidden', cursor: 'pointer', rotate: rot }}
              initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.025 }} whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }} onClick={() => setSelected(photo)}>
              <img src={photo.src} alt={photo.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.5s ease' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))', pointerEvents: 'none' }} />
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)', padding: '16px' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div style={{ position: 'relative', maxWidth: '900px', maxHeight: '90vh', width: '100%' }}
              initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }} onClick={e => e.stopPropagation()}>
              <img src={selected.src} alt={selected.alt} style={{ width: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '2px' }} />
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.4rem', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
              <button onClick={e => { e.stopPropagation(); const idx = photos.findIndex(p => p.id === selected.id); setSelected(photos[(idx - 1 + photos.length) % photos.length]) }}
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.6rem', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
              <button onClick={e => { e.stopPropagation(); const idx = photos.findIndex(p => p.id === selected.id); setSelected(photos[(idx + 1) % photos.length]) }}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.6rem', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
              <p style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)' }}>
                {photos.findIndex(p => p.id === selected.id) + 1} / {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhotographyCollage
