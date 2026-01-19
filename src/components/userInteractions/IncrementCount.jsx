import { useState } from "react"


const IncrementCount = () => {

  const [count, setCount] = useState(0)


  return (
    <div>
      <h1>{count}</h1>
      <button>Vous avez cliqué {count} fois</button>
    </div>
  )
}

export default IncrementCount
