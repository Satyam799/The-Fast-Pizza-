import { useFetcher } from 'react-router-dom'
import Buttom from '../../UI/Button'
import { formatDate } from '../../utilis/helpers'
import { updateOrder } from '../../services/apiRestaurant'
function Updatebutton({order}) {
    const fetcher= useFetcher()
    return (
         <fetcher.Form method='PATCH' className='text-right'> <Buttom type='primary'> Make Priority</Buttom></fetcher.Form>  
    )
}

export async function action({request,params}){
   // console.log(params)
   const id=params.orderId
    const updateObj={priority:true}
    updateOrder(id, updateObj)

    return null

}


export default Updatebutton
