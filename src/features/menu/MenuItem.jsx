import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utilis/helpers";
import { Additem, getcurrentquantity } from "../cart/Cartslice";
import DeleteItem from "../cart/Deletebutton";
import Updatequantity from "../cart/Updatequantity";

function MenuItem({ pizza }) {
  const dispatch=useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
function handeladdtocart(){
 const newitem= {
    pizzaId:id,
    name,
    quantity:1,
    unitPrice,
    totalPrice:unitPrice*1
}
dispatch(Additem(newitem))
}

const currentquantity=useSelector(getcurrentquantity(id))
const ispresent=currentquantity>0
return (
    <li className="flex gap-4 py-2 ">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?'opacity-70 grayscale':''}`} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="capitalize text-sm italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : 
          <p className="uppercase text-stone-500 font-medium text-sm">Sold out</p>}
        
        
        {ispresent && 
        <div className="flex items-center gap-3 sm:gap-8">
        <Updatequantity pizzaId={id} currentquantity={currentquantity}/> 
         <DeleteItem pizzaId={id}/>
         </div>}
        
        { !soldOut && !ispresent && <Button type="small" onClick={handeladdtocart}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
