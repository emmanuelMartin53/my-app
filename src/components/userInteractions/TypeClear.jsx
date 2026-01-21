import { useState } from "react"


const TypeClear = () => {

  const [text, setText] = useState("Bonjour")

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  )
}

export default TypeClear
