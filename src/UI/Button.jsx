import { Link } from "react-router-dom"

function Button({children,disabled,to,type,onClick}) {

const p="bg-yellow-500 text-sm uppercase text-stone-800 font-semibold py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-color duration-300 focus:outline-none focus:ring  focus:bg-yellow-300 focus:ring-yellow-300    focus:ring-offset-2   focus:cursor-not-allowed"

const styles={
    primary:p+'px-4 py-3 md:px-6 md:py-4',
    small:p+'px-4 py-2 md:px-5 md:py-2.5 text-xs',
   secondary: 'text-sm inline-block text-sm rounded-full border-2 border-stone-500 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
    round:p+'px-2.5 py-1 md:px-3.5 md:py-2 text-sm'
}

if(onClick) return <button disabled={disabled} className={styles[type]} onClick={onClick} >{children}</button>

    if(to)return <Link className={styles[type]} to={to}>{children}</Link>
    return (
        <button disabled={disabled} className={styles[type]}>{children}</button>
       )
    
 
}

export default Button
