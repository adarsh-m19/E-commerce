import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'mycart',
    initialState:[],
    reducers:{
        addCartItem:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)

            if(existingProduct){
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)

                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                state=[...remainingProduct,existingProduct]
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }



        },
        incQuantity:(state,action)=>{

            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price

            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]

        },
        decQuantity:(state,action)=>{

            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price

            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]

        },
        delCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
            
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export const {addCartItem,incQuantity,decQuantity,delCartItem,emptyCart}=cartSlice.actions
export default cartSlice.reducer