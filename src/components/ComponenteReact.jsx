import React, {useState} from 'react'

const ComponenteReact = () => {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
  return (
    <div style={{marginTop: '1rem'}}>
      -----
      Desde react component
      <button onClick={addCount}>aumentar</button>
      {count}
      -----
    </div>
  )
}

export default ComponenteReact
