
const GetByDisplayValue = () => {
  return (
      <>
        <form>
            <div>
              <label htmlFor="firstName" >Prénom  </label>
              <input
                type="text"
                id="firstName"
                placeholder="Indiquez votre prénom"
                value="Stan"
                onChange={() => {}}
              />

              <label htmlFor="lastName" > Nom  </label>
              <input
                type="text"
                id="lastName"
                placeholder="Indiquez votre nom"
                value="Smith"
                onChange={() => {}}
              />
            </div>
            <textarea  value="Bonjour à tous" readonly/>
              <input type="submit" value="Valider" />
        </form>
      </>
  )
}

export default GetByDisplayValue;
