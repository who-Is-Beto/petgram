import { useEffect, useState, useRef } from 'react'

export function useNearSreen() {
  const refElement = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      // check if the browser has intersection observer implementated
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
        console.log({ isIntersecting })
      })

      observer.observe(refElement.current)
    })
  }, [refElement])

  return [show, refElement]
}
