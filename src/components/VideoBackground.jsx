import { useEffect, useRef } from 'react'

const VideoBackground = ({ overlayOpacity = 0.55 }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = () => {
      video.play().catch(() => {})
    }

    // Try immediately
    tryPlay()

    // iOS Safari sometimes needs a user gesture — fire on first touch too
    document.addEventListener('touchstart', tryPlay, { once: true })
    document.addEventListener('click', tryPlay, { once: true })

    return () => {
      document.removeEventListener('touchstart', tryPlay)
      document.removeEventListener('click', tryPlay)
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
    }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/video/stars.mp4"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
      {/* Overlay — also blocks native video controls from being tappable */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
        zIndex: 1,
      }} />
    </div>
  )
}

export default VideoBackground