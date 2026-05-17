

function Pizza({topping}){

    return (
        <div>{topping}</div>
    )
}

const Props = () => {
  return (
    <div>
        <Pizza topping="Chilli" />
    </div>
  )
}

export default Props