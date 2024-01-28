import { useDispatch } from "react-redux"
import Button from "../../UI/Button"
import { decrease, increase } from "./Cartslice"

function Updatequantity({pizzaId,currentquantity}) {
    const dispatch=useDispatch()
    return (
        <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={()=>dispatch(increase(pizzaId))}>+</Button>
<span>{currentquantity}</span>
      <Button type="round" onClick={()=>dispatch(decrease(pizzaId))}>-</Button>
      </div>
    )
}

export default Updatequantity
