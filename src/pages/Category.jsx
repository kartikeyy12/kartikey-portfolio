import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCategoryBySlug } from '../data/projects'

const Category = () => {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)

  if (!category) return (
    <div style={{ color: 'white', padding: '200px 40px', textAlign: 'center' }}>
      Category not found.
    </div>
  )

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

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/work" style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '60px',
            transition: 'opacity 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.35'}
          >
            ← Work
          </Link>
        </motion.div>

        {/* Category title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '0.02em',
            marginBottom: '60px',
          }}
        >
          {category.label}
        </motion.h2>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {category.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/work/${categorySlug}/${project.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    padding: '24px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.proj-title').style.opacity = '1'
                    e.currentTarget.querySelector('.proj-arrow').style.opacity = '1'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.proj-title').style.opacity = '0.5'
                    e.currentTarget.querySelector('.proj-arrow').style.opacity = '0'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span
                          className="proj-title"
                          style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                            fontWeight: 300,
                            color: 'rgba(255,255,255,0.5)',
                            letterSpacing: '0.02em',
                            transition: 'opacity 0.3s ease',
                          }}
                        >
                          {project.title}
                        </span>
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
                      </div>
                      <p style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.7rem',
                        color: 'rgba(255,255,255,0.25)',
                        letterSpacing: '0.1em',
                        marginTop: '6px',
                      }}>
                        {project.subtitle}
                      </p>
                    </div>
                    <span
                      className="proj-arrow"
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.5)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category