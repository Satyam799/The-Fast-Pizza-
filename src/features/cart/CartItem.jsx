import { useSelector } from 'react-redux';
import Button from '../../UI/Button';
import { formatCurrency } from '../../utilis/helpers';
import DeleteItem from './Deletebutton';
import Updatequantity from './Updatequantity';
import { cartoverviewquantity } from './Cartslice';


function CartItem({ item }) {
  const { pizzaID, name, quantity, totalPrice } = item;
 const currentquantity=useSelector(cartoverviewquantity)
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

    <Updatequantity pizzaID={pizzaID} currentquantity={currentquantity}/>
     <DeleteItem pizzaID={pizzaID} />
     </div>
    </li>
  );
}

export default CartItem;

