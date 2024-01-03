 import React from "react";
 class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:2,          
                userInfo:{
                    name:"Dummy",
                    location:"Default",
                    avatar_url:""
                }
            
        }
        console.log("Child Constructor");

    }

   async componentDidMount(){
        console.log("Child ComponentDidMount");
        const data = await fetch("https://api.github.com/users/divesh-sharma");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        });
        this.timerId = setInterval(()=>{
console.log("Namaste React")
        },1000)
    }

    componentWillUnmount(){
            console.log("ComponentWillUnmount");
            clearInterval(this.timerId);
    }

   
render(){
    const {name,location,avatar_url} = this.state.userInfo;
    const {count,count2}= this.state;
    
    console.log("Child Render");
    return (        <div className="user-card">
   <img className="avatar_url" src={avatar_url} />
    <h2>Name:{name}</h2>
    <h2>Count:{this.state.count}</h2>
    {/* <h2>Count:{count2}</h2> */}
    {/* <button onClick={()=>{
      this.setState({
        count:this.state.count +1
      })  
    }}>Count Increase</button> */}

    <h3>Location:{location}</h3>
    <h4>Contact:@akshaymarch7</h4>
</div>
)
}
 }

 export default UserClass;