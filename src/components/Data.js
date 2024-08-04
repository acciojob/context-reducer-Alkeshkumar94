import React, { useState } from 'react'
import Context from './Context'
function Data({children}) {
    const[user,setUser]=useState({name:"",isAuthenticated:false});
    const login=()=>{
        setUser({name:"rahul",isAuthenticated:true});
    }
    const logout=()=>{
        setUser({name:"rahul",isAuthenticated:false});
    }
  return (
    <div>
       <Context.Provider value={{user,login,logout}}>
        {children}
       </Context.Provider>
    </div>
  )
}

export default Data