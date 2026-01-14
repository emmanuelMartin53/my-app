

const GetByLabelTest = () => {
  return (
      <div>
        <form>
          <div>
            <label htmlFor="firstName">Prénom  </label>
            <input type="text" id="firstName"/>

            <label htmlFor="lastName">Nom  </label>
            <input type="text" id="lastName"/>
          </div>
        </form>
        <div>

        </div>
          <div>
            <label>
              <input type="checkbox" id="terms-and-conditions" />
              J'accepte les termes et conditions
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" id="newsletter" />
             Je m'abonne à la news letter
            </label>
          </div>
       <button>Valider</button>
      </div>
  )
}

export default GetByLabelTest;
