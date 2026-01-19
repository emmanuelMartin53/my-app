

const GetByLabelText = () => {
  return (
      <div>
        <form>
            <div>
              <label htmlFor="firstName">Prénom  </label>
              <input type="text" id="firstName"/>

              <label htmlFor="lastName">Nom  </label>
              <input type="text" id="lastName"/>
            </div>

          <div>
            <div>
              <label id="username-label">Username </label>
              <input aria-labelledby="username-label" />
            </div>
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
             <span>Je m'abonne à la news letter</span>
            </label>
          </div>

          <label>
              Animal préféré
              <input type="text" />
          </label>
          <label>
              Animal préféré
              <textarea />
          </label>
            <button>Valider</button>
        </form>
      </div>
  )
}

export default GetByLabelText;
