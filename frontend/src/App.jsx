import React from 'react';
import {ChakraProvider} from "@chakra-ui/react"
import './App.css'
import { AllRoutes } from './routes/AllRoutes'

function App() {

  return (
      <ChakraProvider>
        <div style={{width:"100%", margin:"auto", backgroundColor:"rgb(248, 250, 260)"}}><AllRoutes /></div>
      </ChakraProvider>
  )
}

export default App
