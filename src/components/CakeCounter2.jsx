import React, { useContext } from 'react'
import { dataStore } from './CakeContext'

export default function CakeCounter2(props) {
    const data = useContext(dataStore)
  return (
    <div>
        <hr/>
        <h2 className='text-danger'>Counter 2</h2>
        {/* <hr/> */}
        <h3>No. of cakes:{data.cakes}</h3>
        <button className='btn btn-primary' onClick={data.buyCake}>Buy Cake</button>
    </div>
  )
}
