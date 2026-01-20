import { useState } from "react"

const btnStyle = {
  padding: '5px',
  width: '200px',
  borderRadius: '6px',
  border: '0px',
  color: 'white'

}

const IncrementCount = () => {

  const [count, setCount] = useState(0)
  const [btnColor, setBtnColor] = useState("orange")
  const [isChecked, setIsChecked ] = useState(false)


  const color = btnColor === "orange" ? "blue" : "orange";

  const handleClick = () => {
    setCount(count +1)
    setBtnColor(color)


  }


  return (
    <div>
      <h1>{count}</h1>
      <div>
        <input
          id="accept-terms"
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
        />
        <label htmlFor="accept-terms">J'accepte les termes et conditions</label>
      </div>

      <button
        style={{
          ...btnStyle,
          backgroundColor: btnColor
        }}
        onClick={handleClick}
        disabled={!isChecked}
      >
          Vous avez cliqué {count} fois
        </button>
    </div>
  )
}

export default IncrementCount
