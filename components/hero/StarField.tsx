'use client'
import { useEffect, useState } from 'react'
import type { IParticlesProps } from '@tsparticles/react'
import type { ISourceOptions } from '@tsparticles/engine'

type ParticlesType = React.FC<IParticlesProps>

export function StarField() {
  const [ParticlesComponent, setParticlesComponent] = useState<ParticlesType | null>(null)
  const [init, setInit] = useState(false)

  useEffect(() => {
    // Lazy load tsparticles to avoid blocking FCP
    Promise.all([
      import('@tsparticles/react'),
      import('@tsparticles/slim'),
    ]).then(([{ default: Particles, initParticlesEngine }, { loadSlim }]) => {
      initParticlesEngine(async engine => {
        await loadSlim(engine)
      }).then(() => {
        setParticlesComponent(() => Particles)
        setInit(true)
      })
    })
  }, [])

  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 640

  const options: ISourceOptions = {
    background: { color: { value: '#090912' } },
    particles: {
      number: { value: isMobile ? 40 : 80 },
      color: { value: '#ffffff' },
      opacity: { value: 0.3 },
      size: { value: { min: 1, max: 2 } },
      move: { enable: true, speed: 0.3, direction: 'none' },
    },
    interactivity: { events: { onHover: { enable: false } } },
  }

  if (!init || !ParticlesComponent) {
    return <div className="absolute inset-0 bg-bg" />
  }

  return (
    <ParticlesComponent
      id="hero-stars"
      options={options}
    />
  )
}
