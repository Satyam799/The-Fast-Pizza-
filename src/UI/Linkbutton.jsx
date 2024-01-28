import { Link, useNavigate } from "react-router-dom"

function Linkbutton({children,to}) {
   const y='text-sm text-blue-500 hover:text-blue-600 hover:underline'
    const navigate = useNavigate();

    if( to==='-1')return  <button className={y} onClick={() => navigate(-1)}>&larr; Go back</button>
    return (
        <Link to={to} className={`${y}`}>{children}</Link>
    )
}

export default Linkbutton
