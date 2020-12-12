/* eslint-disable react/jsx-indent */
import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const refElement = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (error) {
      console.error(error)
    }
  })

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

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      return false
    }
  }
  return (
    <Article ref={refElement}>

      {
        show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}><Icon size='32px' /> {likes} likes</Button>
        </>
      }
    </Article>
  )
}