import React from 'react'
import { configureAnchors } from 'react-scrollable-anchor'

import { Menu, Posts, Palestra, Curso, QuemSomos, Rodape } from '../../components'

const Home_Page = () => {
  configureAnchors({ offset: -60, scrollDuration: 2000 })

  return (
    <div>
      <Menu />
      <Posts />
      <Palestra />
      <Curso />
      <QuemSomos />
      <Rodape />
    </div>
  )
}

export default Home_Page
