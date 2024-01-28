import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import CartItem from './CartItem';
import LinkButton from '../../../final-1-after-tailwind/src/ui/LinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { clearitem, getcart } from './Cartslice';
import EmptyCart from "./EmptyCart"
  

function Cart() {
  const cart =useSelector(getcart)
  const dispatch=useDispatch()
  const username=useSelector(state=>state.user.username)
  function handelclear(){
    dispatch(clearitem())
  }

if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart,{username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaID} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handelclear}>Clear cart</Button>
      </div>
    </div>
        );
      }

      export default Cart;
