import React,{Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
       
    }

    componentDidMount(){
        console.log("Parent componentdidMount");
    }
    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <div>LoggedIn User</div>
                <UserContext.Consumer>
                    {
                        ({loggedInUser})=>(
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )

                        
                    }
                </UserContext.Consumer>
                <h2>This is Namaste React Web Series</h2>
                <User name={"Divesh Sharma (function)"} location={"Dehradun"} />
    
            </div>
        )
    }
}

/*
Parent Constructor
Parent render
- First Constructor
- First Render
- Second Constructor
- Second Render
<DOM UPDATED - IN SINGLE
- First ComponentDidMoun
- Second Component DidMount
- Parent Component DidMount
*/
export default About;