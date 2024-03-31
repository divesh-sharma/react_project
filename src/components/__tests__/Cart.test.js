import { render,screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import MOCK_DATA from "../../utils/mocks/mockResMenu.json";
import Header from "../../components/Header";
import Cart from "../../components/Cart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
})

it("should Load Restaurant Menu Component",async ()=>{

    await act(async ()=> render(
<Provider store={appStore}>

<BrowserRouter>
<Header />
<Cart />
    <RestaurantMenu /> </BrowserRouter>
</Provider>))

    const accordianHeader = screen.getByText("Biryani (5)");
    fireEvent.click(accordianHeader);
  const foodItems =  screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(5);
  const addBtns = screen.getAllByRole("button",{name:"Add +"});
  fireEvent.click(addBtns[0]);

  const cartItems = screen.getByText("Cart - (1 - items)");
  expect(cartItems).toBeInTheDocument();

  const clearBtn = screen.getByRole("button",{name:"clear"});
  fireEvent.click(clearBtn);

  expect(foodItems.length).toBe(8);



})