import React from 'react'

import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </>
)
