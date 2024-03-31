import { render,screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// making mock fetch function fetch return promise which have json fn which return promise
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data);
        }
    })
})
it("Should search res list for burger text input",async ()=>{
await act(async ()=> render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
));
const cardsBeforeSSearch = screen.getAllByTestId("resCard");
expect(cardsBeforeSSearch.length).toBe(20);
const searchBtn = screen.getByRole("button",{name:"Search"});
const searchInput = screen.getByTestId("searchInput");
fireEvent.change(searchInput,{target:{value:"burger"}});
fireEvent.click(searchBtn);

const cardsAfterSearch = screen.getAllByTestId("resCard");
expect(cardsAfterSearch.length).toBe(4);
})

it("Should filter top rated restuarant",async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);
    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(13);

   
    })