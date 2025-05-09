import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
