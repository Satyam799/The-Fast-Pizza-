import { useDispatch } from "react-redux"
import Button from "../../UI/Button"
import {  DeleteI } from "./Cartslice"

function DeleteItem({pizzaId}) {
const dispatch=useDispatch()

 return (
    <Button type="small" onClick={()=>dispatch(DeleteI(pizzaId))}>Delete</Button>
    )
}

export default DeleteItem
