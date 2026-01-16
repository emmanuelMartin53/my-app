
const GetAllByRole = ({btns}) => {
  return (
      <ul>
        {
          btns.map((btn) => {
             return <li key={btn}><button>{btn}</button></li>
          })
        }
      </ul>
  )
}
export default GetAllByRole;
