import { useEffect, useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        //api calls
        getUserData();
    },[]);

    async function getUserData(){
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json= await data.json();
        console.log(json);
    }

    return ( <div className="user-card">
        <h2>Name : {props.name}</h2>
        <h3>Loction : Patna</h3>
        <h4>Contact : 9xxxxxxx</h4>
        <h5>Count : {count}</h5>
        <button onClick={()=>{
           setCount(count+1);
        }}>Count</button>
    </div>
    )
}

export default User;