import { useState } from 'react'

// variable dalam menyimpan data
export const CounterWithVariable: React.FC = () => {
  let count: number = 0

  function increment() {
    count += 1
    console.log(`Perhitungan :  ${count}`)
    return count
  }
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Click Here</button>
    </>
  )
}


// state
export const CounterWithState: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  // const [counter, Goyang] = useState<number>(0)
  // const [tempatnampung, fungsi] = useState(nilaidefault)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Click Here</button>
    </>
  )
}




// export default new class Counting extends Components {

// }