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
  const [isChecked, setIsChecked] = useState(false)
  const [showPopup, setShowPopup] = useState(false)


  const color = btnColor === "orange" ? "blue" : "orange";

  const handleClick = () => {
    setCount(count +1)
    setBtnColor(color)
  }

  const handleMouseOver = () => {
    setShowPopup(true)
  }

  const handleMouseOut = () => {
    setShowPopup(false)
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
        <label
          htmlFor="accept-terms">
            {" "}J'accepte
            <span
              style={{color: "blue"}}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
             les termes et conditions
           </span>
          </label>
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

      {
        showPopup && (
          <div className="popup">
            <p >
              Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Adipisci fugit id facere a voluptas explicabo quae dicta
              voluptatum natus possimus nobis harum tempora sapiente voluptatem reiciendis,
              totam cum perspiciatis molestias.
            </p>
          </div>
        )
      }


    </div>
  )
}

export default IncrementCount
