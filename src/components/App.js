import React,{useState,useContext} from 'react'
import Context from "./Context"
function App() {
const {user,login,logout}=useContext(Context);
const [input,setInput]=useState('');
const [items,setItems]=useState([]);

const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item !== itemToRemove));
};

const addItems=()=>{
    setItems([...items,input]);
    setInput('');
};
  return (
    <div>
        <div id='current-user' >Current user:{user.name},isAuthenticated:{user.isAuthenticated?'Yes':'No'}</div>
        <button id='login-btn' onClick={login}>Login</button>
        <button id='signout' onClick={logout}>Signout</button><br/>
        <input id='shopping-input' onChange={e=>setInput(e.target.value)}/><br/>
        <button onClick={addItems}>Add item</button>
        <ul>
            {
               items.map(item=>(
                <li key={item}>
                    <span id={`item-${item}`}>{item}</span>
                    <button id={`remove-${item}`} onClick={()=>removeItem(item)}>Remove</button>
                </li>
               ))
            }
        </ul>
        <button id='clear-list' onClick={() => setItems([])}>Clear List</button>
    </div>
  )
}

export default App;