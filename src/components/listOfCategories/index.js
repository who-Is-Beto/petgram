import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

// eslint-disable-next-line space-before-function-paren
function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-24iykciv5.now.sh/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onsScroll = event => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onsScroll)

    return () => document.removeEventListener('scroll', onsScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => {
          return (
            <Item key={category.id}><Category {...category} /></Item>
          )
        }
        )
      }
    </List>
  )

  if (loading) {
    return (
      <h1>Loading, plaese wait...</h1>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
