import { useEffect, useState } from "react";

const User = (props)=>{
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        console.log("useEffect");
    const timerId = setInterval(()=>{
console.log("UseEffect Namaste React")

    },1000);
    return ()=>{
        console.log("return");
        clearInterval(timerId);
    };
    },[])
console.log("rendering")
    return (        <div className="user-card">
            <h2>Name:{props?.name}</h2>
            <h3>Location:Dehradun</h3>
            <h4>Contact:@akshaymarch7</h4>
        </div>
    )
}

export default User;