import { useState } from "react";
import { Form, json, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../UI/Button"
import { useDispatch, useSelector } from "react-redux";
import {clearitem, getcart,cartoverviewprice} from "../cart/Cartslice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utilis/helpers";
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const order=useSelector(getcart)
 const dispatch=useDispatch()
  const formErrors = useActionData();
const {username,status:addressstatus,position,address,error}=useSelector(state=>state.user)

const isloading=addressstatus==='loading'


const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state)=>state.cart.cart);
  const totalcartprize=useSelector(cartoverviewprice)
  const priority= withPriority? 0.2*totalcartprize : 0
  const totalprize=priority+totalcartprize
  if(!order.length) return <EmptyCart/>

  return (

    
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
<input className="input grow" type="text" defaultValue={username} name="customer" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              defaultValue={address}
              disabled={isloading}
              required

            />
          <input type="hidden" name="position" value={(position.latitude && position.longitude )? 
          `${position.latitude},${position.longitude}`:''}/>

              {addressstatus=== 'error'  && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {error}
              </p>
              )}

         </div>
         {!position.latitude  && !position.longitude ? <span className="absolute right-[3px] z-50">  
          <Button               
          disabled={isloading}
           type="small" 
           onClick={(e)=>{
            e.preventDefault()
            dispatch(fetchAddress())
            }}>Get geo position</Button>
          </span>:"" }
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
             value={withPriority}
             onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? 'Placing order....' : `Order now from ${formatCurrency(totalprize)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };
console.log(order)
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect

  const newOrder = await createOrder(order);
  store.dispatch(clearitem())
   return redirect(`/order/${newOrder.id}`);

}
export default CreateOrder;
