import chien from "../../assets/chien.jpg"

const GetByRole = () => {
  return (
      <div>
        <h1>Adopter un animal</h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quis modi in inventore ducimus commodi totam laborum quisquam numquam,
            facilis voluptas enim necessitatibus incidunt.
            Sapiente autem alias veritatis deleniti non dolorem.
          </p>
          <img
              src={chien}
              alt="Image d'un chien"
              width="400"
          />
        </article>

        <h2>Inscription</h2>

        <form>
          <div>
            <label htmlFor="firstName">Prénom  </label>
            <input type="text" id="firstName"/>

            <label htmlFor="lastName">Nom  </label>
            <input type="text" id="lastName"/>
          </div>
        </form>
        <div>
          <label htmlFor="pet-select">Choisissez un animal </label>
          <select name="pets" id="pet-select">
                <option value="dog">Chien</option>
                <option value="cat">Chat</option>
                <option value="hamster">Hamster</option>
          </select>
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

export default GetByRole;
