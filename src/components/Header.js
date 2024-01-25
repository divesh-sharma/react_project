import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = ()=>{
    const onlineStatus = useOnlineStatus();
    let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
               <img className="w-28 mix-blend-multiply" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4">
                        Online Status:{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        
                      <Link to="/">  Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link></li>
                    <li className="px-4">
                       <Link to="contact"> Contact Us
                       </Link></li>
                       <li className="px-4">
                        <Link to="grocery">Grocery</Link>
                       </li>
                    <li>Cart</li>
                    <li>{loggedInUser}</li>
                    <button className="login"
                    onClick={()=>{
                   btnNameReact ==="Login" ?    setBtnNameReact("Logout"):
                   setBtnNameReact("Login")
                    }
                    }
                    >{btnNameReact}</button>
                </ul>

            </div>
        </div>

    )
}

export default Header;