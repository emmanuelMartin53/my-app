
import chien from '../../assets/chien.jpg'

const GetAllByTitle = () => {
  return (

    <div>
      <h1>Mon titre</h1>
        <article>
          <p title="intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quis modi in inventore ducimus commodi totam laborum quisquam numquam,
            facilis voluptas enim necessitatibus incidunt.
            Sapiente autem alias veritatis deleniti non dolorem.
          </p>
          <img
            src={chien}
            alt="Image d'un chien"
            width="400"
            title="chien"
          />
          <p title="presentation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos non quas autem illum exercitationem,
            quidem voluptate porro ad sequi amet fugiat illo,
            accusantium est aperiam. Nihil eius sed veritatis itaque?
          </p>
          <p title="ad-section">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos non quas autem illum exercitationem,
            quidem voluptate porro ad sequi amet fugiat illo,
            accusantium est aperiam. Nihil eius sed veritatis itaque?
          </p>
          <p title="presentation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos non quas autem illum exercitationem,
            quidem voluptate porro ad sequi amet fugiat illo,
            accusantium est aperiam. Nihil eius sed veritatis itaque?
          </p>
          <p title="conclusion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos non quas autem illum exercitationem,
            quidem voluptate porro ad sequi amet fugiat illo,
            accusantium est aperiam. Nihil eius sed veritatis itaque?
          </p>

        </article>
    </div>
  )
}

export default GetAllByTitle
