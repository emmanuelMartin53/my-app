import { useState, useEffect } from "react"
import chien from '../../assets/chien.jpg'

const FindByRole = () => {

  const [isDark, setIsDark] = useState(false)
  const [isAvailable, setIsAvailable] = useState(true)


  useEffect(() => {
      setTimeout(() => {
        setIsDark(true)
        setIsAvailable(false)
      }, 2000);
  }, [])

  const btn = <button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</button>

  return (
    <div style={{background: isDark && "grey"}}>
        {btn}

        <div>
          { isAvailable &&  <img
              src={chien}
              alt="Image d'un chien"
              width="400"
            />}
        </div>


        <p className="container">Veuillez indiquer votre identité </p>
        <form>
            <div>
              <label htmlFor="firstName" >Prénom  </label>
              <input type="text" id="firstName" placeholder="Indiquez votre prénom"/>

              <label htmlFor="lastName" > Nom  </label>
              <input type="text" id="lastName" placeholder="Indiquez votre nom"/>
            </div>
            <input type="submit" value="Valider" />
        </form>
      </div>
  )
}

export default FindByRole
