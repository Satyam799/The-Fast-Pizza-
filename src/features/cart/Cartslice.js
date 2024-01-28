import { createSlice } from "@reduxjs/toolkit"
import { useReducer } from "react"

const initialState={
        cart:[]
        /*cart:[{
        pizzaID:12,
        name:'Mediterian',
        quantity:'',
        unitPrice:16,
        totalPrice:''
    }]*/
}


const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      Additem(state,action){
state.cart.push(action.payload)
        },

        DeleteI(state,action){
state.cart=state.cart.filter((el)=>el.pizzaId!==action.payload)
        },
        increase(state,action){
const item=state.cart.find((el)=>el.pizzaId===action.payload)
item.quantity++
item.totalPrice=item.quantity*item.unitPrice
        },
        decrease(state,action){
const item=state.cart.find((el)=>el.pizzaId===action.payload)
item.quantity--
item.totalPrice=item.quantity*item.unitPrice
if(item.quantity===0)cartslice.caseReducers.DeleteI(state,action)


        },
        clearitem(state){
state.cart=[]
        }
    }
})

export const {Additem,DeleteI,increase,decrease,clearitem}=cartslice.actions

export default cartslice.reducer

export function cartoverviewquantity(state){
       return  state.cart.cart.reduce((acc,item)=>acc+item.quantity,0)
}
export function cartoverviewprice(state){
        return state.cart.cart.reduce((acc,item)=>acc+item.totalPrice,0)
}

export const  getcart=state=>state.cart.cart

export const getcurrentquantity=id=>state=>state.cart.cart.find((el)=>el.pizzaId===id)?.quantity??0