import chien from '../../assets/chien.jpg';
import sad from '../../assets/sad.png';



const GetByAltText = () => {
  return (
      <>
          <img
              src={chien}
              alt="Image d'un chien"
              width="400"
          />

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
            <div>
              <input type="image" src={sad} alt="Valider" width="40"/>
            </div>
        </form>
      </>

  )
}

export default GetByAltText;
