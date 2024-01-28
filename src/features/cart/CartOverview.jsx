import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartoverviewprice, cartoverviewquantity } from "./Cartslice";

function CartOverview() {
  const x=useSelector(cartoverviewquantity)
  const y=useSelector(cartoverviewprice)
if(!x)return null
  return (
    <div className="flex items-center justify-between bg-stone-800 uppercase text-stone-200 
    px-4 py-4 sm:px-6 md:text-base">
      <p className="text-stone-300 font-semibold space-x-4">
        <span>{x} pizzas</span>
        <span>${y}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
