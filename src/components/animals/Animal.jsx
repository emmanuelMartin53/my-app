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
          />

        </article>
        <input type="text" />
        <select name="" id=""></select>
        <input type="checkbox" name="" id="" />
        <button></button>
      </div>
  )
}

export default Animal;
