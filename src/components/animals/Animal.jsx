import chien from "../../assets/chien.jpg"

const Animal = () => {
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

        <form action="">
          <div>
            <label htmlFor="name">Nom  </label>
            <input type="text" id="name"/>
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
            <label htmlFor="">
              <input type="checkbox" id="terms and conditions" />
              J'accepte les termes et conditions
            </label>
          </div>
       <button>Valider</button>
      </div>
  )
}

export default Animal;
