import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
          id:10,
          name:'pranav sirsufale ',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:11,
          name:'geeta anande',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:12,
          name:'pratima chaukule',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:13,
          name:'neha gaikwad',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:14,
          name:'pratibha wagh',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:15,
          name:'gajanan jadhav',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:16,
          name:'sunil misal ',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:17,
          name:'vaivhav sirsufale ',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
        {
          id:18,
          name:'vaishnavi bhanuse',
          username: 'Morish standint',
          email:"rey, repal@gamil.com",
          address:{
            street:'kattie turnpike',
            suite: 'suite 198',
            city: 'lebsackbury'
          }
        },
      ]
}

export const UserSlice = createSlice({
    name:'users',
    initialState,
    reducers :{
        userDelte : (state, action )=>{
            state.users = state.users.filter((user,index)=>(
                user.id !== action.payload 
            ))
        },
        addUser : (state,action) =>{
            state.users.push(action.payload)
        }
    }
})

export default UserSlice.reducer;

export const { userDelte, addUser } = UserSlice.actions;

