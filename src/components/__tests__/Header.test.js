import { render,screen,fireEvent } from "@testing-library/react";
import Header from "../../components/Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it('Should load header component with login button',()=>{
render(
    <BrowserRouter>    <Provider store={appStore}>
<Header />
</Provider>
</BrowserRouter>

)

// const loginButton = screen.getByRole("button");
// const loginButton = screen.getByText("Login");
const loginButton = screen.getByRole("button",{name:"Login"});
expect(loginButton).toBeInTheDocument();
});


it('Should load header component with cart items 0',()=>{
    render(
        <BrowserRouter>    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    
    )
    const cartItems = screen.getByText("Carts (0)");
 
    expect(cartItems).toBeInTheDocument();
    });

    it('Should load header component with cart items',()=>{
        render(
            <BrowserRouter>    <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
        
        )
        const cartItems = screen.getByText(/Carts/);
     
        expect(cartItems).toBeInTheDocument();
        });
        

        it('Should change Login Button to Logout on click',()=>{
            render(
                <BrowserRouter>    <Provider store={appStore}>
            <Header />
            </Provider>
            </BrowserRouter>
            
            )
         const loginButton = screen.getByRole("button",{name:"Login"});
         fireEvent.click(loginButton);
         const logoutButton = screen.getByRole("button",{name:"Logout"});

         
            expect(logoutButton).toBeInTheDocument();
            });     