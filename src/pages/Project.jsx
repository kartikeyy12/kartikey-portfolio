import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectBySlug, getCategoryBySlug } from '../data/projects'

const Project = () => {
  const { categorySlug, projectSlug } = useParams()
  const project = getProjectBySlug(categorySlug, projectSlug)
  const category = getCategoryBySlug(categorySlug)

  if (!project) return (
    <div style={{ color: 'white', padding: '200px 40px', textAlign: 'center' }}>
      Project not found.
    </div>
  )

  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
      padding: '120px 40px 100px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ width: '100%', maxWidth: '720px' }}>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '60px', display: 'flex', gap: '12px', alignItems: 'center' }}
        >
          <Link to="/work" style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.3)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}>Work</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>·</span>
          <Link to={`/work/${categorySlug}`} style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.3)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}>{category?.label}</Link>
        </motion.div>

        {/* Title */}
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
            marginBottom: '12px',
          }}
        >
          {project.title}
        </motion.h1>

        {/* Subtitle + year + status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '40px' }}
        >
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.15em',
          }}>
            {project.subtitle}
          </p>
          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.65rem' }}>·</span>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.15em',
          }}>
            {project.year}
          </p>
          {project.status === 'In Progress' && (
            <span style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.35)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '2px 8px',
              textTransform: 'uppercase',
            }}>
              WIP
            </span>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '60px' }}
        >
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.35)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '4px 12px',
              textTransform: 'uppercase',
            }}>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '60px' }} />

        {/* Sections */}
        {project.sections?.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
            style={{ marginBottom: '48px' }}
          >
            {section.title !== '' && (
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.25)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                {section.title}
              </p>
            )}
            {section.content.split('\n\n').map((para, j) => (
              <p key={j} style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.9',
                letterSpacing: '0.01em',
                marginBottom: '16px',
              }}>
                {para}
              </p>
            ))}
          </motion.div>
        ))}

        {/* Artifacts / Links */}
        {project.artifacts?.filter(a => a.href !== '#').length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ marginTop: '20px' }}
          >
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '40px' }} />
            <p style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.25)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              Project Artifacts
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {project.artifacts.filter(a => a.href !== '#').map((artifact) => (
                <a
                  key={artifact.label}
                  href={artifact.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    paddingBottom: '2px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,1)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                >
                  {artifact.label} →
                </a>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}

export default Project