import React, { useState } from 'react'
import { createContext } from 'react'
import CakeCounter2 from './CakeCounter2'
import CakeCounter1 from './CakeCounter1'

export const dataStore = createContext(null)
export default function CakeContext() {
const [cakes, setcakes] = useState(10)

function buyCake(){
  setcakes(prevCake => prevCake-1)
}

function buildCake(){
  setcakes(prevCake => prevCake+1)
}

  return (
    <dataStore.Provider value={{cakes, buyCake, buildCake}}>
       <CakeCounter1/>
       <CakeCounter2/>
    </dataStore.Provider>
  )
}
