'use client'
import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const VERBS = ['building.', 'training.', 'shipping.', 'traveling.', 'present.']

export function CyclingVerb() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const prefersReduced = useReducedMotion()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (prefersReduced) return
    intervalRef.current = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % VERBS.length)
        setAnimating(false)
      }, 300)
    }, 2500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [prefersReduced])

  return (
    <div className="mt-12 text-center md:text-left">
      <h1
        className="font-display font-extrabold text-5xl md:text-8xl text-on-surface tracking-tighter leading-none"
        style={{
          clipPath: animating ? 'inset(0 0 100% 0)' : 'inset(0 0 0% 0)',
          transition: 'clip-path 300ms ease',
        }}
      >
        I am {VERBS[index]}
      </h1>
    </div>
  )
}
