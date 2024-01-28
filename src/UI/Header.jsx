import { Link } from "react-router-dom"
import Searchorder from "../features/order/searchorder"
import Username from "../features/user/Username"

function Header() {
    return (
        <header className="flex justify-between uppercase
         bg-yellow-500 px-4 py-3 border-b-8 sm:px-10 
         border-stone-300 font-pizza ">
            <Link to='/'className="tracking-widest">Fast React Pizza Co.</Link>
            
            
            <Searchorder/>
            <Username/>
</header>
 )
}

export default Header
