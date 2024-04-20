import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userDelte , addUser } from "../store/reducers/UserReducer"



function Users() {
  
  const {users} = useSelector(state => state.UserReducer)
  const [id , setId ] = useState(30)
  console.log(users);

  useEffect(()=>{
    setId((prev)=>prev+2)
  },[
   
  ])
  const [use, setUse] = useState(
    {
      id: id ,
      name:'pranav sirsufale ',
      username: 'Morish standint',
      email:"rey, repal@gamil.com",
      address:{
        street:'kattie turnpike',
        suite: 'suite 198',
        city: 'lebsackbury'
      }
    }
  )

const dispatch = useDispatch()
  


  return (
    <>
    <div className="n-auto container mt-5 bg-red-100 p-10">
      <h1 className="text-2xl font-bold text-red-900"> user list </h1>
    {users.map((user ,indes)=>(
      <div key={user.id}>
        {`${user.name }  and id is  ${user.id } `} <span onClick={()=>dispatch(userDelte(user.id))} className="text-red-500 cursor-pointer font-black"> X </span> <span onClick={()=>dispatch(addUser(use))} className="cursor-pointer" >  ✅</span>

      </div>

    ))}
   </div>
    </>
  )
}

export default Users
