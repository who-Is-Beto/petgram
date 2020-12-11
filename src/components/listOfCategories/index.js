import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)
  return (
    <List>
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
}
