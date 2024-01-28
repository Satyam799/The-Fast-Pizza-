import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Searchorder() {
    const [query,setquery]=useState('')
    const navigate=useNavigate()

    function handlesubmit(e){
        e.preventDefault()
        navigate(`/order/${query}`)
    }
    return (
        <form onSubmit={handlesubmit}>
            <input  className="w-28 rounded-full px-4 py-2
             bg-yellow-50 placeholder:text-stone-400 text-sm sm:w-64
             focus:outline-none,focus:ring,focus:ring-yellow-500 sm:focus:w-72 focus:opacity-50
             " 
             type="text"
             onChange={(e)=>setquery(e.target.value)} 
             placeholder="Search #" />
        </form>
    )
}

export default Searchorder
