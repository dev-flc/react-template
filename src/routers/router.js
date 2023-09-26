import React from 'react'

import { ContainerGlobal } from 'Containers/containerGlobal.js'
import { Home } from 'View/home/home.js'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
      <Route
        index
        path="*"
        element={
          <ContainerGlobal>
            <h1>forever2</h1>
          </ContainerGlobal>
        }
      />
    </Routes>
  )
}
export { Router }
