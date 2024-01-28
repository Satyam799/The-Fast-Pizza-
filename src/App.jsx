import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../src/UI/Home"
import Menu,{loader as menuloader} from "../src/features/menu/Menu"
import Order,{Loader as orderloader}from "../src/features/order/Order"
import Cart from "../src/features/cart/Cart"
import CreateOrder,{action as createorderaction} from "../src/features/order/CreateOrder"
import Applayout from "./UI/Applayout"
import Error from "./UI/Error"
import {action as updateorderaction} from "./features/order/Updatebutton"
const router=createBrowserRouter([
  {

element:<Applayout/>,
children:[
  {
    path:'/',
    element:<Home/>
  },{
    path:'/menu',
    element:<Menu/>,
    errorElement:<Error/>,
    loader:menuloader
  },{
    path:"/order/:orderId",
    element:<Order/>,
    errorElement:<Error/>,
    action:updateorderaction,

    loader:orderloader
  },{
    path:"/cart",
    element:<Cart/>
  },{
    path:"/order/new",
    element:<CreateOrder/>,
    action:createorderaction

  }
]
},
  

])
function App() {
  return <RouterProvider router={router}/>
}

export default App
