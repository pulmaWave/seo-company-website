import { useEffect, useState, useRef } from 'react'

export const useInView = (options = {}) => {
  const ref = useRef()
  const [isInView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.1, ...options } // 10% vào viewport
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options])

  return [ref, isInView]
}
