import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  src: `/photography/${i + 1}.webp`,
  alt: `Photo ${i + 1}`,
}))

const PhotographyCollage = () => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div style={{
        columns: '3 200px',
        gap: '8px',
        width: '100%',
      }}>
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            style={{
              breakInside: 'avoid',
              marginBottom: '8px',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            onClick={() => setSelected(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)', padding: '16px' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              style={{ position: 'relative', maxWidth: '900px', maxHeight: '90vh', width: '100%' }}
              initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.alt} style={{ width: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '2px' }} />

              <button onClick={() => setSelected(null)}
                style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.4rem', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>

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