import { motion } from 'framer-motion'

const About = () => {
  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      padding: '120px 40px 100px',
    }}>
      <div style={{ width: '100%', maxWidth: '720px' }}>

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
          About
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ marginBottom: '80px' }}
        >
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: '1.7',
            letterSpacing: '0.01em',
            marginBottom: '28px',
          }}>
            I am an Electronics and Communication Engineering student driven by the simple thrill of creating things from scratch. For me, being an engineer means having the ultimate toolkit. I love the realization that with enough knowledge, time, and the right components, I can build practically anything I imagine. It is not just about studying theories or looking at diagrams; it is about the absolute freedom to bring my ideas to life and build systems that actually work.
          </p>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.9',
            letterSpacing: '0.01em',
            marginBottom: '20px',
          }}>
            When I step away from the workbench, I channel my energy into a mix of creative and physical pursuits. I have always had a strong visual side, which I express through photography, digital design, and editing. Whether I am shooting photos at a fast-paced campus event or working on editorial layouts, I really enjoy the process of visual storytelling. I also make it a point to stay active and unplugged. You will often find me working out, picking up a guitar, or heading out to explore the trails and mountains.
          </p>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.9',
            letterSpacing: '0.01em',
          }}>
            At my core, I am a highly social person who genuinely enjoys talking to people and hearing new perspectives. I have always been drawn to the idea of becoming a polymath, someone who refuses to be boxed into just one field and wants to master a wide range of knowledge. To put it in simpler terms, the main goal of my life is to become a "Jacked Nerd," and I keep getting closer to it every day. By balancing the gym, my studies, and my creative projects, I am building a well-rounded life where I can lift heavy, think deeply, and connect with people who are just as engaged with the world as I am.
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '60px' }} />

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}>
            Education
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.02em',
                marginBottom: '6px',
              }}>
                B.Tech — Electronics and Communication Engineering
              </p>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.1em',
              }}>
                National Institute of Technology Goa
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.12em',
              }}>
                2024 — 2028
              </p>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.1em',
                marginTop: '4px',
              }}>
                CGPA 8.68 / 10
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '60px' }} />

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}>
            Experience
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.02em',
                marginBottom: '4px',
              }}>
                Trainee Engineer (Intern)
              </p>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}>
                QuickPay Pvt. Ltd. · Noida, India
              </p>
              {[
                'Deploying YOLO object recognition models onto NVIDIA Jetson modules using DeepStream for real-time, autonomous payload operations.',
                'Calibrating Flight Controllers and Electronic Speed Controllers via Mission Planner for autonomous aerial platforms.',
                'Developing custom scripts for Raspberry Pi cameras and payloads, conducting rigorous physical testing across complex edge cases.',
              ].map((pt, j) => (
                <div key={j} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', marginTop: '3px', flexShrink: 0 }}>—</span>
                  <p style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: '1.7',
                    fontWeight: 300,
                  }}>
                    {pt}
                  </p>
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.12em',
              whiteSpace: 'nowrap',
            }}>
              May 2025 — Present
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About