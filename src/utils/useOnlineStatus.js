import {useEffect,useState} from "react";
const useOnlineStatus = ()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);
// check if online
// we only need to addEventListener only one time
useEffect(()=>{
window.addEventListener("online",()=>{
setOnlineStatus(true);
});
window.addEventListener("offline",()=>{
    setOnlineStatus(false);
})
},[])

//boolean value
return onlineStatus;
}

export default useOnlineStatus;