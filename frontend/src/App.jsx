import React from 'react';
import {ChakraProvider} from "@chakra-ui/react"
import './App.css'
import { AllRoutes } from './routes/AllRoutes'

function App() {

  return (
      <ChakraProvider>
        <AllRoutes />
      </ChakraProvider>
  )
}

export default App
