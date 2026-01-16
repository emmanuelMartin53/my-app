import { useState, useEffect } from "react"

const FindByRole = () => {

  const [isDark, setIsDark] = useState(false)


  useEffect(() => {
      setTimeout(() => {
        setIsDark(true)
      }, 2000);
  }, [])

  const btn = <button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</button>

  return (
    <div style={{background: isDark && "grey"}}>
        {btn}
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
