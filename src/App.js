import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber , decNumber } from './actions/index'

const App = () => {

  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <div>
      <div className='container'>
      <h1>Increment/Decrement Counter</h1>
      <h4>Using react redux</h4>
      <div>
        <a className='btn' title='Decrement' onClick={()=>dispatch(decNumber())}> <span>-</span> </a>
        <input type="text" value={myState} />
        <a className='btn' title='Increment' onClick={()=>dispatch(incNumber())}><span>+</span></a>
      </div>
      </div>
    
    </div>
  )
}

export default App