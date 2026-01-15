

const CustomButton = ({text}) => {
  return (
    <div>
      <button data-testid="custom-element">{text}</button>

      <div data-testid="div-element">Element</div>
    </div>
  )
}

export default CustomButton
